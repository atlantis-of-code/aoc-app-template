import { Component } from '@angular/core';
import { AocModelManager } from '@atlantis-of-code/aoc-client/core/models';
import { AocUiLoggerService } from '@atlantis-of-code/aoc-client/ui/common/services';
import { AocUiDataMenu } from '@atlantis-of-code/aoc-client/ui/common/types';
import { meta } from './models/meta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainMenu: AocUiDataMenu = [
    {
      label: 'Settings',
      icon: 'settings',
      items: [
        { label: 'Users', routerLink: ['users', 'user', 'panel' ] }
      ]
    }
  ];

  headerMenu: AocUiDataMenu = [];

  constructor(private aocModelManager: AocModelManager,
              private logger: AocUiLoggerService) {
    this.logger.info('Starting app-client app.component.ts');
    this.aocModelManager.registerMeta(meta);
  }
}
