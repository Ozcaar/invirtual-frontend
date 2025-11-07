<script setup lang="ts">

import { TESTIMONIALS } from '~/pages/landing/constants';
import TestimonialCard from '~/components/ui/TestimonialCard.vue';

</script>

<template>
    <section class="py-24 px-4 bg-gradient-to-b relative overflow-hidden">
        <!-- Background -->
        <div class="absolute inset-0 opacity-30">
            <div class="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div class="absolute bottom-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div class="container mx-auto max-w-7xl relative z-10">
            <!-- Section title -->
            <UiSectionTitle title="Lo que dicen nuestros usuarios"
                subtitle="Miles de eventos exitosos creados con InviRtual"></UiSectionTitle>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TestimonialCard v-for="testimonial in TESTIMONIALS" :name="testimonial.name" :event="testimonial.event"
                    :image="testimonial.image" :text="testimonial.text" :rating="testimonial.rating" />
            </div>
        </div>
    </section>
</template>