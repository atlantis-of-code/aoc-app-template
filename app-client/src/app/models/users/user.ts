// AppTemplateModel import
import { AppTemplateModel } from '../app-template-model';

export class User extends AppTemplateModel {

  static field = {
    EMAIL: 'email',
    FULL_NAME: 'full_name',
    PASS: 'pass',
    USERNAME: 'username',
  };



  // Fields

  email!: string;
  full_name?: string;
  pass!: string;
  username!: string;

}
