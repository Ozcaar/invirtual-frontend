<script setup lang="ts">
import { PRICING_PLANS } from '~/pages/home/constants';
</script>

<template>
    <div class="w-full flex items-center justify-center text-center px-4">
        <div class="container mx-auto max-w-7xl mb-48">
            <!-- Section title -->
            <UiSectionTitle title="Planes para cada ocasión"
                subtitle="Elige el plan perfecto para tu evento. Sin sorpresas, sin costos ocultos."></UiSectionTitle>

            <!-- Cards -->
            <div class="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto p-6 md:p-0">
                <UiPricingCard v-for="feature in PRICING_PLANS" :name="feature.name" :price="feature.price"
                    :period="feature.period" :description="feature.description" :features="feature.features"
                    :cta="feature.cta" :popular="feature.popular" :btnText="feature.btnText" />
            </div>
        </div>



    </div>
</template>