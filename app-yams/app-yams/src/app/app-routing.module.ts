import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastriesComponent } from './pastries/pastries.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; 
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'pastries',
    component: PastriesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/pastries',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
