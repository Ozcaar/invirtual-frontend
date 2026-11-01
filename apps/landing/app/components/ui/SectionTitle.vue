<template>
  <!-- Head -->
  <div class="max-w-4xl lg:max-w-7xl mx-auto space-y-4 animate-fade-in-up my-16">
    <!-- Title -->
    <h2 class="text-4xl text-center md:text-5xl font-bold text-brand-500">{{ title }}</h2>

    <!-- Subtitle -->
    <p class="text-xl text-center md:text-xl max-w-2xl mx-auto text-zinc-500 font-medium">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  }
});
</script>

<style></style>