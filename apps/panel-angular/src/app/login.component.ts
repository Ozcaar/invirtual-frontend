import { Component, signal } from "@angular/core";
import { LucideKeyRound, LucideShieldCheck, LucideZap } from "@lucide/angular";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [LucideKeyRound, LucideShieldCheck, LucideZap],
  templateUrl: "./login.component.html",
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
