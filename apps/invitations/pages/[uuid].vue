<template>
  <component :is="templateComponent" :data="invitationData" />
</template>

<script setup lang="ts">

import { useFetch } from 'nuxt/app'
import { useRuntimeConfig } from 'nuxt/kit'
import { defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Data fetch from backend
const { data: invitationData } = await useFetch(`/api/invitations/${route.params.uuid}`, {
  baseURL: useRuntimeConfig().public.apiBase
})

// Template dinamic load
const templateId = invitationData.value?.template_id || 'boda-romantica'
const templateComponent = defineAsyncComponent(() =>
  import(`@/templates/${templateId}/index.vue`)
)
</script>