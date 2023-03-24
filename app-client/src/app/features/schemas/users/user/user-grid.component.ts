import { Component, OnInit } from '@angular/core';
import { AocGridColumn } from '@atlantis-of-code/aoc-client/core/types';
import { User } from '../../../../models/users/user';
import { UserModelConfig } from '../../../../model-configs/users/user-model-config';
import { AocGridModule } from '@atlantis-of-code/aoc-client/components/aoc-grid';
import { AocUiWindowDynRef } from '@atlantis-of-code/aoc-client/ui/overlay/aoc-ui-window';
import { AocRestOptions } from '@atlantis-of-code/aoc-client/aoc-common';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-usuario-grid',
  imports: [
    CommonModule,
    AocGridModule
  ],
  template: `
    <aoc-grid [modelConfig]="modelConfig" [columns]="columns" [restOptions]="restOptions">
    </aoc-grid>
  `
})
export class UserGridComponent implements OnInit {
  protected columns: AocGridColumn<User>[];

  protected restOptions: AocRestOptions<User> = {
    fields: [ User.field.USERNAME, User.field.FULL_NAME, User.field.EMAIL ]
  }

  constructor(
    protected modelConfig: UserModelConfig,
    private aocUiWindowDynRef: AocUiWindowDynRef
  ) {}

  ngOnInit() {
    this.columns = [
      {
        header: 'User name',
        display: User.field.USERNAME,
        defaultSort: 'asc',
        size: '15rem'
      },
      {
        header: 'Full name',
        display: User.field.FULL_NAME
      },
      {
        header: 'E-mail',
        display: User.field.EMAIL
      },
    ];
    this.aocUiWindowDynRef.header('Application user panel');
    this.aocUiWindowDynRef.show();
  }
}
