import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';
import type { InvitationReadDTO } from './invitation.types';

@Injectable({ providedIn: 'root' })
export class InvitationService {
  constructor(
    private readonly http: HttpClient,
    private readonly auth: AuthService,
  ) {}

  async getInvitations(): Promise<InvitationReadDTO[]> {
    const session = await this.auth.getSession();
    if (!session) throw new Error('Se requiere una sesión activa para consultar invitaciones.');

    return firstValueFrom(
      this.http.get<InvitationReadDTO[]>(new URL('/invitation/list', environment.apiBase).toString(), {
        headers: { Authorization: `Bearer ${session.access_token}` },
      }),
    );
  }
}
