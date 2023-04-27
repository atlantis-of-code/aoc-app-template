import { AocModelMetaMap } from '@atlantis-of-code/aoc-client/core/models';

import { AocUser } from './users/aoc-user';

export const meta: AocModelMetaMap = new Map();

meta.set(AocUser, {
  tableName: 'users.aoc_user',
  fields: {
    email: { type: 'string', isEntity: false, isCollection: false, isEmbedded: false, },
    full_name: { type: 'string', isEntity: false, isCollection: false, isEmbedded: false, },
    pass: { type: 'string', isEntity: false, isCollection: false, isEmbedded: false, },
    username: { type: 'string', isEntity: false, isCollection: false, isEmbedded: false, },
  }
});

