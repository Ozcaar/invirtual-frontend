<template>
  <div>
    <ul class="steps w-full">
      <li v-for="step in STEPS_BUILDER" :key="step.number"
        :class="['step text-sm lg:text-md', step.number <= invitationBuilderStore.currentStep ? 'step-primary' : 'text-zinc-500']"
        :data-content="step.number < invitationBuilderStore.currentStep ? '✓' : step.number">{{ step.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { STEPS_BUILDER } from '~/pages/invitation-builder/constants'
import { useInvitationBuilderStore } from '~/stores/invitationBuilder';

const invitationBuilderStore = useInvitationBuilderStore()
</script>

<style></style>