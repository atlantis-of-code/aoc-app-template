import { RouterModule, Routes } from '@angular/router';
import { AocWindowGuard } from '@atlantis-of-code/aoc-client/core/guards';
import { AocUiWindowDynConfig } from '@atlantis-of-code/aoc-client/ui/overlay/aoc-ui-window';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'panel',
    loadComponent: () => import('./user-grid.component').then(c => c.UserGridComponent),
    canActivate: [ AocWindowGuard ],
    data: {
      width: 720,
      height: 400
    } as AocUiWindowDynConfig
  },
  {
    path: 'form',
    loadComponent: () => import('./user-form.component').then(c => c.UserFormComponent),
    canActivate: [ AocWindowGuard ],
    data: {
      width: 540,
      height: 200
    } as AocUiWindowDynConfig
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ]
})
export class UserModule {}
