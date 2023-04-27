// Mikro-ORM imports
import {
  Entity,
  Property } from '@mikro-orm/core';
// AppTemplateEntity import
import { AppTemplateEntity } from '../app-template-entity';

@Entity({ tableName: 'users.aoc_user' })
export class AocUser extends AppTemplateEntity {

  static field = {
    EMAIL: 'email',
    FULL_NAME: 'full_name',
    PASS: 'pass',
    USERNAME: 'username',
  };


  // Fields

  @Property()
  email!: string;

  @Property({ nullable: true })
  full_name?: string;

  @Property()
  pass!: string;

  @Property()
  username!: string;

}
