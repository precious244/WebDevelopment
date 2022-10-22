import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { UpdateComponent } from '../update/update.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormRoutingModule
  ]
})
export class FormModule { }
