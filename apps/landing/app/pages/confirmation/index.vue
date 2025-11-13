<template>
  <div class="min-h-screen bg-linear-to-br from-white via-secondary to-accent overflow-hidden pt-16">
    <Confeti />

    <!-- Notification Toast -->
    <Notification v-if="notification.show" :type="notification.type" :message="notification.message" />

    <div class="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
      <div class="py-10">

        <!-- Hero Section -->
        <div class="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">

          <!-- Success Icon Animation -->
          <div class="mb-8 flex justify-center">
            <div class="relative w-24 h-24 flex items-center justify-center animate-bounce">
              <div class="absolute inset-0 bg-primary rounded-full opacity-10 animate-pulse scale-150"></div>
              <div class="absolute inset-0 bg-primary rounded-full opacity-5 animate-pulse scale-[2]"></div>
              <Icon name="lucide:circle-check" size="96" class="text-primary" />
            </div>
          </div>
        </div>

        <!-- Main Message -->
        <h1 class="text-center text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
          ¡Tu invitación está lista!
        </h1>
        <p class="text-center text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Has creado una experiencia inolvidable. Tu invitación ya está publicada y lista para compartir con tus
          invitados.
        </p>
      </div>

      <!-- Invitation Preview Card -->
      <div class="w-full max-w-md mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
        <div class="bg-white rounded-3xl shadow-xl p-8 border border-neutral backdrop-blur-sm">

          <!-- Thumbnail Preview -->
          <div class="mb-6 rounded-2xl bg-linear-to-br from-secondary to-accent p-1 overflow-hidden">
            <div class="bg-white rounded-xl p-6 text-center">
              <div class="text-4xl mb-3">💌</div>
              <p class="font-bold text-foreground text-lg">Boda</p>
              <p class="text-sm text-muted-foreground">Celebración especial</p>
            </div>
          </div>

          <!-- URL and Buttons -->
          <div class="space-y-4">

            <!-- URL Display -->
            <div class="bg-(--color-muted-50) rounded-xl p-4 flex items-center justify-between gap-3">
              <code
                class="text-sm text-zinc-500 truncate font-mono">{{ `https://invirtualmx.com/user-uuid/${invitationBuilderStore.invitationData.slug}` }}</code>
              <button @click="handleCopyLink()"
                class="shrink-0 p-2 hover:bg-muted cursor-pointer rounded-lg transition-colors flex items-center justify-center"
                title="Copiar enlace">
                <!-- <Copy class={`w-5 h-5 transition-colors ${copied ? "text-primary" : "text-muted-foreground" }`} /> -->
                <Icon name="lucide:copy" size="20" class="text-zinc-500" />
              </button>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-3">
              <button @click="handleEditInvitation()"
                class="btn btn-neutral text-sm font-medium border border-neutral btn-lg bg-(--color-muted-30) hover:bg-(--color-neutral-60)">
                Ver invitación
                <Icon name="lucide:square-arrow-out-up-right" size="16" class="text-foreground" />
              </button>

              <button @click="handleCopyLink()"
                class="btn btn-primary text-sm font-medium btn-lg bg-primary hover:bg-(--color-primary-80)">
                <!-- {copied ? "¡Copiado!" : "Copiar enlace"} -->
                Copiar enlace
              </button>
            </div>

            <div class="grid grid-cols-1 gap-3">
              <button @click="handleEditInvitation()"
                class="btn btn-neutral text-sm font-medium border border-neutral btn-lg bg-(--color-muted-30) hover:bg-(--color-neutral-60)">
                <Icon name="lucide:square-pen" size="16" class="text-foreground" />
                Seguir editando
              </button>
            </div>
          </div>
        </div>
        <!-- Action Buttons -->
        <div class="w-full py-10 flex flex-col gap-4">

          <!-- Share on WhatsApp button -->
          <button @click="handleShareWhatsApp()"
            class="btn btn-primary text-base font-medium btn-lg bg-primary w-full hover:bg-(--color-primary-80)">
            <Icon name="lucide:share-2" size="20" class="text-foreground" />
            Compartir por WhatsApp
          </button>

          <!-- Go to panel button -->
          <button @click="handleShareWhatsApp()"
            class="btn btn-ghost text-base font-medium shadow-none btn-lg w-full hover:bg-(--color-accent-60) group">
            <Icon name="lucide:house" size="20" class="text-foreground mr-4" />
            Ir al panel
            <Icon name="formkit:arrowright" size="15"
              class="ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </div>



  </div>
</template>

<script lang="ts" setup>
import Notification from '~/components/ui/Notification.vue';
import Confeti from './components/Confeti.vue';
import { useInvitationBuilderStore } from '~/stores/invitationBuilder';

const invitationBuilderStore = useInvitationBuilderStore()

const notification = ref({
  show: false,
  type: 'primary',
  message: '',
})

function showNotification(message: string, type = 'primary', timeout = 4000) {
  notification.value = { show: true, type, message }
  setTimeout(() => (notification.value.show = false), timeout)
}

function handleEditInvitation() {
  // Redirect to invitation builder with existing data
  window.location.href = '/invitation-builder';
}

function handleShareWhatsApp() {
  const invitationUrl = `https://invirtualmx.com/user-uuid/${invitationBuilderStore.invitationData.slug}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `¡Hola! Te invito a mi evento. Aquí tienes el enlace a la invitación: ${invitationUrl}`
  )}`;
  window.open(whatsappUrl, '_blank');
}

function handleCopyLink() {
  const invitationUrl = 'https://invirtualmx.com/user-uuid/tu-evento';
  navigator.clipboard.writeText(invitationUrl).then(() => {
    showNotification('Enlace copiado al portapapeles', 'primary');
  });
}

showNotification('Invitación publicada correctamente', 'primary');

definePageMeta({
  layout: 'minimal'
})
</script>

<style></style>