<template>
  <div class="p-6">Iniciando sesión…</div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

onMounted(async () => {
  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) return navigateTo('/login?error=oauth')

  return navigateTo('/panel')
})
</script>
