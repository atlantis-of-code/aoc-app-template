import { Component, OnInit } from '@angular/core';
import { AocGridColumn } from '@atlantis-of-code/aoc-client/core/types';
import { AocUser } from '../../../../models/users/aoc-user';
import { AocUserModelConfig } from '../../../../model-configs/users/aoc-user-model-config';
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
export default class UserGridComponent implements OnInit {
  protected columns: AocGridColumn<AocUser>[];

  protected restOptions: AocRestOptions<AocUser> = {
    fields: [ AocUser.field.USERNAME, AocUser.field.FULL_NAME, AocUser.field.EMAIL ]
  }

  constructor(
    protected modelConfig: AocUserModelConfig,
    private aocUiWindowDynRef: AocUiWindowDynRef
  ) {}

  ngOnInit() {
    this.columns = [
      {
        header: 'User name',
        display: AocUser.field.USERNAME,
        defaultSort: 'asc',
        size: '15rem'
      },
      {
        header: 'Full name',
        display: AocUser.field.FULL_NAME
      },
      {
        header: 'E-mail',
        display: AocUser.field.EMAIL
      },
    ];
    this.aocUiWindowDynRef.header('Application user panel');
    this.aocUiWindowDynRef.show();
  }
}
