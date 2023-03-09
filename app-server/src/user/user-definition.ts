import { AocUserDefinition } from '@atlantis-of-code/aoc-server';
import { AocUserConfig } from '@atlantis-of-code/aoc-server/aoc-common';
import { User } from '../entities/users/user';

@AocUserDefinition(new AocUserConfig(User, {
  fieldMap: {
    username: 'username',
    password: 'pass'
  }
}))
class UserDefinition {}
