<template>
  <component
    :is="isTextarea ? 'textarea' : 'input'"
    v-bind="attrs"
    :type="isTextarea ? undefined : type"
    :value="modelValue"
    :class="[
      'input input-primary px-4 border shadow-sm w-full',
      isTextarea && 'py-4 min-h-[6rem] max-h-[10rem]'
    ]"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts" setup>
import { useAttrs, computed } from 'vue'

const attrs = useAttrs()

interface Props {
  modelValue?: string | number | null
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
})

const isTextarea = computed(() => props.type === 'textarea')

defineEmits<{
  (e: 'update:modelValue', value: string | number | null): void
}>()
</script>
