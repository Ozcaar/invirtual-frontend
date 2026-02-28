<script setup lang="ts">

import { STEPS_LANDING } from '~/utils/constants';

</script>

<template>
    <div class="w-full flex items-center justify-center text-center px-4">

        <div class="container mx-auto max-w-7xl mb-48">
            <!-- Section title -->
            <UiSectionTitle title="¿Cómo funciona?" subtitle="Cuatro pasos simples para crear la invitación perfecta">
            </UiSectionTitle>

            <div class="space-y-16">
                <div v-for="(step, index) in STEPS_LANDING" :key="index"
                    :class="['gap-8 lg:gap-12 flex flex-col', (index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse')]">
                    <div class="flex-1 space-y-4 text-left">
                        <div
                            class="inline-block px-4 py-2 rounded-full border-(--color-primary-30) border bg-(--color-primary-10) text-primary font-bold text-sm">
                            Paso {{ step.number }}
                        </div>
                        <h3 class="text-3xl font-bold">{{ step.title }}</h3>
                        <p class="text-lg text-muted-foreground leading-relaxed">{{ step.description }}</p>
                    </div>
                    <div class="flex-1">
                        <div class="overflow-hidden border-2 border-neutral shadow-xl card rounded-2xl">
                            <div class="p-0 aspect-square">
                                <UiImageLoader :src="step.image || ''" :alt="step.title" aspect="square" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>