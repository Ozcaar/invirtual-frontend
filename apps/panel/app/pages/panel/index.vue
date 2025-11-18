<template>
  <div class="space-y-6">
    <!-- Summary Cards -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <PanelCard v-for="(data, index) in invitationsData" :key="index">
        <div class="pb-12">
          <p class="card-title text-sm text-neutral-500">
            <Icon :name="data.icon" size="16" />
            {{ data.name }}
          </p>
        </div>

        <div>
          <div :class="[
            'text-3xl font-bold',
            colorFor(index)
          ]">
            {{ data.value }}
          </div>
          <p class="text-sm text-neutral-500">{{ data.label }}</p>
        </div>
      </PanelCard>
    </div>

  </div>
</template>

<script lang="ts" setup>

import { useUserPanelStore } from '~/stores/userPanel';

const panelStore = useUserPanelStore()
import { invitationsData } from './constants/constants'
import PanelCard from './components/PanelCard.vue';

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

</script>

<style></style>