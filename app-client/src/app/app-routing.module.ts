import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AocLoginComponent } from '@atlantis-of-code/aoc-client/components/aoc-login';
import { AocTabConfig } from '@atlantis-of-code/aoc-client/core/configs';
import { AocAuthGuard, AocLoginGuard } from '@atlantis-of-code/aoc-client/core/guards';
import { of } from 'rxjs';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: AocLoginComponent,
    canActivate: [AocLoginGuard],
    data: {
      title: of('Login')
    } as AocTabConfig
  },
  {
    path: '',
    canActivate: [AocAuthGuard],
    children: [
      { // DASHBOARD
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: of('Dashboard'),
          closable: false
        } as AocTabConfig
      },
      {
        path: 'users',
        loadChildren: () => import('./features/schemas/users/users.module')
      },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
