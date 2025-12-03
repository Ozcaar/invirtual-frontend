<template>
  <UiCard class="border-2 shadow-xl" bg-color="bg-white">

    <div class="space-y-6">

      <!-- Card header -->
      <div class="space-y-2">

        <!-- Card title -->
        <div class="card-title">

          <!-- Link icon -->
          <div class="flex justify-center">
            <Icon name="lucide:link-2" size="20" style="color: var(--color-primary);" />
          </div>
          <div class="text-base w-full">URL de tu Invitación</div>
        </div>

        <!-- Card subtitle -->
        <div class="text-sm text-zinc-500">Personaliza el enlace de tu invitación</div>
      </div>

      <!-- Card content -->
      <div class="space-y-4">
        <label for="customUrl"><strong>URL personalizada</strong></label>
        <div class="flex gap-2">
          <div class="input input-primary flex-1 flex items-center gap-0 border border-neutral bg-muted px-4 py-2">
            <span class="text-sm text-muted-foreground select-none">{{ `invirtualmx.com/id-usuario/` }}</span>
            <UiInput id="customUrl" type="text" placeholder="tu-evento"
              v-model="invitationBuilderStore.invitationData.rawSlug" class="url-input text-sm" />
            <!-- 
            <Input id="customUrl" placeholder="tu-evento" value={data.customUrl} onChange={(e)=> updateData({ customUrl:
            e.target.value })}
            class="border-0 bg-transparent p-0 h-auto focus-visible:ring-0"
            /> -->
          </div>
          <!-- <Button variant="outline" @click="">
            Generar
          </Button> -->
        </div>

        <div class="rounded-lg bg-(--color-muted) p-4 space-y-2">
          <p class="text-sm font-medium">Vista previa del enlace:</p>
          <code
            class="text-sm text-primary">{{ `https://invirtualmx.com/id-usuario/${invitationBuilderStore.invitationData.slug || "tu-evento"}` }}</code>
        </div>
      </div>
    </div>
  </UiCard>

  <UiCard class="border-2 shadow-xl" bg-color="bg-white">

    <div class="space-y-6">

      <!-- Card header -->
      <div class="space-y-2">

        <!-- Card title -->
        <div class="card-title">

          <!-- Link icon -->
          <div class="text-base w-full">Resumen de tu Invitación</div>
        </div>

        <!-- Card subtitle -->
        <div class="text-sm text-zinc-500">Revisa todos los detalles antes de publicar</div>
      </div>

      <!-- Card content -->
      <div class="space-y-4">
        <div class="grid gap-3">
          <div class="flex justify-between py-2 border-b border-neutral">
            <span class="text-sm text-muted-foreground">Evento:</span>
            <span class="text-sm font-medium">{{ invitationBuilderStore.invitationData.eventName || "Sin nombre" }}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-neutral">
            <span class="text-sm text-muted-foreground">Fecha:</span>
            <span class="text-sm font-medium">{{ invitationBuilderStore.invitationData.eventDate || "Sin fecha" }}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-neutral">
            <span class="text-sm text-muted-foreground">Plantilla:</span>
            <span class="text-sm font-medium capitalize">{{ invitationBuilderStore.invitationData.template }}</span>
          </div>
          <div class="flex justify-between py-2 border-b border-neutral">
            <span class="text-sm text-muted-foreground">Secciones activas:</span>
            <span class="text-sm font-medium">
              {{ [
                invitationBuilderStore.invitationData.giftRegistry && "Mesa de regalos",
                invitationBuilderStore.invitationData.itinerary && "Itinerario",
                invitationBuilderStore.invitationData.gallery && "Galería",
                invitationBuilderStore.invitationData.music && "Música",
                invitationBuilderStore.invitationData.rsvp && "RSVP",
              ]
                .filter(Boolean)
                .join(", ") || "Ninguna" }}
            </span>
          </div>
        </div>

        <!-- <div class="flex gap-3 pt-4">
          <Button variant="outline" class="flex-1 bg-transparent">
            <Save class="h-4 w-4 mr-2" />
            Guardar Borrador
          </Button>
          <Button variant="outline" class="flex-1 bg-transparent">
            <Eye class="h-4 w-4 mr-2" />
            Vista Previa
          </Button>
        </div> -->
      </div>
    </div>
  </UiCard>
</template>

<script lang="ts" setup>

import { useInvitationBuilderStore } from '~/stores/invitationBuilder';

const invitationBuilderStore = useInvitationBuilderStore()

</script>

<style scoped>
.url-input {
  border: none;
  border-radius: 0;
  background-color: transparent;
  padding: 0;
  height: auto;
  box-shadow: none;
}

.url-input:focus {
  box-shadow: none;
  outline: none;
}
</style>