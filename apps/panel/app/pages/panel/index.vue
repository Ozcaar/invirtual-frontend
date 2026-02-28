<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-3xl font-bold text-foreground">Mis Invitaciones</h2>
        <p class="mt-1 text-muted-foreground">Gestiona y personaliza tus invitaciones digitales</p>
      </div>
      <!-- <Button class="gap-2 bg-gradient-to-white from-primary to-accent hover:opacity-90">
        <Plus class="h-4 w-4" />
        Crear Nueva
      </Button> -->
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      <PanelCard v-for="invitation in MOCK_INVITATIONS" :key="invitation.id"
        class="group border border-border bg-white transition-all duration-300 hover:shadow-lg">

        <!-- Image -->
        <div class="relative h-40 overflow-hidden rounded-2xl">
          <img :src="invitation.preview || '/placeholder.svg'" :alt="invitation.name"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
        </div>

        <!-- Header -->
        <div class="pb-3">
          <div class="space-y-2 mt-4">
            <p class="line-clamp-2 text-xl text-(--color-brand-500) font-bold">{{ invitation.name }}</p>
            <div class="flex items-center justify-between text-neutral-500">
              <p class="text-sm">
                {{ new Date(invitation.date).toLocaleDateString('es-ES') }}
              </p>
              <div v-html="getStatusBadge(invitation.status)"></div>
            </div>
          </div>
        </div>

        <!-- Guests count -->
        <div class="mb-4 text-sm text-muted-foreground text-neutral-500">
          <p>{{ invitation.guests }} invitados</p>
        </div>

        <!-- Buttons -->
        <div class="flex gap-2">
          <NuxtLink class="btn btn-ghost border border-neutral font-medium flex-1 gap-1 hover:bg-(--color-accent-80)">
            <Icon name="lucide-eye" size="17" />
            <span class="hidden sm:inline">Vista</span>
          </NuxtLink>
          <NuxtLink class="btn btn-ghost border border-neutral font-medium flex-1 gap-1 hover:bg-(--color-accent-80)">
            <Icon name="lucide-edit-2" size="17" />
            <span class="hidden sm:inline">Editar</span>
          </NuxtLink>
          <NuxtLink class="btn btn-ghost border border-neutral font-medium flex-1 gap-1 hover:bg-(--color-accent-80)">
            <Icon name="lucide-bar-chart-3" size="17" />
            <span class="hidden sm:inline">Stats</span>
          </NuxtLink>

          <!-- Dropdown button -->
          <div class="dropdown dropdown-center">
            <div tabindex="0" role="button"
              class="btn btn-ghost border border-neutral font-medium flex-1 gap-1 hover:bg-(--color-accent-80)">
              <Icon name="lucide-more-vertical" size="17" />
            </div>
            <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li>
                <a v-if="invitation.status === 'active'">
                  <Icon name="lucide-lock" size="16" class="mr-2" />
                  Desactivar
                </a>
                <a v-else>
                  <Icon name="lucide-unlock" size="16" class="mr-2" />
                  Activar
                </a>
              </li>
              <li>
                <a class="text-error">
                  <Icon name="lucide-trash-2" size="16" class="mr-2" />
                  Eliminar
                </a>
              </li>
            </ul>
          </div>
        </div>

      </PanelCard>

      <!-- {/* Add New Card */} -->
      <PanelCard
        class="group border-2 border-dashed border-border bg-linear-to-br from-secondary/5 to-accent/5 transition-all duration-300 hover:border-primary hover:bg-linear-to-br hover:from-primary/5 hover:to-accent/5 cursor-pointer">
        <NuxtLink :to="routes.panel.invitationBuilder">
          <div class="flex h-full items-center justify-center p-6">
            <div class="flex flex-col items-center gap-1 text-center transition-all">
              <div
                class="rounded-2xl bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 flex items-center justify-center">
                <Icon name="lucide-plus" size="24" class="text-primary" />
              </div>
              <span class="text-lg font-medium text-foreground mt-4">Crear nueva invitación</span>
              <span class="text-base text-muted-foreground text-neutral-500">Comienza a diseñar</span>
            </div>
          </div>
        </NuxtLink>
      </PanelCard>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { MOCK_INVITATIONS } from '~/utils/constants/invitations_constants';
import { getRoutes } from '~/utils/routes';

const routes = getRoutes();
function getStatusBadge(status: string) {
  let badgeClass = '';
  let text = '';

  switch (status) {
    case 'active':
      badgeClass = 'bg-green-100 text-green-800';
      text = 'Activa';
      break;
    case 'inactive':
      badgeClass = 'bg-yellow-100 text-yellow-800';
      text = 'Inactiva';
      break;
    case 'archived':
      badgeClass = 'bg-gray-100 text-gray-800';
      text = 'Archivada';
      break;
    default:
      badgeClass = 'bg-gray-100 text-gray-800';
      text = 'Desconocido';
  }
  return `<span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${badgeClass}">${text}</span>`;
}

definePageMeta({
  layout: 'user-panel'
})
</script>

<style></style>