<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-3xl font-bold text-foreground">Configuración de Cuenta</h2>
      <p class="mt-1 text-neutral-500">Gestiona tu perfil y preferencias</p>
    </div>

    <!-- Personal data -->
    <PanelCard>
      <div class="pb-12">
        <p class="card-title text font-semibold text-(--foreground)">Información Personal</p>
        <p class="text-neutral-500">Actualiza tus datos personales</p>
      </div>

      <div class="space-y-6">
        <div class="grid gap-4 md:grid-cols-2">

          <!-- Full name -->
          <div class="space-y-2">
            <div class="flex space-x-2">
              <label for="name" class="text-sm font-medium select-none">Nombre completo</label>
            </div>
            <UiInput id="name" type="text" placeholder="Ej: Ana Pérez" v-model="formData.name">
            </UiInput>
          </div>

          <!-- Email -->
          <div class="space-y-2">
            <div class="flex space-x-2">
              <label for="email" class="text-sm font-medium select-none">Correo electrónico</label>
            </div>
            <UiInput id="email" type="email" placeholder="Ej:" v-model="formData.email" disabled>
            </UiInput>
          </div>
        </div>
        <div class="grid gap-4 md:grid-cols-2">

          <!-- Password -->
          <div class="space-y-2">
            <div class="flex space-x-2">
              <label for="password" class="text-sm font-medium select-none">Contraseña</label>
            </div>

            <div class="relative flex items-center">
              <label
                class="w-full input input-primary flex-1 flex items-center gap-0 border border-neutral bg-muted px-4 py-2 shadow-sm">
                <UiInput id="password" :type="showPassword ? 'text' : 'password'"
                  placeholder="mínimo 8 caracteres con números y símbolos"
                  class="pl-10 password-input text-sm shadow-none" v-model="formData.password">
                </UiInput>
              </label>
              <div class="cursor-pointer flex items-center pl-2" @click="showPassword = !showPassword">
                <Icon :name="showPassword ? 'lucide-eye-off' : 'lucide-eye'" size="24" />
              </div>
            </div>
          </div>

          <!-- Confirm Password -->
          <div class="space-y-2">
            <div class="flex space-x-2">
              <label for="confirmPassword" class="text-sm font-medium select-none">Confirmar Contraseña</label>
            </div>

            <div class="relative">
              <UiInput id="confirmPassword" type="password" v-model="formData.confirmPassword">
              </UiInput>
            </div>
          </div>

          <p v-if="!passwordMatch" class="text-xs text-error">Las contraseñas no coinciden</p>
          <p v-else class="text-xs text-neutral-500">Deja este campo en blanco si no deseas cambiar tu contraseña</p>
        </div>
        <div @click="handleSave('personalInfo')"
          class="btn w-full md:w-42 bg-linear-to-r from-primary to-accent hover:opacity-90">
          Guardar Cambios
        </div>
      </div>


    </PanelCard>

    <!-- Preferences -->
  </div>
</template>

<script lang="ts" setup>
import PanelCard from '../../components/panel/PanelCard.vue';
import { ref } from 'vue'

let passwordMatch = ref(true)
let showPassword = ref(false)
const formData = ref({
  name: 'María García',
  email: 'maria@example.com',
  password: '',
  confirmPassword: '',
  // theme: 'light',
  // language: 'es',
  // notifications: true,
})

const handleSave = (section: string) => {
  switch (section) {

    case 'personalInfo':
      if (formData.value.password !== formData.value.confirmPassword) {
        passwordMatch.value = false
        return
      } else {
        passwordMatch.value = true
      }

      console.log('Guardando datos personales:', formData.value)

      formData.value.password = ''
      formData.value.confirmPassword = ''
      break

    case 'preferences':
      console.log('Guardando preferencias:', formData.value)
      break

    default:
      console.log('Guardando datos:', formData.value)
  }
}


definePageMeta({
  layout: 'user-panel'
})
</script>

<style scoped>
.password-input {
  border: none;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  height: auto;
  box-shadow: none;
}

.password-input:focus {
  box-shadow: none;
  outline: none;
}
</style>