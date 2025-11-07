<template>
  <UiCard class="border-2 shadow-xl" bg-color="bg-white">

    <div class="space-y-6">

      <!-- Card header -->
      <div class="space-y-2">

        <!-- Card title -->
        <div class="card-title">

          <!-- Palette icon -->
          <div class="flex justify-center">
            <Icon name="lucide:palette" size="20" style="color: var(--color-primary);" />
          </div>
          <div class="text-base w-full">Selecciona una Plantilla</div>
        </div>

        <!-- Card subtitle -->
        <div class="text-sm text-zinc-500">Elige el estilo base para tu invitación</div>
      </div>

      <!-- Card content -->
      <div class="space-y-4">

      </div>
    </div>
  </UiCard>

  <UiCard class="border-2 shadow-xl" bg-color="bg-white">

    <div class="space-y-6">

      <!-- Card header -->
      <div class="space-y-2">

        <!-- Card title -->
        <div class="card-title">

          <!-- Palette icon -->
          <div class="flex justify-center">
            <Icon name="lucide:palette" size="20" style="color: var(--color-primary);" />
          </div>
          <div class="text-base w-full">Personaliza los Colores</div>
        </div>
      </div>

      <!-- Card content -->
      <div class="space-y-4">
        <!-- Primary color -->
        <div class="space-y-2">
          <label class="font-medium">Color Principal</label>
          <div class="flex gap-2 flex-wrap items-center">
            <!-- Default color palette -->
            <button v-for="color in COLORS_BUILDER" :key="color.value" :style="{ backgroundColor: color.value }"
              :title="color.name" @click="setPrimaryColor(color.value)" :class="[
                'h-10 w-10 rounded-full border-2 transition-all hover:scale-110',
                invitationBuilderStore.invitationData.primaryColor === color.value
                  ? 'border-white ring-4 ring-[var(--color-primary-60)]'
                  : 'border-muted'
              ]"></button>

            <!-- Custom selector -->
            <button @click="triggerPrimaryPicker" :style="customPrimaryStyle" :class="[
              'h-10 w-10 rounded-full border-2 transition-all hover:scale-110 flex items-center justify-center',
              isPrimaryCustomSelected
                ? 'border-white ring-4 ring-[var(--color-primary-60)]'
                : 'border-dashed border-muted text-muted'
            ]" title="Elegir color personalizado">
              <Icon v-if="!isPrimaryCustomSelected" name="mdi:palette-outline" size="20" />
            </button>

            <input ref="primaryPicker" type="color" class="hidden" @input="onPrimaryPickerChange" />
          </div>
        </div>

        <!-- Secondary color -->
        <div class="space-y-2">
          <label class="font-medium">Color Secundario</label>
          <div class="flex gap-2 flex-wrap items-center">
            <!-- Default color palette -->
            <button v-for="color in COLORS_BUILDER" :key="color.value" :style="{ backgroundColor: color.value }"
              :title="color.name" @click="setSecondaryColor(color.value)" :class="[
                'h-10 w-10 rounded-full border-2 transition-all hover:scale-110',
                invitationBuilderStore.invitationData.secondaryColor === color.value
                  ? 'border-white ring-4 ring-[var(--color-primary-60)]'
                  : 'border-muted'
              ]"></button>

            <!-- Custom selector -->
            <button @click="triggerSecondaryPicker" :style="customSecondaryStyle" :class="[
              'h-10 w-10 rounded-full border-2 transition-all hover:scale-110 flex items-center justify-center',
              isSecondaryCustomSelected
                ? 'border-white ring-4 ring-[var(--color-primary-60)]'
                : 'border-dashed border-muted text-muted'
            ]" title="Elegir color personalizado">
              <Icon v-if="!isSecondaryCustomSelected" name="mdi:palette-outline" size="20" />
            </button>

            <input ref="secondaryPicker" type="color" class="hidden" @input="onSecondaryPickerChange" />
          </div>
        </div>
      </div>
    </div>
  </UiCard>

  <UiCard class="border-2 shadow-xl" bg-color="bg-white">

    <div class="space-y-6">

      <!-- Card header -->
      <div class="space-y-2">

        <!-- Card title -->
        <div class="card-title">

          <!-- Type icon -->
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
              <path fill="none" stroke="#d9a514" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4v16M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2M9 20h6" />
            </svg>
          </div>
          <div class="text-base w-full">Tipografía</div>
        </div>
      </div>

      <!-- Card content -->
      <div class="space-y-4">
        <div class="space-y-2">
          <div v-for="font in FONTS_BUILDER" :key="font.value" class="flex items-center space-x-2">
            <label class="flex-1 cursor-pointer" :style="{ fontFamily: font.value }">
              <FormsBaseRadio :id="font.value" type="radio" name="font" :value="font.value" />
              {{ font.name }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </UiCard>
</template>

<script lang="ts" setup>

import { useInvitationBuilderStore } from '~/stores/invitationBuilder';
import { COLORS_BUILDER, FONTS_BUILDER } from '../constants';
import { ref } from 'vue'

const invitationBuilderStore = useInvitationBuilderStore()
const primaryPicker = ref<HTMLInputElement | null>(null)
const secondaryPicker = ref<HTMLInputElement | null>(null)
const customPrimary = ref<string | null>(null)
const customSecondary = ref<string | null>(null)

// Opens the color pickers
const triggerPrimaryPicker = () => primaryPicker.value?.click()
const triggerSecondaryPicker = () => secondaryPicker.value?.click()

// Default button colors
const setPrimaryColor = (color: string) => invitationBuilderStore.updateData({ primaryColor: color })
const setSecondaryColor = (color: string) => invitationBuilderStore.updateData({ secondaryColor: color })


// Input color change handlers
const onPrimaryPickerChange = (event: Event) => {
  const input = event.target as HTMLInputElement | null
  if (input?.value) {
    customPrimary.value = input.value
    setPrimaryColor(input.value)
  }
}

const onSecondaryPickerChange = (event: Event) => {
  const input = event.target as HTMLInputElement | null
  if (input?.value) {
    customSecondary.value = input.value
    setSecondaryColor(input.value)
  }
}

// Computed to show dynamic color in the button
const isPrimaryCustomSelected = computed(
  () =>
    customPrimary.value !== null &&
    invitationBuilderStore.invitationData.primaryColor === customPrimary.value
)
const customPrimaryStyle = computed(() =>
  customPrimary.value
    ? { backgroundColor: customPrimary.value }
    : {}
)

const isSecondaryCustomSelected = computed(
  () =>
    customSecondary.value !== null &&
    invitationBuilderStore.invitationData.secondaryColor === customSecondary.value
)
const customSecondaryStyle = computed(() =>
  customSecondary.value
    ? { backgroundColor: customSecondary.value }
    : {}
)
</script>

<style></style>