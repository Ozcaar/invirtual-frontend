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
        <label for="customUrl">URL personalizada</label>
        <div class="flex gap-2">
          <div class="input input-primary flex-1 flex items-center gap-0 border bg-muted px-4 py-2">
            <span class="text-sm text-muted-foreground select-none">invirtual.com/</span>
            <UiInput id="customUrl" type="text" placeholder="tu-evento"
              v-model="invitationBuilderStore.invitationData.customUrl" class="url-input" />
<!-- 
            <Input id="customUrl" placeholder="tu-evento" value={data.customUrl} onChange={(e)=> updateData({ customUrl:
            e.target.value })}
            class="border-0 bg-transparent p-0 h-auto focus-visible:ring-0"
            /> -->
          </div>
          <Button variant="outline" onClick={generateUrl}>
            Generar
          </Button>
        </div>
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