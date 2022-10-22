import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoblistComponent } from './joblist.component';

const routes: Routes = [
  {
    path:'',
    component: JoblistComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoblistRoutingModule { }
