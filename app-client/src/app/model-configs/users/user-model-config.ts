import { Injectable } from '@angular/core';
import {
  AocGender,
  AocModelConfig,
  AocModelConfigAllow,
  AocModelConfigFormat,
  AocModelConfigFormPath,
  AocModelConfigName
} from '@atlantis-of-code/aoc-client/core/configs';
import { User } from '../../models/users/user';

@Injectable({ providedIn: 'root' })
export class UserModelConfig extends AocModelConfig<User> {
  constructor() {
    super(User);
  }

  readonly name: AocModelConfigName = {
    singular: 'user',
    plural: 'users',
    gender: AocGender.Masculine
  };

  readonly formPath: AocModelConfigFormPath = ['users', 'user', 'form'];

  readonly allow: AocModelConfigAllow = 'all';

  readonly format: AocModelConfigFormat<User> = u => u.full_name ?? u.username;
}
