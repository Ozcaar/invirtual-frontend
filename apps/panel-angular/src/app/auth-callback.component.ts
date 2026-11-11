import { isDevMode, Component, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="callback">
      <p>{{ message() }}</p>
      @if (hasProvisioningError()) {
        <a routerLink="/login">Volver a iniciar sesión</a>
      }
    </main>
  `,
  styles: `
    .callback { padding: 2rem; }
    p { margin: 0; color: #475467; }
    a { display: inline-block; margin-top: 1rem; color: #344054; }
  `,
})
export class AuthCallbackComponent implements OnInit {
  readonly message = signal('Iniciando sesión…');
  readonly hasProvisioningError = signal(false);

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    void this.completeLogin();
  }

  private async completeLogin(): Promise<void> {
    const session = await this.auth.getSession();

    if (!session) {
      await this.router.navigateByUrl('/login?error=oauth');
      return;
    }

    if (isDevMode()) console.log('Supabase access_token (development only):', session.access_token);

    this.message.set('Preparando tu cuenta…');

    try {
      await this.auth.provisionUser(session.access_token);
      await this.router.navigateByUrl('/panel');
    } catch {
      this.message.set('No se pudo preparar tu cuenta. Intenta iniciar sesión de nuevo.');
      this.hasProvisioningError.set(true);
    }
  }
}
