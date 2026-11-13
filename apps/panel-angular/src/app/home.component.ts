import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, signal } from "@angular/core";
import { LucideCirclePlus } from "@lucide/angular";
import { InvitationService } from "./invitation.service";
import type { InvitationReadDTO } from "./invitation.types";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [LucideCirclePlus],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  protected readonly events = signal<InvitationReadDTO[]>([]);
  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);

  constructor(private readonly invitationService: InvitationService) {}

  ngOnInit(): void {
    void this.loadEvents();
  }

  protected async loadEvents(): Promise<void> {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    try {
      this.events.set(await this.invitationService.getInvitations());
    } catch (error: unknown) {
      this.events.set([]);
      this.errorMessage.set(this.getErrorMessage(error));
    } finally {
      this.isLoading.set(false);
    }
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse && error.status === 401) {
      return "Tu sesión no está disponible. Inicia sesión nuevamente.";
    }

    if (error instanceof HttpErrorResponse && error.status === 403) {
      return "No tienes permiso para consultar estos eventos.";
    }

    return "No fue posible cargar tus eventos. Comprueba tu conexión e inténtalo de nuevo.";
  }
}
