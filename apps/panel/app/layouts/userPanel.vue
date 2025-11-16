<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Navbar -->
      <nav class="navbar w-full bg-base-300">
        <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost">
          <!-- Sidebar toggle icon -->
          <Icon name="lucide-menu" size="24"
            class="text-(--foreground) transition-transform duration-300 ease-in-out" />
        </label>
        <div class="px-4 flex items-center justify-between w-full">
          <span class="font-semibold text-xl">Hola, {{ panelStore.userName }} 👋</span>

          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul tabindex="-1"
              class="menu menu-sm dropdown-content font-medium bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow">
              <li>
                <a class="h-10 flex items-center text-(--foreground)">
                  <Icon name="lucide-settings" size="16" class="transition-transform duration-300 ease-in-out" />
                  Cuenta
                </a>
              </li>
              <li>
                <a class="h-10 flex items-center text-error">
                  <Icon name="lucide-log-out" size="16" class="transition-transform duration-300 ease-in-out" />
                  Cerrar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Page content -->
      <div class="p-4">
        <slot></slot>
      </div>
    </div>

    <div class="drawer-side is-drawer-close:overflow-visible">
      <!-- <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label> -->

      <!-- Sidebar -->
      <div class="flex h-full flex-col items-start bg-base-200 is-drawer-close:w-auto is-drawer-open:w-64">
        <!-- Sidebar header -->
        <div class="w-full p-4 shadow-sm">
          <div class="flex items-center gap-2 is-drawer-close:tooltip is-drawer-close:tooltip-right">
            <div class="flex h-8 w-10 items-center justify-center">
              <div class="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent">
                <span class="text-sm font-bold text-white">IR</span>
              </div>
            </div>
            <span class="font-semibold text-foreground is-drawer-close:hidden">InviRtual</span>
          </div>
        </div>

        <div class="flex flex-1 flex-col w-full">
          <!-- Menu items -->
          <ul class="menu w-full">
            <li v-for="item in menuItems" :key="item.id" class="h-16">
              <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" :data-tip="item.label">
                <div class="h-10 w-8 flex items-center justify-center">
                  <Icon :name="item.icon" size="16"
                    class="text-(--foreground) transition-transform duration-300 ease-in-out" />
                </div>
                <span class="text-(--foreground) is-drawer-close:hidden">
                  {{ item.label }}
                </span>
              </button>
            </li>
          </ul>

          <!-- Logout -->
          <ul class="menu w-full mt-auto mb-2">
            <li class="h-14">
              <button class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Cerrar sesión">
                <div class="h-10 w-8 flex items-center justify-center">
                  <Icon name="lucide-log-out" size="16"
                    class="text-error transition-transform duration-300 ease-in-out" />
                </div>
                <span class="text-error is-drawer-close:hidden">
                  Cerrar sesión
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { menuItems } from '~/pages/panel/constants'
import { useUserPanelStore } from '~/stores/userPanel';
const panelStore = useUserPanelStore()

</script>
