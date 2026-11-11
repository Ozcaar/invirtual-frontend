import { Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'auth/callback', component: AuthCallbackComponent },
  { path: 'panel', component: HomeComponent, canActivate: [authGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'panel' },
  { path: '**', redirectTo: 'panel' },
];
