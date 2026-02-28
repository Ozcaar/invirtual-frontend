<template>
  <div class="min-h-screen relative overflow-hidden flex items-center justify-center p-4">

    <!-- Background -->
    <div class="absolute inset-0 bg-linear-to-br from-[#f8f5ff] via-white to-[#F5F1FE]"></div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-md animate-in fade-in duration-700">

      <!-- Logo and welcome text -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Bienvenido a <span class="text-[#9B6FF3]">InviRtual</span>
        </h1>
        <p class="text-gray-600 text-sm">Accede a tu cuenta para crear y gestionar tus invitaciones.</p>
      </div>

      <!-- Login card -->
      <div class="backdrop-blur-md bg-white/70 rounded-3xl shadow-xl border border-zinc-400/20 p-8">
        <form class="space-y-7">

          <!-- Email field -->
          <div class="space-y-3">
            <div>
              <label for="email">Correo electrónico</label>
            </div>
            <div>
              <label
                class="w-full input input-accent flex-1 flex items-center gap-0 border border-neutral bg-muted px-4 py-2 shadow-sm">
                <Icon name="lucide:mail" size="20" class="text-gray-400 mr-4" />
                <UiInput type="text" placeholder="tu@email.com" id="email"
                  class="pl-10 input-with-icon text-sm shadow-none" v-model="email">
                </UiInput>
              </label>
            </div>
          </div>

          <!-- Password field -->
          <div class="space-y-3">
            <div>
              <label for="email">Contraseña</label>
            </div>
            <div>
              <label
                class="w-full input input-accent flex-1 flex items-center gap-0 border border-neutral bg-muted px-4 py-2 shadow-sm">
                <Icon name="lucide:lock" size="20" class="text-gray-400 mr-4" />

                <UiInput v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••"
                  class="pl-10 input-with-icon text-sm shadow-none">
                </UiInput>

                <label class="flex items-center gap-2 cursor-pointer text-gray-400 select-none ml-2"
                  @click="showPassword = !showPassword">
                  <Icon :name="showPassword ? 'lucide:eye-off' : 'lucide:eye'" size="20" />
                </label>
              </label>
            </div>
          </div>

          <!-- Remember me and forgot password -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <input id="remember" type="checkbox" v-model="rememberMe"
                class="w-5 h-5 toggle toggle-accent checkbox shadow" />
              <label for="remember" class="text-sm text-gray-600 cursor-pointer">
                Recordarme
              </label>
            </div>

            <NuxtLink :to="routes.panel.recoverPassword" class="text-sm text-[#a881f4] hover:underline">
              ¿Olvidaste tu contraseña?
            </NuxtLink>
          </div>

          <button :disabled="isLoading"
            class="w-full text-white btn border hover:scale-105 h-12 bg-[#a881f4] hover:bg-[#8b5cf6] rounded-3xl font-medium shadow-sm transition-all duration-200">

            <div v-if="isLoading" class="flex items-center gap-2 justify-center">
              <div class="w-5 h-5 border-2 border-gray-400 border-t-gray-700 rounded-full animate-spin" />
              <span>Iniciando sesión...</span>
            </div>
            <div v-else>
              Iniciar sesión
            </div>
          </button>

          <!-- Divider -->
          <div class="divider justify-center text-sm">
            o continúa con
          </div>

          <!-- Social login buttons -->
          <div class="grid grid-cols-2 gap-3">

            <button
              class="btn border border-neutral shadow-sm hover:scale-105 transition-transform duration-200 h-12 bg-white hover:bg-white rounded-3xl">
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>

            <button
              class="btn border border-neutral shadow-sm hover:scale-105 transition-transform duration-200 h-12 bg-white hover:bg-white rounded-3xl">
              <svg class="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>
        </form>

        <!-- Sign up link -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            ¿No tienes cuenta?
            <NuxtLink :to="routes.panel.register" class="text-sm text-[#a881f4] hover:underline">
              Crear cuenta
            </NuxtLink>
          </p>
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

const email = ref("")
const password = ref("")
const showPassword = ref(false)
const rememberMe = ref(false)
const isLoading = ref(false)

const routes = getRoutes()

</script>

<style></style>