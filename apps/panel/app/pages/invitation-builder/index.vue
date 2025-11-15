<template>
    <div class="min-h-screen bg-gradient-secondary-to-accent">

        <!-- Header -->
        <header class="border-b border-neutral bg-white backdrop-blur-lg sticky top-0 z-50">

            <!-- Header -->
            <div class="container mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center w-full gap-1 md:gap-4">

                        <!-- Back to main -->
                        <NuxtLink :to="routes.landing.home"
                            class="btn btn-md btn-ghost p-0 font-medium group text-sm sm:text-base w-[170px] sm:w-[200px] mx-0 sm:mx-0 transition-colors duration-300 ease-in-out hover:bg-(--color-neutral-60)">
                            <Icon name="formkit:arrowleft" size="15"
                                class="ml-1 sm:ml-2 transition-transform duration-300 ease-out group-hover:-translate-x-1.5" />
                            Volver al inicio
                        </NuxtLink>
                        <div class="h-6 w-px border border-neutral"></div>
                        <h1 class="text-base sm:text-xl font-semibold w-[50%] mx-2 sm:mx-4">Crear Invitación</h1>
                    </div>
                </div>

                <!-- Progress bar -->
                <div class="mt-4">
                    <ProgressBar></ProgressBar>
                </div>
            </div>
        </header>

        <!-- Main content -->
        <div class="container mx-auto px-4 py-8">
            <div class="grid lg:grid-cols-2 gap-8">

                <!-- Configuration panel -->
                <div class="space-y-6">
                    <StepOne v-if="invitationBuilderStore.currentStep === 1"></StepOne>
                    <StepTwo v-if="invitationBuilderStore.currentStep === 2"></StepTwo>
                    <StepThree v-if="invitationBuilderStore.currentStep === 3"></StepThree>
                    <StepFour v-if="invitationBuilderStore.currentStep === 4"></StepFour>

                    <!-- Navigation buttons -->
                    <div class="flex gap-3 pt-4">
                        <button v-if="invitationBuilderStore.currentStep > 1"
                            class="flex-1 btn bg-(--color-muted-30) border-2 border-neutral font-medium transition-colors duration-300 ease-in-out hover:bg-(--color-neutral-60)"
                            @click="invitationBuilderStore.prevStep">Atrás</button>
                        <button v-if="invitationBuilderStore.currentStep < invitationBuilderStore.totalSteps"
                            class="flex-1 btn bg-primary font-medium transition-colors duration-300 ease-in-out hover:bg-(--color-primary-80)"
                            @click="invitationBuilderStore.nextStep">Siguiente</button>
                        <button v-if="invitationBuilderStore.currentStep === invitationBuilderStore.totalSteps" @click="saveAndPublish()"
                            class="flex-1 btn bg-primary font-medium transition-colors duration-300 ease-in-out hover:bg-(--color-primary-80)">Guardar y Publicar</button>
                    </div>
                </div>

                <!-- Live preview -->
                <div class="lg:sticky lg:top-24 h-fit">
                    <!-- <InvitationPreview data={invitationData} /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import ProgressBar from '~/pages/invitation-builder/components/ProgressBar.vue';
import StepOne from './components/StepOne.vue';
import { useInvitationBuilderStore } from '~/stores/invitationBuilder';
import StepTwo from './components/StepTwo.vue';
import StepThree from './components/StepThree.vue';
import StepFour from './components/StepFour.vue';
import { getRoutes } from '~/utils/routes';

const invitationBuilderStore = useInvitationBuilderStore()
const routes = getRoutes()

async function saveAndPublish() {
  await navigateTo(routes.panel.confirmation, { external: true });
}

</script>

<style></style>