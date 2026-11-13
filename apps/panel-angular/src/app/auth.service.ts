import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient, type Session, type SupabaseClient } from '@supabase/supabase-js';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  readonly isConfigured = Boolean(environment.supabaseUrl && environment.supabaseAnonKey);

  private readonly client: SupabaseClient | null = this.isConfigured
    ? createClient(environment.supabaseUrl, environment.supabaseAnonKey, {
        auth: { flowType: 'pkce' },
      })
    : null;

  async signInWithGoogle(): Promise<void> {
    if (!this.client) throw new Error('Supabase no está configurado.');

    const { error } = await this.client.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });

    if (error) throw error;
  }

  async getSession(): Promise<Session | null> {
    if (!this.client) return null;

    const { data, error } = await this.client.auth.getSession();
    return error ? null : data.session;
  }

  async provisionUser(accessToken: string): Promise<void> {
    await firstValueFrom(
      this.http.get<void>(new URL('/user/me', environment.apiBase).toString(), {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    );
  }
}
