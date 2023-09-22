// AppTemplateModel import
import { AocModelI18n } from '@atlantis-of-code/aoc-client/core/models';
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

  //region I18N
  static readonly i18n: AocModelI18n = {
    s: $localize`:@@APP_MODEL_AOCUSER_SINGULAR:user`,
    p: $localize`:@@APP_MODEL_AOCUSER_PLURAL:users`,
    g: {
      en: 'm'
    },
    EMAIL: $localize`:@@APP_MODEL_AOCUSER_FIELD_EMAIL:email`,
    FULL_NAME: $localize`:@@APP_MODEL_AOCUSER_FIELD_FULL_NAME:full name`,
    PASS: $localize`:@@APP_MODEL_AOCUSER_FIELD_PASS:password`,
    USERNAME: $localize`:@@APP_MODEL_AOCUSER_FIELD_USERNAME:user name`
  }
  //endregion

  //region CUSTOM
  // TODO: Implement your own toString method
  toString(): string {
    return `AocUser_${this.id}`;
  }
  //endregion
}
