<template>
  <div class="relative">
    <div class="fixed navbar bg-base-100 shadow-sm h-10 z-50">
      <div class="flex-1">
        <NuxtLink :to="landingUrl" class="btn btn-ghost text-xl">
          InviRtual
        </NuxtLink>
      </div>
      <div class="flex-none">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const landingUrl = runtimeConfig.public.landingUrl
</script>