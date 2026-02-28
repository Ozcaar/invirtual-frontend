<script setup lang="ts">

import { FEATURES } from '~/utils/constants';

</script>

<template>
  <div class="w-full flex items-center justify-center text-center px-4">
    <div class="container mx-auto max-w-7xl mb-48">
      <!-- Section title -->
      <UiSectionTitle title="Todo lo que necesitas para tu evento perfecto" subtitle="Herramientas profesionales diseñadas
          para hacer tu celebración inolvidable"></UiSectionTitle>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UiCard v-for="feature in FEATURES" :hoverable="true">
          <div class="card-body flex flex-col items-center text-center space-y-4">
            <!-- Icon -->
            <div
              :class="['flex justify-center items-center rounded-full w-20 h-20 transition-transform duration-300 ease-in-out group-hover:scale-110', feature.gradient]">
              <Icon :name="feature.icon" size="40" class="text-white transition-transform duration-300 ease-in-out" />
            </div>

            <!-- Title -->
            <h2 class="card-title font-semibold text-lg text-primary-content">
              {{ feature.title }}
            </h2>

            <!-- Description -->
            <p class="text-base text-base-content/80 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </UiCard>
      </div>
    </div>

  </div>
</template>