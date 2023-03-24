import { ChangeSet, ChangeSetType, EntityField, EventSubscriber, FlushEventArgs, Subscriber } from '@mikro-orm/core';
import { User } from '../../entities/users/user';
import { AocContext } from '@atlantis-of-code/aoc-server';

@Subscriber()
export class UserSubscriber implements EventSubscriber<User> {

  async onFlush(args: FlushEventArgs) {
    const changeSets: ChangeSet<Partial<User>>[] = args.uow.getChangeSets().filter(cs => cs.entity instanceof User && ![ChangeSetType.DELETE, ChangeSetType.DELETE_EARLY].includes(cs.type));
    for (const cs of changeSets) {
      const user = cs.entity;
      const usernameField = AocContext.getUsernameField();
      const passwordField = AocContext.getPasswordField();
      if (user[usernameField]) {
        user[passwordField] = AocContext.getUserPasswordAssign(args.em, user[passwordField]) as any;
      } else if (user.id) {
        const existing = await args.em.fork().findOne(User, user.id, {fields: [ passwordField as EntityField<User, string> ]});
        user[passwordField] = existing[passwordField];
      }
      args.uow.computeChangeSet(user);
    }
  }
}
