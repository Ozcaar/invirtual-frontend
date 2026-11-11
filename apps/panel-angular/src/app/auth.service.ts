import { Injectable } from '@angular/core';
import { createClient, type Session, type SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
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
    const response = await fetch(new URL('/user/me', environment.apiBase), {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!response.ok) throw new Error('No se pudo preparar tu cuenta.');
  }
}
