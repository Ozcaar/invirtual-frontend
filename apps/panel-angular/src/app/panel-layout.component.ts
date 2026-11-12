import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import {
  LucideCalendarDays,
  LucideHouse,
  LucideMenu,
  LucideUsersRound,
} from "@lucide/angular";
import {
  HlmSidebar,
  HlmSidebarContent,
  HlmSidebarGroup,
  HlmSidebarGroupContent,
  HlmSidebarGroupLabel,
  HlmSidebarHeader,
  HlmSidebarInset,
  HlmSidebarService,
  HlmSidebarWrapper,
} from "@panel/ui/sidebar";

@Component({
  selector: "app-panel-layout",
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    LucideCalendarDays,
    LucideHouse,
    LucideMenu,
    LucideUsersRound,
    HlmSidebar,
    HlmSidebarContent,
    HlmSidebarGroup,
    HlmSidebarGroupContent,
    HlmSidebarGroupLabel,
    HlmSidebarHeader,
    HlmSidebarInset,
    HlmSidebarWrapper,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./panel-layout.component.html",
})
export class PanelLayoutComponent {
  protected readonly sidebar = inject(HlmSidebarService);

  protected closeMobileSidebar(): void {
    this.sidebar.setOpenMobile(false);
  }
}
