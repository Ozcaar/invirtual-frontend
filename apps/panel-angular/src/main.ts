import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHlmSidebarConfig } from '@panel/ui/sidebar';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHlmSidebarConfig({
      sidebarWidth: '15.5rem',
      sidebarWidthMobile: '18rem',
      mobileBreakpoint: '767px',
    }),
  ],
}).catch((error: unknown) => console.error(error));
