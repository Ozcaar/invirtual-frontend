<template>
  <input
    v-bind="attrs"
    type="radio"
    :class="[
      'radio radio-primary text-primary border p-1 shadow-sm'
    ]"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()

interface Props {
  modelValue?: string | number | null
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: ''
})

defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
}>()
</script>
