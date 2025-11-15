<template>
  <input 
    type="checkbox"
    v-bind="attrs"
    :checked="modelValue"
    class="toggle text-white bg-neutral checked:bg-primary p-1"
    @change="onChange"
  >
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()

interface Props {
  modelValue?: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>
