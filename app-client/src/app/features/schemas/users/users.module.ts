import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AocWindowGuard } from '@atlantis-of-code/aoc-client/core/guards';
import { AocUiWindowDynConfig } from '@atlantis-of-code/aoc-client/ui/overlay/aoc-ui-window';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: 'panel',
        loadComponent: () => import('./user/user-grid.component'),
        canActivate: [ AocWindowGuard ],
        data: {
          width: 720,
          height: 400
        } as AocUiWindowDynConfig
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UsersModule {}
