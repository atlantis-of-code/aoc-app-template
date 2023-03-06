import { AocEntity } from '@atlantis-of-code/aoc-server';
import { PrimaryKey, Property, t } from '@mikro-orm/core';

export class AppTemplateEntity extends AocEntity {

  /**
   * Cannot use BigIntType by now
   * https://github.com/mikro-orm/mikro-orm/issues/1968
   */
  @PrimaryKey({type: t.bigint})
    id?: string;

    @Property({nullable: true, type: 'text'})
    modification_time?: string;

    @Property({nullable: true, type: 'text'})
    modification_user?: string;

}
