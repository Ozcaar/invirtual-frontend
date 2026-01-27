<template>

  <!-- NavBar -->
  <MinimalNavBar />

  <div class="min-h-screen relative overflow-hidden flex items-center justify-center p-4">

    <!-- Background -->
    <div class="absolute inset-0 bg-linear-to-br from-[#f8f5ff] via-white to-[#F5F1FE]"></div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-md animate-in fade-in duration-700">

      <!-- Logo and welcome text -->
      <div class="text-center mb-8">
        <p class="mb-3 text-4xl font-bold text-[#9B6FF3]">InviRtual</p>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Bienvenido de nuevo</h1>
        <!-- <h1 class="text-3xl font-bold text-gray-800 mb-2">Bienvenido a <span class="text-[#9B6FF3]">InviRtual</span></h1> -->
        <p class="text-gray-600 text-sm">Accede a tu cuenta para crear y gestionar tus invitaciones.</p>
      </div>

      <!-- Login card -->
      <div class="backdrop-blur-md bg-white/70 rounded-3xl shadow-xl border border-zinc-400/20 p-8">
        <div class="space-y-5">

          <!-- Sign in with Google -->
          <button @click="handleGoogleLogin" :disabled="isLoadingGoogle ||
            isLoadingFacebook"
            class="btn btn-ghost border w-full disabled:mix-blend-lighten h-14 bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow rounded-2xl transition-all text-gray-700 font-medium text-base">
            <template v-if="isLoadingGoogle">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 border-2 border-gray-300 border-t-[#9B6FF3] rounded-full animate-spin" />
                <span>Conectando...</span>
              </div>
            </template>
            <template v-else>
              <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continuar con Google
            </template>
          </button>

          <!-- Sign in with Facebook -->
          <button @click="handleFacebookLogin" :disabled="isLoadingGoogle ||
            isLoadingFacebook"
            class="btn btn-ghost border w-full disabled:mix-blend-lighten h-14 bg-[#1877F2] hover:bg-[#166FE5] border-[#1877F2] hover:border-[#166FE5] hover:shadow rounded-2xl transition-all text-white font-medium text-base">
            <template v-if="isLoadingFacebook">
              <div class="flex items-center gap-3">
                <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Conectando...</span>
              </div>
            </template>
            <template v-else>
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continuar con Facebook
            </template>
          </button>

          <!-- Divider -->
          <div class="divider justify-center text-sm text-neutral-400">
            Rápido y seguro
          </div>


        </div>

        <!-- Sign up link -->
        <div class="mt-6 space-y-3">
          <div class="flex items-center gap-3 text-sm text-gray-600">
            <div class="w-8 h-8 rounded-full bg-[#9B6FF3]/10 flex items-center justify-center shrink-0">
              <Icon name="lucide:key" size="16" class="text-[#9B6FF3]" />
            </div>
            <span>Sin necesidad de recordar contrasenas</span>
          </div>

          <div class="flex items-center gap-3 text-sm text-gray-600">
            <div class="w-8 h-8 rounded-full bg-[#9B6FF3]/10 flex items-center justify-center shrink-0">
              <Icon name="lucide-shield-check" size="16" class="text-[#9B6FF3]" />
            </div>
            <span>Tus datos estan protegidos</span>
          </div>

          <div class="flex items-center gap-3 text-sm text-gray-600">
            <div class="w-8 h-8 rounded-full bg-[#9B6FF3]/10 flex items-center justify-center shrink-0">
              <Icon name="lucide:zap" size="16" class="text-[#9B6FF3]" />
            </div>
            <span>Acceso instantaneo a tu cuenta</span>
          </div>
        </div>
      </div>

      <!-- Additional info -->
      <p class="text-center text-xs text-gray-500 mt-6">
        Al iniciar sesión, aceptas nuestros
        <NuxtLink :to="routes.landing.privacyPolicy" class="underline hover:cursor-pointer hover:text-gray-700">Términos
          de Servicio
        </NuxtLink>
        y
        <NuxtLink :to="routes.landing.termsOfService" class="underline hover:cursor-pointer hover:text-gray-700">
          Política de Privacidad
        </NuxtLink>.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MinimalNavBar from '../../../../modules/nuxt-invirtual-ui/components/layout/MinimalNavBar.vue'

const isLoadingGoogle = ref(false)
const isLoadingFacebook = ref(false)
const routes = getRoutes()
const supabase = useSupabaseClient()

const handleGoogleLogin = async () => {

  isLoadingGoogle.value = true
  
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${window.location.origin}/auth/callback` }
  })
  if (error) alert(error.message)
  
  isLoadingGoogle.value = false
}

const handleFacebookLogin = async () => {
  isLoadingFacebook.value = true

  // Simulate OAuth login
  await new Promise((resolve) => setTimeout(resolve, 1500))
  isLoadingFacebook.value = false
}

</script>

<style></style>