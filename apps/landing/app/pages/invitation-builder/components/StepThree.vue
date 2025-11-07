<template>
  <UiCard class="border-2 shadow-lg" bg-color="bg-white">

    <div class="space-y-6">

      <!-- Card header -->
      <div class="space-y-2">

        <!-- Card title -->
        <div class="card-title">
          <div class="text-base w-full">Secciones Opcionales</div>
        </div>

        <!-- Card subtitle -->
        <div class="text-sm text-zinc-500">Activa las secciones que deseas incluir en tu invitación</div>
      </div>

      <!-- Card content / switchs -->
      <div class="space-y-6">
        <!-- Gift registry -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">

              <!-- Gift icon -->
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary-10)]">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g fill="none" stroke="#d9a514" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <rect width="18" height="4" x="3" y="8" rx="1" />
                      <path
                        d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5" />
                    </g>
                  </svg>
                </div>
              </div>

              <div>
                <label for="giftRegistry" class="text-base font-medium select-none">
                  Mesa de Regalos
                </label>
                <p class="text-sm text-muted-foreground">Comparte tu lista de regalos</p>
              </div>

            </div>

            <FormsBaseCheckbox id="giftRegistry" v-model="invitationBuilderStore.invitationData.giftRegistry" />
          </div>

          <UiInput v-if="invitationBuilderStore.invitationData.giftRegistry"
            placeholder="https://ejemplo.com/mesa-de-regalos"
            v-model="invitationBuilderStore.invitationData.giftRegistryLink"></UiInput>
        </div>

        <!-- Itinerary -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">

              <!-- Calendar icon -->
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary-10)]">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g fill="none" stroke="#d9a514" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="M8 2v4m8-4v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </g>
                  </svg>
                </div>
              </div>

              <div>
                <label for="itinerary" class="text-base font-medium select-none">
                  Itinerario
                </label>
                <p class="text-sm text-muted-foreground">Programa del evento</p>
              </div>

            </div>

            <FormsBaseCheckbox id="itinerary" v-model="invitationBuilderStore.invitationData.itinerary" />
          </div>
        </div>

        <!-- Gallery -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">

              <!-- Image icon -->
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary-10)]">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g fill="none" stroke="#d9a514" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </g>
                  </svg>
                </div>
              </div>

              <div>
                <label for="gallery" class="text-base font-medium select-none">
                  Galería de Fotos
                </label>
                <p class="text-sm text-muted-foreground">Comparte momentos especiales</p>
              </div>

            </div>

            <FormsBaseCheckbox id="gallery" v-model="invitationBuilderStore.invitationData.gallery" />
          </div>
        </div>

        <!-- Music -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">

              <!-- Music icon -->
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary-10)]">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g fill="none" stroke="#d9a514" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="M9 18V5l12-2v13" />
                      <circle cx="6" cy="18" r="3" />
                      <circle cx="18" cy="16" r="3" />
                    </g>
                  </svg>
                </div>
              </div>

              <div>
                <label for="music" class="text-base font-medium select-none">
                  Música de Fondo
                </label>
                <p class="text-sm text-muted-foreground">Añade una canción especial</p>
              </div>

            </div>

            <FormsBaseCheckbox id="music" v-model="invitationBuilderStore.invitationData.music" />
          </div>

          <UiInput v-if="invitationBuilderStore.invitationData.music" placeholder="URL de Spotify o YouTube"
            v-model="invitationBuilderStore.invitationData.musicUrl"></UiInput>
        </div>

        <!-- RSVP -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">

              <!-- Mail icon -->
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-primary-10)]">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <g fill="none" stroke="#d9a514" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                    </g>
                  </svg>
                </div>
              </div>

              <div>
                <label for="rsvp" class="text-base font-medium select-none">
                  Confirmación de Asistencia
                </label>
                <p class="text-sm text-muted-foreground">Permite que confirmen su asistencia</p>
              </div>

            </div>

            <FormsBaseCheckbox id="rsvp" v-model="invitationBuilderStore.invitationData.rsvp" />
          </div>
        </div>
      </div>
    </div>
  </UiCard>
</template>

<script lang="ts" setup>

import { useInvitationBuilderStore } from '~/stores/invitationBuilder';
const invitationBuilderStore = useInvitationBuilderStore()

</script>

<style></style>