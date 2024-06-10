// Mikro-ORM imports
import {
  Entity,
  Property } from '@mikro-orm/core';
// AppTemplateEntity import
import { AppTemplateEntity } from '../app-template-entity';

@Entity({ tableName: 'users.aoc_user' })
export class AocUser extends AppTemplateEntity {
  //region Field names
  static readonly field = {
    EMAIL: 'email',
    FULL_NAME: 'full_name',
    PASS: 'pass',
    USERNAME: 'username',
  };
  //endregion

  //region Fields
  @Property()
  email!: string;
  @Property({ nullable: true })
  full_name?: string;
  @Property({ lazy: true })
  pass!: string;
  @Property()
  username!: string;
  //endregion

  //region CUSTOM
  //endregion
}
