// AppTemplateModel import
import { AppTemplateModel } from '../app-template-model';

export class AocUser extends AppTemplateModel {
  //region Field names
  static readonly field = {
    EMAIL: 'email',
    FULL_NAME: 'full_name',
    PASS: 'pass',
    USERNAME: 'username',
  };
  //endregion

  //region Fields
  email!: string;
  full_name?: string;
  pass!: string;
  username!: string;
  //endregion

  //region CUSTOM
  //endregion
}
