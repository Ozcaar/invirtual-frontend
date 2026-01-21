<template>
  <div class="space-y-6">
    <!-- Select invitation -->
    <div class="flex flex-col-reverse md:flex-row md:items-center justify-between">
      <label
        class="w-full input input-primary flex-1 flex items-center gap-0 border border-neutral bg-muted px-4 py-2 shadow-sm">
        <Icon name="lucide:chevron-down" size="20" class="text-muted-foreground mr-4" />
        <UiInput v-model="selectedInvitation" type="select" placeholder="Selecciona una invitación"
          :options="MOCK_INVITATIONS" optionValueKey="id" optionLabelKey="name"
          class="pl-10 guest-filter-input text-sm shadow-none">
        </UiInput>
      </label>
    </div>

    <!-- Summary Cards -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <PanelCard v-for="(data, index) in INVITATIONS_DATA" :key="index">

        <!-- Head -->
        <div class="pb-12">
          <p class="card-title text font-semibold text-neutral-500">
            <Icon :name="data.icon" size="20" />
            {{ data.name }}
          </p>
        </div>

        <!-- Content -->
        <div>
          <!-- Body -->
          <div :class="[
            'text-3xl font-bold',
            colorFor(index)
          ]">
            {{ data.value }}
          </div>

          <!-- Footer -->
          <p class="text-sm text-neutral-500">{{ data.label }}</p>
        </div>
      </PanelCard>
    </div>

    <!-- Charts -->

    <div class="grid gap-4 sm:grid-cols-1 lg:grid-cols-5">

      <!-- Bar Chart -->
      <PanelCard class="lg:col-span-3">
        <div class="pb-12">
          <p class="card-title text font-semibold text-(--foreground)">Actividad de Invitaciones</p>
          <p>Invitaciones creadas y confirmadas por mes</p>
        </div>
        <div>
          <BarChart :data="INVITATIONS_ACTIVITY_DATA" :height="300" :categories="invitationsActivityCategories"
            :y-axis="['total', 'confirmed']" :group-padding="0" :bar-padding="0.2" :x-num-ticks="6" :radius="4"
            :x-formatter="xFormatter" :y-formatter="yFormatter" :legend-position="LegendPosition.TopRight"
            :hide-legend="false" :y-grid-line="true" />
        </div>
      </PanelCard>


      <!-- Donut Chart -->
      <PanelCard class="lg:col-span-2">
        <div class="pb-12">
          <p class="card-title text font-semibold text-(--foreground)">Asistencia</p>
          <p>Total de respuestas</p>
        </div>
        <div>
          <DonutChart :data="donutData" :height="260" :categories="categories" :radius="80" :pad-angle="0.1"
            :arc-width="20">
            <div class="text-center">
              <div class="font-semibold">Label</div>
              <div class="text-muted">2 seconds ago</div>
            </div>
          </DonutChart>
        </div>
      </PanelCard>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { useUserPanelStore } from '~/stores/userPanel';
import { INVITATIONS_ACTIVITY_DATA, INVITATIONS_DATA } from '../../utils/constants/panel_constants'
import PanelCard from '../../components/panel/PanelCard.vue';
import { MOCK_INVITATIONS } from '~/utils/constants/invitations_constants';

const selectedInvitation = ref<number | null>(null)
const panelStore = useUserPanelStore()
const colorFor = (index: number) => {
  const colors = [
    "text-(--foreground)",
    "text-(--color-primary)",
    "text-(--color-secondary)",
    "text-(--color-accent)"
  ]

  return colors[index] || "text-(--foreground)"
}

definePageMeta({
  layout: 'user-panel'
})

// CHARTS

// Bars

const xFormatter = (i: number): string => `${INVITATIONS_ACTIVITY_DATA[i]?.month || ''}`
const yFormatter = (tick: number) => tick.toString()
const invitationsActivityCategories = {
  total: { name: 'Total', color: '#222222' },
  confirmed: { name: 'Confirmadas', color: '#555555' }
  // total: { name: 'Total', color: 'var(--foreground)' },
  // confirmed: { name: 'Confirmadas', color: 'var(--color-primary)' }
}

// Cake

// const donutData = ref([35, 25, 20, 15, 5])
const donutData = ref([35, 25, 20])
const marketShareLabels = [
  // { name: 'Confirmadas', color: 'var(--color-primary)' },
  // { name: 'Rechazadas', color: 'var(--color-secondary)' },
  // { name: 'Pendientes', color: 'var(--color-accent)' },
  { name: 'Confirmadas', color: '#222222' },
  { name: 'Rechazadas', color: '#555555' },
  { name: 'Pendientes', color: '#999999' },
  // { name: 'Product D', color: '#a855f7' },
  // { name: 'Other', color: '#06b6d4' },
]
const categories: Record<string, BulletLegendItemInterface> =
  Object.fromEntries(
    marketShareLabels.map((i) => [i.name, { name: i.name, color: i.color }]),
  )

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