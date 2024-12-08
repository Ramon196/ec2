import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { authGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}