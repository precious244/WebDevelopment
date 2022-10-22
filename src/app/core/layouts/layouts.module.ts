import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login/login.component';
import { JoblistComponent } from './joblist/joblist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { JobupdateComponent } from './jobupdate/jobupdate.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    AdminContentComponent,
    FooterComponent,
    LoginComponent,
    JoblistComponent,
    NavbarComponent,
    ProfileComponent,
    JobupdateComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule
  ],
  exports:[
    TopbarComponent,
    SidebarComponent,
    AdminContentComponent,
    FooterComponent,
    NavbarComponent,
    JoblistComponent,
    ProfileComponent,
    JobupdateComponent,
    WelcomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutsModule { }
