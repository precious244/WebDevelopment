import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoblistRoutingModule } from './joblist-routing.module';
import { JoblistComponent } from './joblist.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    JoblistComponent
  ],
  imports: [
    CommonModule,
    JoblistRoutingModule,
    SharedModule
  ]
})
export class JoblistModule { }
