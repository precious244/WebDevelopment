import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { PendapatanComponent } from './pendapatan/pendapatan.component';
import { PengeluaranComponent } from './pengeluaran/pengeluaran.component';


@NgModule({
  declarations: [
    PendapatanComponent,
    PengeluaranComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }