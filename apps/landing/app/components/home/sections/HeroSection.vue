<template>
    <div class="hero bg-base-200 min-h-screen lg:min-h-[90vh]">
        <div class="hero-overlay bg-white"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="flex justify-center items-center flex-col max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                <!-- Badge -->
                <div
                    class="flex justify-center items-center px-4 max-w-xs py-3 mb-10 border-(--color-primary-30) border rounded-full bg-(--color-primary-10)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                        <g fill="none" stroke="#d9a514" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path
                                d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4" />
                            <circle cx="4" cy="20" r="2" />
                        </g>
                    </svg>
                    <span class="ml-3 text-primary text-sm font-semibold">Las invitaciones del futuro</span>
                </div>

                <!-- Title -->
                <h1 class="text-5xl md:text-7xl font-bold text-brand-500">
                    Celebra tus momentos con
                    <span class="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        invitaciones digitales
                    </span> inolvidables
                </h1>

                <!-- Subtitle -->
                <p class="text-xl md:text-2xl max-w-2xl mx-auto text-zinc-500 font-medium">
                    Crea, personaliza y comparte la invitación perfecta en minutos
                </p>

                <!-- CTA Buttons -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <NuxtLink :to="routes.landing.pricing"
                        class="btn btn-primary p-0 group font-medium text-primary-content text-base md:text-lg bg-primary btn-xl w-[250px] mx-4 transition-colors duration-300 ease-in-out hover:bg-(--color-primary-80)">
                        Crear mi invitación
                        <Icon name="formkit:arrowright" size="15"
                            class="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                    </NuxtLink>
                    <NuxtLink :to="routes.landing.examples"
                        class="btn btn-neutral p-0 font-medium bg-(--color-muted-30) border-2 border-neutral group text-base md:text-lg btn-xl w-[175px] mx-4 transition-colors duration-300 ease-in-out hover:bg-(--color-neutral-60)">
                        Ver ejemplos
                    </NuxtLink>
                </div>

                <div class="pt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-zinc-500">
                    <div class="flex items-center gap-2">
                        <div class="flex -space-x-2">
                            <div v-for="i in 4"
                                class="w-8 h-8 rounded-full bg-linear-to-br from-primary to-accent border-2 border-white">
                            </div>
                        </div>
                        <span>+100 eventos creados</span>
                    </div>
                    <div>⭐⭐⭐⭐⭐ 4.9/5 valoración</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { getRoutes } from '~/utils/routes'
const routes = getRoutes()

</script>