<template>
  <UiCard class="border-2 shadow-xl" bg-color="bg-white">

    <div class="space-y-6">

      <!-- Card header -->
      <div class="space-y-2">

        <!-- Card title -->
        <div class="card-title">

          <!-- Sparkles icon -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <g fill="none" stroke="#d9a514" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path
                  d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4" />
                <circle cx="4" cy="20" r="2" />
              </g>
            </svg>
          </div>
          <div class="text-base w-full">Información del Evento</div>
        </div>

        <!-- Card subtitle -->
        <div class="text-sm text-zinc-500">Cuéntanos sobre tu evento especial</div>
      </div>

      <!-- Card content / inputs -->
      <div class="space-y-4">

        <!-- Event name input -->
        <div class="space-y-2 flex flex-col">
          <div class="flex space-x-2">
            <label for="eventName" class="text-sm font-medium select-none">Nombre del evento *</label>
          </div>
          <UiInput id="eventName" type="text" placeholder="Ej: Boda de Ana y Carlos"
            v-model="invitationBuilderStore.invitationData.eventName"></UiInput>
        </div>

        <!-- Date and time inputs -->
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="space-y-2 flex flex-col">
            <div class="flex space-x-2">

              <!-- Calendar icon -->
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <g fill="none" stroke="#18181b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M8 2v4m8-4v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </g>
                </svg>
              </div>
              <label for="eventDate" class="text-sm font-medium select-none">Fecha *</label>
            </div>
            <UiInput id="eventDate" type="date" v-model="invitationBuilderStore.invitationData.eventDate"></UiInput>
          </div>

          <div class="space-y-2 flex flex-col">
            <div class="flex space-x-2">

              <!-- Watch icon -->
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                  <g fill="none" stroke="#18181b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path d="M12 6v6l4 2" />
                    <circle cx="12" cy="12" r="10" />
                  </g>
                </svg>
              </div>
              <label for="eventTime" class="text-sm font-medium select-none">Hora *</label>
            </div>
            <UiInput id="eventTime" type="time" v-model="invitationBuilderStore.invitationData.eventTime"></UiInput>
          </div>
        </div>

        <!-- Event location input -->
        <div class="space-y-2 flex flex-col">
          <div class="flex space-x-2">

            <!-- Map pin icon -->
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                <g fill="none" stroke="#18181b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </g>
              </svg>
            </div>
            <label for="eventLocation" class="text-sm font-medium select-none">Lugar *</label>
          </div>
          <UiInput id="eventLocation" type="text" placeholder="Ej: Jardín Botánico, Ciudad de México"
            v-model="invitationBuilderStore.invitationData.eventLocation"></UiInput>
        </div>

        <!-- Event welcome message textarea -->
        <div class="space-y-2 flex flex-col">
          <div class="flex space-x-2">
            <label for="welcomeMessage" class="text-sm font-medium select-none">Mensaje de bienvenida</label>
          </div>
          <UiInput id="welcomeMessage" type="textarea" placeholder="Escribe un mensaje especial para tus invitados..."
            v-model="invitationBuilderStore.invitationData.welcomeMessage"></UiInput>
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