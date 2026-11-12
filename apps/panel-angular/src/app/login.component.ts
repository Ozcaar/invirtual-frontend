import { Component, signal } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  template: `
    <main class="login">
      <h1>Inicia sesión en InviRtual</h1>
      <button
        type="button"
        [disabled]="loading() || !auth.isConfigured"
        (click)="login()"
      >
        {{ loading() ? "Conectando…" : "Continuar con Google" }}
      </button>
      @if (!auth.isConfigured) {
        <p role="alert">
          La autenticación no está configurada para este entorno.
        </p>
      }
      @if (error()) {
        <p role="alert">{{ error() }}</p>
      }
    </main>
  `,
  styles: `
    .login {
      display: grid;
      justify-items: start;
      gap: 1rem;
      max-width: 24rem;
      margin: 6rem auto;
    }
    h1 {
      margin: 0;
      font-size: 1.75rem;
    }
    button {
      padding: 0.75rem 1rem;
      border: 1px solid #d0d5dd;
      border-radius: 0.5rem;
      background: #fff;
      color: #182230;
      font: inherit;
      cursor: pointer;
    }
    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
    p {
      margin: 0;
      color: #b42318;
    }
  `,
})
export class LoginComponent {
  readonly loading = signal(false);
  readonly error = signal("");

  constructor(readonly auth: AuthService) {}

  async login(): Promise<void> {
    this.loading.set(true);
    this.error.set("");

    try {
      await this.auth.signInWithGoogle();
    } catch (error) {
      this.error.set(
        error instanceof Error ? error.message : "No se pudo iniciar sesión.",
      );
      this.loading.set(false);
    }
  }
}
