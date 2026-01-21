<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-3xl font-bold text-foreground">Invitados</h2>
        <p class="mt-1 text-muted-foreground">Gestiona las confirmaciones de tus invitados</p>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="divider" />
    <div class="flex flex-col-reverse md:flex-row md:items-center justify-between">
      <div class="w-md flex flex-col md:flex-row md:items-center">
        <label
          class="w-full input input-primary flex-1 flex items-center gap-0 border border-neutral bg-muted px-4 py-2 shadow-sm">
          <Icon name="lucide:chevron-down" size="20" class="text-muted-foreground mr-4" />
          <UiInput v-model="selectedInvitation" type="select" placeholder="Selecciona una invitación"
            :options="MOCK_INVITATIONS" optionValueKey="id" optionLabelKey="name"
            class="pl-10 guest-filter-input text-sm shadow-none">
          </UiInput>
        </label>
      </div>

      <div class="flex gap-2">
        <div class="btn btn-ghost gap-2">
          <Icon name="lucide-download" size="20" />
          Exportar
        </div>
        <div class="btn gap-2 bg-linear-to-r from-primary to-accent hover:opacity-90">
          <Icon name="lucide-user-plus" size="20" />
          Agregar Invitado
        </div>
      </div>
    </div>

    <!-- Summary stats -->
    <div class="grid gap-4 md:grid-cols-3">
      <PanelCard class="border border-border bg-white/50 backdrop-blur">
        <div class="pb-2">
          <p class="card-title text font-semibold text-neutral-500">Total de Invitados</p>
        </div>
        <div>
          <div class="text-3xl font-bold text-foreground">{{ totalGuests }}</div>
        </div>
      </PanelCard>

      <PanelCard class="border border-border bg-white/50 backdrop-blur">
        <div class="pb-2">
          <p class="card-title text font-semibold text-neutral-500">Confirmados</p>
        </div>
        <div>
          <div class="flex items-baseline gap-2">
            <div class="text-3xl font-bold text-primary">{{ confirmedCount }}</div>
            <span class="text-sm text-neutral-500">
              {{ Math.round((confirmedCount / guests.length) * 100) }}%
            </span>
          </div>
        </div>
      </PanelCard>

      <PanelCard class="border border-border bg-white/50 backdrop-blur">
        <div class="pb-2">
          <p class="card-title text font-semibold text-neutral-500">Pendientes</p>
        </div>
        <div>
          <div class="text-3xl font-bold text-secondary">{{ guests.length - confirmedCount }}</div>
        </div>
      </PanelCard>
    </div>

    <!-- Filters -->
    <div class="flex flex-col gap-4 md:flex-row md:items-center">

      <!-- Input -->
      <div class="relative flex-1">
        <label
          class="w-full input input-primary flex-1 flex items-center gap-0 border border-neutral bg-muted px-4 py-2 shadow-sm">
          <Icon name="lucide:search" size="20" class="text-muted-foreground mr-4" />
          <UiInput type="text" placeholder="Buscar invitados..." class="pl-10 guest-filter-input text-sm shadow-none"
            v-model="searchTerm">
          </UiInput>
        </label>
      </div>

      <!-- Buttons -->
      <div class="flex gap-2 flex-wrap">
        <div class="btn border border-neutral hover:bg-accent"
          :class="groupFilter === null ? 'btn-primary' : 'btn-ghost'" @click="groupFilter = null">
          Todos
        </div>
        <div v-for="group in groups" class="btn border border-neutral hover:bg-accent" :key="group"
          :class="groupFilter === group ? 'btn-primary' : 'btn-ghost'" @click="groupFilter = group">
          {{ group }}
        </div>
      </div>
    </div>

    <!-- Table -->

    <div class="border border-neutral shadow-sm bg-white rounded-2xl overflow-x-auto">

      <table class="table table-zebra">
        <!-- Head -->
        <thead class="bg-base-300/75">
          <tr class="border-b border-border cursor-none">

            <!-- Column 1 -->
            <th class="text-foreground">Nombre</th>

            <!-- Column 2 -->
            <th class="text-center text-foreground">Invitados</th>

            <!-- Column 3 -->
            <th class="text-center text-foreground">Estado</th>

            <!-- Column 4 -->
            <th class="text-center text-foreground">Confirmación</th>

            <!-- Column 5 -->
            <th class="text-center text-foreground">Grupo</th>

            <!-- Column 5 -->
            <th class="w-10 text-center text-foreground">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="guest in filteredGuests" :key="guest.id" class="hover:bg-base-300 select-none">

            <!-- Column 1  -->
            <td class="font-medium">{{ guest.name }}</td>

            <!-- Column 2 -->
            <td class="text-center">{{ guest.guestCount }}</td>

            <!-- Column 3 -->
            <td class="text-center">
              <div class="flex justify-center items-center">
                <div v-if="guest.confirmed"
                  class="text-sm text-(--color-brand-500) font-semibold w-32 rounded-full bg-success/20 p-1">
                  <span class="flex justify-center items-center">
                    <Icon name="lucide-check-circle-2" size="14" />
                    &nbsp; Confirmado
                  </span>
                </div>
                <div v-else class="text-sm text-(--color-brand-500) font-semibold w-32 rounded-full bg-warning/20 p-1">
                  <span class="flex justify-center items-center">
                    <Icon name="lucide-clock" size="14" />
                    &nbsp; Pendiente
                  </span>
                </div>
              </div>
            </td>

            <!-- Column 4 -->
            <td class="text-center text-sm text-muted-foreground">
              {{ guest.confirmDate ? new Date(guest.confirmDate).toLocaleDateString('es-ES') : '-' }}
            </td>

            <!-- Column 5 -->
            <td class="text-center">
              <div class="flex justify-center items-center">
                <div class="text-sm text-(--color-brand-500) font-semibold w-24 rounded-full bg-error/20 p-1">
                  <span>{{ guest.group }}</span>
                </div>
              </div>
            </td>

            <!-- Column 6 -->
            <td class="text-center">
              <div class="dropdown dropdown-center">

                <button popovertarget="popover-1"
                  class="btn btn-ghost p-3 font-normal flex-1 gap-1 hover:bg-(--color-accent-80)">
                  <Icon name="lucide-more-vertical" size="17" />
                </button>

                <ul tabindex="-1" class="dropdown menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" popover
                  id="popover-1">
                  <li>
                    <a class="text-primary">
                      <Icon name="lucide-copy" size="16" class="mr-2" />
                      Copiar enlace
                    </a>
                  </li>
                  <li>
                    <a v-if="guest.active === true">
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MOCK_GUESTS } from '~/utils/constants/guests_constants'

import { ref, computed } from 'vue'
import { MOCK_INVITATIONS } from '~/utils/constants/invitations_constants'

const selectedInvitation = ref<number | null>(null)
const guests = ref(MOCK_GUESTS)
const searchTerm = ref('')
const groupFilter = ref<string | null>(null)

// Main filtered guests list
const filteredGuests = computed(() => {
  return guests.value.filter((guest) => {
    const matchesSearch = guest.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase())

    const matchesGroup = !groupFilter.value || guest.group === groupFilter.value

    return matchesSearch && matchesGroup
  })
})

// Group list
const groups = computed(() => {
  return Array.from(new Set(guests.value.map((g) => g.group)))
})

// Confirmed count
const confirmedCount = computed(() => {
  return guests.value.filter((g) => g.confirmed).length
})

// Total guests
const totalGuests = computed(() => {
  return guests.value.reduce((sum, g) => sum + g.guestCount, 0)
})



definePageMeta({
  layout: 'user-panel'
})
</script>

<style scoped>
.guest-filter-input {
  border: none;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  height: auto;
  box-shadow: none;
}

.guest-filter-input:focus {
  box-shadow: none;
  outline: none;
}
</style>