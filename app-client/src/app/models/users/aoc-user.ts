import { AocModelI18n } from '@atlantis-of-code/aoc-client/core/models';
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

  //region I18N
  static readonly i18n: AocModelI18n = {
    s: $localize`:@@APP_MODEL_AOCUSER_SINGULAR:user`,
    p: $localize`:@@APP_MODEL_AOCUSER_PLURAL:users`,
    g: {
      en: 'm'
    },
    //region Fields for i18n (1 field per line)
    EMAIL: $localize`:@@APP_MODEL_AOCUSER_FIELD_EMAIL:Email`,
    FULL_NAME: $localize`:@@APP_MODEL_AOCUSER_FIELD_FULL_NAME:Full name`,
    PASS: $localize`:@@APP_MODEL_AOCUSER_FIELD_PASS:Pass`,
    USERNAME: $localize`:@@APP_MODEL_AOCUSER_FIELD_USERNAME:Username`,
    //endregion Fields for i18n
  }
  //endregion I18N

  //region CUSTOM
  toString(): string {
    return this.full_name ?? this.username ?? '';
  }
  //endregion
}
