<template>
  <section class="infantil">
    <h1>{{ data.event_name }}</h1>
    <p>{{ formatDate(data.date) }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{ data: any }>()
const formatDate = (date: string) => new Date(date).toLocaleDateString()
</script>