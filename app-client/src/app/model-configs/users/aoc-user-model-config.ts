import { Injectable } from '@angular/core';
import {
  AocModelConfig,
  AocModelConfigAllow,
  AocModelConfigClientPayload,
  AocModelConfigFormImport,
  AocModelConfigServerPayload,
} from '@atlantis-of-code/aoc-client/core/configs';

import { AocUser } from '../../models/users/aoc-user';

@Injectable({
  providedIn: 'root',
})
export class AocUserModelConfig extends AocModelConfig<AocUser> {
  constructor() {
    super(AocUser);
  }

  // Default read, write, delete and clone permissions
  readonly allow: AocModelConfigAllow = 'all';

  /*
   * Form options:
   * AocModelConfigFormatResolver: resolve form location by preprocessing information
   * AocModelConfigFormPath: route path to this model form
   * AocModelConfigFormImport: lazy loading import a form using its path (recommended)
   */
  readonly form: AocModelConfigFormImport = {
    loadComponent: () =>
      import('../../features/schemas/users/user/user-form.component'),
    aocUiWindowDynConfig: {
      width: 540,
      height: 200,
    },
  };

  // Filter definition for payloads sent by grids and autocompletes
  // AocModelConfigClientPayload is used to define here the AocFilterQuery for a given payload search term
  // AocModelConfigServer if a server side filter or query builder must be used to filter for a given payload search term
  readonly payload:
    | AocModelConfigClientPayload<AocUser>
    | AocModelConfigServerPayload;

  // This method is compatible with Angular Pipe, so the model config can be also used as a @Pipe
  transform(aocUser: AocUser): string {
    return aocUser.toString();
  }
}
