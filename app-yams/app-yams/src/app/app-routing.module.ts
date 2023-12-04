// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastriesComponent } from './pastries/pastries.component';
import { LoginComponent } from './login/login.component';

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
  // Autres routes si nécessaire...
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }