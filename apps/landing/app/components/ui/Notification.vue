<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'info', // success | error | warning | info
  },
  message: {
    type: String,
    required: true,
  },
})

const iconMap = {
  success: 'lucide:circle-check',
  error: 'lucide:circle-x',
  warning: 'lucide:alert-triangle',
  info: 'lucide:info',
}

const colorMap = {
  primary: 'var(--color-primary)',
  success: 'var(--color-success, #22c55e)',
  error: 'var(--color-error, #ef4444)',
  warning: 'var(--color-warning, #f59e0b)',
  info: 'var(--color-info, #3b82f6)',
}

const iconName = computed(() => iconMap[props.type] || iconMap.info)
const iconColor = computed(() => colorMap[props.type] || colorMap.info)
</script>

<template>
  <div class="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-4 fade-in duration-500">
    <div
      class="flex text-sm md:text-md text-center items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg border border-neutral">
      <div class="w-5 h-5 flex items-center justify-center">
        <Icon :name="iconName" size="20" :style="{ color: iconColor }" />
      </div>
      <span class="text-foreground font-medium whitespace-nowrap">{{ message }}</span>
    </div>
  </div>
</template>
