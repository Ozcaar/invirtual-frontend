import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: '<main class="shell"><router-outlet /></main>',
  styleUrl: "./app.component.css",
})
export class AppComponent {}
