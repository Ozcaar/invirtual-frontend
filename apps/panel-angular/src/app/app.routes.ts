import { Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { PanelLayoutComponent } from './panel-layout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'auth/callback', component: AuthCallbackComponent },
  {
    path: 'panel',
    component: PanelLayoutComponent,
    canActivate: [authGuard],
    children: [{ path: '', component: HomeComponent }],
  },
  { path: '', pathMatch: 'full', redirectTo: 'panel' },
  { path: '**', redirectTo: 'panel' },
];
