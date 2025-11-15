<template>
  <div
    class="relative overflow-hidden rounded-2xl bg-base-200 border-neutral border shadow-lg"
    :class="[aspectClass]"
  >
    <!-- Placeholder / Skeleton -->
    <div
      v-if="!loaded"
      class="absolute inset-0 skeleton"
    ></div>

    <!-- Real image -->
    <img
      :src="src"
      :alt="alt"
      :class="[
        'w-full h-full object-cover transition-opacity duration-700 ease-out',
        loaded ? 'opacity-100' : 'opacity-0'
      ]"
      @load="loaded = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  /** 'square', '4/3', '16/9', '3/2' */
  aspect: { type: String, default: '1/1' }
})

const loaded = ref(false)

const aspectClass = computed(() => {
  if (props.aspect === 'square') return 'aspect-square'
  return `aspect-[${props.aspect}]`
})
</script>
