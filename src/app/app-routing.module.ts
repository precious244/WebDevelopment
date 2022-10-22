import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContentComponent } from './core/layouts/admin-content/admin-content.component';
import { JobComponent } from './module/admin/job/job.component';
import { JoblistComponent } from './module/admin/joblist/joblist.component';
import { LoginComponent } from './module/admin/login/login.component';
import { WelcomeComponent } from './module/admin/welcome/welcome.component';
import { ProfileComponent } from './module/profile/profile.component';

const routes: Routes = [
  // {
  //   path: 'profile',
  //   loadChildren: () => import('../app/module/profile/profile.module').then((x) => x.ProfileModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('../app/module/login/login.module').then((x) => x.LoginModule)
  // },
  {
    path: 'admin',
    loadChildren: () => import('../app/module/admin/admin.module').then((x) => x.AdminModule),
  },
  // {
  //   path: 'admin/dashboard',
  //   loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule),
  // },
  // {
  //    path: 'admin/report',
  //    loadChildren: () => import('../app/module/admin/report/report.module').then((x) => x.ReportModule)
  //  },
  // {
  //   path: 'admin/report',
  //   loadChildren: () => import('../app/module/admin/report/report.module').then((x) => x.ReportModule)
  // },
  // {
  //   path: 'form',
  //   loadChildren: () => import('./module/profile/form/form.module').then((x) => x.FormModule)
  // },
  // {
  //   path: 'forms',
  //   loadChildren: () => import('./module/forms/forms.module').then((x) => x.FormsModule)
  // },
  // {
  //   path: 'profile/update',
  //   loadChildren: () => import('../app/module/profile/update/update.module').then((x) => x.UpdateModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./module/home/home.module').then((x) => x.HomeModule)
  // },
    // {
    // path: 'admin',
    // loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule),
    // },
  {
    path: 'admin',
    component: AdminContentComponent,
    children: [{path  : 'dashboard', 
    loadChildren:() => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule)}]
  },
  {
  path: 'admin',
    component: LoginComponent,
    children: [{path  : 'login', 
    loadChildren:() => import('../app/module/admin/login/login.module').then((x) => x.LoginModule)}]
  },
  {
    path: 'admin',
      component: JoblistComponent,
      children: [{path  : 'joblist', 
      loadChildren:() => import('../app/module/admin/joblist/joblist.module').then((x) => x.JoblistModule)}]
    },
    {
    path: 'admin',
    component: ProfileComponent,
    children: [{path  : 'profile', 
    loadChildren:() => import('../app/module/admin/profile/profile.module').then((x) => x.ProfileModule)}]
  },
  {
    path: 'admin',
      component: JobComponent,
      children: [{path  : 'job', 
      loadChildren:() => import('../app/module/admin/job/job.module').then((x) => x.JobModule)}]
    },
   
    {
      path: 'admin',
        component: WelcomeComponent,
        children: [{path  : 'welcome', 
        loadChildren:() => import('../app/module/admin/welcome/welcome.module').then((x) => x.WelcomeModule)}]
      },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }