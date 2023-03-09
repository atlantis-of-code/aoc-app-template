/*
 * @license
 * Copyright Atlantis of Code All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/atlantis-of-code/aoc/blob/main/LICENSE
 *
 */

import { AocModel } from '@atlantis-of-code/aoc-client/core/models';

export class AppTemplateModel extends AocModel<string> {
  creation_user?: string;
  creation_time?: string;
  // modification_user?: string; // TODO: remove them from AocModel
  // modification_time?: string;
}
