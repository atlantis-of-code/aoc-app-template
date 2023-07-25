import { Injectable } from '@angular/core';
import {
  AocGender,
  AocModelConfig,
  AocModelConfigAllow,
  AocModelConfigFormImport,
  AocModelConfigName
} from '@atlantis-of-code/aoc-client/core/configs';
import { AocUser } from '../../models/users/aoc-user';

@Injectable({ providedIn: 'root' })
export class AocUserModelConfig extends AocModelConfig<AocUser> {
  constructor() {
    super(AocUser);
  }

  readonly name: AocModelConfigName = {
    singular: 'user',
    plural: 'users',
    gender: AocGender.Masculine
  };

  readonly form: AocModelConfigFormImport = {
    loadComponent: () => import('../../features/schemas/users/user/user-form.component'),
    aocUiWindowDynConfig: {
      width: 540,
      height: 200
    }
  };

  readonly allow: AocModelConfigAllow = 'all';

  transform(aocUser: AocUser): any {
    return aocUser?.full_name ?? aocUser?.username ?? '';
  }
}
