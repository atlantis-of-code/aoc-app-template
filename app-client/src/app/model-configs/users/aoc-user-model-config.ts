import { Injectable } from '@angular/core';
import {
  AocGender,
  AocModelConfig,
  AocModelConfigAllow,
  AocModelConfigFormat,
  AocModelConfigFormPath,
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

  readonly formPath: AocModelConfigFormPath = ['users', 'user', 'form'];

  readonly allow: AocModelConfigAllow = 'all';

  readonly format: AocModelConfigFormat<AocUser> = u => u.full_name ?? u.username;
}
