import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <main class="shell">
      <header class="header">
        <a class="brand" routerLink="/">InviRtual</a>
        <span class="eyebrow">Panel</span>
      </header>
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {}
