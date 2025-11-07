<template>
  <input type="checkbox" v-bind="attrs" :checked="modelValue" 
    class="toggle text-white bg-neutral checked:bg-primary p-1"
    @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)">
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()

interface Props {
  modelValue?: boolean
}

defineProps<Props>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>
