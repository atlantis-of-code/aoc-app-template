import { AocModel } from '@atlantis-of-code/aoc-client/core/models';

export class AppTemplateModel extends AocModel<string> {
  creation_user?: string;
  creation_time?: string;
  // modification_user?: string; // TODO: remove them from AocModel
  // modification_time?: string;
}
