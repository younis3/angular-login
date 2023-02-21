import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { LoginSuccessComponent } from './components/login-success/login-success.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'loginsuccess', component: LoginSuccessComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'myprofile', component: MyProfileComponent },
  { path: 'accountsettings', component: AccountSettingsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
