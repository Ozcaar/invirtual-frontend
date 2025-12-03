<template>
  <div class="space-y-6">
    <div>
      <h2 className="text-3xl font-bold text-foreground">Configuración de Cuenta</h2>
      <p className="mt-1 text-muted-foreground">Gestiona tu perfil y preferencias</p>
    </div>

    <PanelCard>
      <div class="pb-12">
        <p class="card-title text font-semibold text-(--foreground)">Información Personal</p>
        <p>Actualiza tus datos personales</p>
      </div>

      <!-- Full name -->
      <div class="space-y-2 flex flex-col">
        <div class="flex space-x-2">
          <label for="eventName" class="text-sm font-medium select-none">Nombre del evento *</label>
        </div>
        <UiInput id="eventName" type="text" placeholder="Ej: Boda de Ana y Carlos"
          v-model="useUserPanelStore.name"></UiInput>
      </div>

  </PanelCard>
  </div>
</template>

<script lang="ts" setup>
import PanelCard from '../../components/panel/PanelCard.vue';


definePageMeta({
  layout: 'user-panel'
})
</script>

<style></style>