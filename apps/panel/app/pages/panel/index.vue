<template>
  <div>
    ASD
  </div>
</template>

<script lang="ts" setup>

import { useUserPanelStore } from '~/stores/userPanel';
const panelStore = useUserPanelStore()

definePageMeta({
  layout: 'user-panel'
})

</script>

<style>

</style>