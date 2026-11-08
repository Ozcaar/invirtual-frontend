import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="welcome" aria-labelledby="welcome-title">
      <p class="eyebrow">InviRtual</p>
      <h1 id="welcome-title">Tu espacio para crear eventos</h1>
      <p class="description">La aplicación del panel está lista para comenzar.</p>
    </section>
  `,
  styles: `
    .welcome { padding-block: clamp(4rem, 12vw, 8rem); }
    .eyebrow { color: #475467; font-size: 0.875rem; font-weight: 600; }
    h1 { max-width: 12ch; margin-block: 1rem; color: #101828; font-size: clamp(2.5rem, 7vw, 4.5rem); line-height: 1.05; }
    .description { color: #475467; font-size: 1.125rem; }
  `,
})
export class HomeComponent {}
