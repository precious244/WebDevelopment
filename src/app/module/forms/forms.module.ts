import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { SederhanaComponent } from './sederhana/sederhana.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from '../forms/profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SederhanaComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
