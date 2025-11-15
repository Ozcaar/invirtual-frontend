<template>
  <component
    :is="type === 'textarea' ? 'textarea' : 'input'"
    v-bind="attrs"
    :type="type === 'textarea' ? undefined : type"
    :value="modelValue"
    :class="[
      'input input-primary font-normal border-neutral px-4 border shadow-sm w-full',
      type === 'textarea' ? 'py-4 min-h-24 max-h-40' : ''
    ]"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()

interface Props {
  modelValue?: string | number | null
  type?: string
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
})

defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
}>()
</script>
