<template>
  <div>
    <ul class="steps w-full">
      <li v-for="step in STEPS" :key="step.number"
        :class="['step text-sm lg:text-md', step.number <= invitationBuilderStore.currentStep ? 'step-primary' : 'text-zinc-500']"
        :data-content="step.number < invitationBuilderStore.currentStep ? '✓' : step.number">{{ step.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { STEPS_BUILDER } from '~/utils/constants/builder_constants'
import { useInvitationBuilderStore } from '~/stores/invitationBuilder';

const invitationBuilderStore = useInvitationBuilderStore()

interface Props {
  STEPS?: Array<{ number: number; title: string }>
}

withDefaults(defineProps<Props>(), {
  STEPS: () => STEPS_BUILDER,
})

</script>

<style></style>