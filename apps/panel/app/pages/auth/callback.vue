<template>
  <div class="p-6">
    <p>{{ message }}</p>
    <NuxtLink v-if="hasProvisioningError" to="/login" class="mt-4 inline-block underline">
      Volver a iniciar sesión
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const config = useRuntimeConfig()
const message = ref('Iniciando sesión…')
const hasProvisioningError = ref(false)

onMounted(async () => {
  const { data, error } = await supabase.auth.getSession()

  if (error || !data.session) return navigateTo('/login?error=oauth')

  try {
    message.value = 'Preparando tu cuenta…'
    await $fetch('/user/me', {
      baseURL: config.public.apiBase,
      headers: { Authorization: `Bearer ${data.session.access_token}` },
    })
    return navigateTo('/panel')
  } catch {
    console.error('No se pudo aprovisionar el usuario en la API')
    message.value = 'No se pudo preparar tu cuenta. Intenta iniciar sesión de nuevo.'
    hasProvisioningError.value = true
  }
})
</script>
