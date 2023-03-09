import { AocEntity } from '@atlantis-of-code/aoc-server';
import { PrimaryKey, Property, t } from '@mikro-orm/core';

export class AppTemplateEntity extends AocEntity {

  @PrimaryKey({ type: t.bigint/*, nullable: true*/ }) // TODO: check "nullable: true" issue
  id?: string;

  @Property({ nullable: true, type: 'text' })
  creation_user: string;

  @Property({ nullable: true, type: 'text' })
  creation_time: string;

  @Property({ nullable: true, type: 'text' })
  modification_user: string;

  @Property({ nullable: true, type: 'text' })
  modification_time: string;

}
