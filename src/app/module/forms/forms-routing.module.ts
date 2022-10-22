import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../forms/login/login.component';
import { SederhanaComponent } from './sederhana/sederhana.component';
import { ProfileComponent } from '../forms/profile/profile.component';

const routes: Routes = [
  {
    path:'sederhana',
    component: SederhanaComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
