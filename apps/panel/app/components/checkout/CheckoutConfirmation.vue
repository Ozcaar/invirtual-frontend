<template>
  <div>
    <div class="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      <!-- Subtle background elements -->
      <div class="absolute inset-0">
        <div
          class="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-bl from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/4">
        </div>
        <div
          class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-linear-to-tr from-accent/20 to-transparent rounded-full translate-y-1/3 -translate-x-1/4">
        </div>
      </div>

      <!-- Header -->
      <header class="border-b border-neutral bg-white backdrop-blur-lg sticky top-0 z-50">

        <div class="container mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center w-full gap-1 md:gap-4">

              <!-- Back to plans -->
              <NuxtLink :to="routes.landing.home + '#pricing'"
                class="btn btn-md btn-ghost p-0 font-medium group text-sm sm:text-base w-[170px] sm:w-[200px] mx-0 sm:mx-0 transition-colors duration-300 ease-in-out hover:bg-(--color-neutral-60)">
                <Icon name="formkit:arrowleft" size="15"
                  class="ml-1 sm:ml-2 transition-transform duration-300 ease-out group-hover:-translate-x-1.5" />
                Volver a planes
              </NuxtLink>
              <div class="h-6 w-px border border-neutral"></div>
              <h1 class="text-base sm:text-xl font-semibold w-[50%] mx-2 sm:mx-4">Checkout</h1>
            </div>
          </div>

          <!-- Progress Steps -->
          <div class="mt-4">
            <ProgressBar :STEPS="STEPS"></ProgressBar>
          </div>
        </div>
      </header>

      <div class="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <div class="grid lg:grid-cols-5 gap-8">
          <!-- Plan Summary - Left Side -->
          <div class="lg:col-span-3 space-y-6">
            <div>
              <h1 class="text-2xl md:text-3xl font-bold text-foreground mb-2">Confirma tu plan</h1>
              <p class="text-zinc-500">Revisa los detalles antes de continuar al pago seguro</p>
            </div>

            <!-- Plan Card -->
            <UiCard class="border-2 border-primary/20 shadow-lg overflow-hidden">
              <div v-if="plan.popular" class="bg-linear-to-r from-primary to-accent px-4 py-2 text-center">
                <span class="text-white text-sm font-medium flex items-center justify-center gap-2">
                   <Icon name="lucide:sparkles" size="16" class="text-white" />
                  Plan más popular
                </span>
              </div>

              <CardContent class="p-6">
                <div class="flex items-start justify-between mb-6">
                  <div>
                    <h2 class="text-2xl font-bold text-foreground">{plan.name}</h2>
                    <p class="text-muted-foreground">{plan.description}</p>
                  </div>
                  <div class="text-right">
                    <span class="text-3xl font-bold text-foreground">{plan.priceDisplay}</span>
                    <span class="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>

                <div class="border-t border-border pt-4">
                  <h3 class="font-semibold text-foreground mb-3">Incluye:</h3>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {plan.features.map((feature, index) => (
                    <li key={index} class="flex items-center gap-2 text-sm">
                      <Check class="w-4 h-4 text-primary shrink-0" />
                      <span class="text-foreground">{feature}</span>
                    </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </UiCard>

            <!-- Trust Badges -->
            <div class="grid grid-cols-3 gap-4">
              <div v-for="(badge, index) in TRUST_BADGES" :key="index"
                class="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-neutral">
                <Icon :name="`lucide:${badge.icon.toLowerCase()}`" size="24" class="text-primary" />
                <span class="text-xs text-center text-muted-foreground">{{ badge.label }}</span>
              </div>
            </div>

            <!-- FAQ Section -->
            <div class="space-y-3">
              <h3 class="font-semibold text-foreground">Preguntas frecuentes</h3>

              <div v-for="(faq, index) in FAQS" :key="index"
                class="border border-neutral rounded-xl overflow-hidden bg-white">

                <button @click="setOpenFaq(index)"
                  class="w-full flex items-center justify-between p-4 text-left hover:bg-(--color-neutral-60) transition-colors cursor-pointer">

                  <!-- Question -->
                  <span class="font-medium text-foreground text-sm">{{ faq.question }}</span>
                  <Icon v-if="openFaq === index" name="lucide:chevron-up" size="16"
                    class="text-muted-foreground shrink-0" />
                  <Icon v-else name="lucide:chevron-down" size="16" class="text-muted-foreground shrink-0" />
                </button>

                <!-- Response -->
                <div v-if="openFaq === index" class="px-4 pb-4">
                  <p class="text-sm text-muted-foreground">{{ faq.answer }}</p>
                </div>

              </div>
            </div>
          </div>

          <!-- Payment Summary - Right Side -->
          <div class="lg:col-span-2">
            <div class="sticky top-8">
              <Card class="shadow-xl border-0 bg-white">
                <!-- <CardContent class="p-6 space-y-6">
                  <div>
                    <h3 class="font-semibold text-foreground mb-4">Resumen de compra</h3>
                    <div class="space-y-3">
                      <div class="flex justify-between text-sm">
                        <span class="text-muted-foreground">Plan {plan.name}</span>
                        <span class="text-foreground">{plan.priceDisplay}</span>
                      </div>
                      <div class="border-t border-dashed border-border pt-3">
                        <div class="flex justify-between font-semibold">
                          <span class="text-foreground">Total</span>
                          <span class="text-foreground text-xl">{plan.priceDisplay} USD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  Checkout Button
                  <Button onClick={handleCheckout} disabled={isLoading}
                    class="w-full h-14 text-base font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                    size="lg">
                    {isLoading ? (
                    <div class="flex items-center gap-2">
                      <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Redirigiendo...</span>
                    </div>
                    ) : (
                    <div class="flex items-center gap-2">
                      <Lock class="w-5 h-5" />
                      <span>Continuar a pago seguro</span>
                    </div>
                    )}
                  </Button>

                  Stripe Badge
                  <div class="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock class="w-3 h-3" />
                    <span>Serás redirigido a Stripe para completar el pago</span>
                  </div>

                  Payment Methods
                  <div class="flex items-center justify-center gap-3 pt-2 border-t border-border">
                    <div class="flex items-center gap-2 text-muted-foreground">
                      <div class="w-10 h-6 bg-[#1A1F71] rounded flex items-center justify-center">
                        <span class="text-white text-[8px] font-bold">VISA</span>
                      </div>
                      <div
                        class="w-10 h-6 bg-[#EB001B] rounded flex items-center justify-center relative overflow-hidden">
                        <div class="absolute right-0 w-5 h-6 bg-[#F79E1B] rounded-l-full" />
                      </div>
                      <div
                        class="w-10 h-6 bg-linear-to-r from-[#006FCF] to-[#00A1E4] rounded flex items-center justify-center">
                        <span class="text-white text-[6px] font-bold">AMEX</span>
                      </div>
                    </div>
                  </div>
                </CardContent> -->
              </Card>

              <!-- Back to Plans Link -->
              <div class="text-center mt-4">
                <NuxtLink :to="routes.landing.home + '/#pricing'"
                  class="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ¿Cambiar de plan?
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const PLANS = {
  basico: {
    name: "Básico",
    price: 14.99,
    priceDisplay: "$14.99",
    period: "/evento",
    description: "Perfecto para eventos pequeños",
    features: [
      "Hasta 100 invitados",
      "5 plantillas premium",
      "RSVP con confirmación",
      "Sin marca de agua",
      "Soporte por email",
    ],
    popular: false,
  },
  premium: {
    name: "Premium",
    price: 29,
    priceDisplay: "$29",
    period: "/evento",
    description: "Ideal para eventos especiales",
    features: [
      "Invitados ilimitados",
      "Todas las plantillas premium",
      "RSVP avanzado con extras",
      "Sin marca de agua",
      "Personalización completa",
      "Estadísticas detalladas",
      "Soporte prioritario",
    ],
    popular: true,
  },
}

const FAQS = [
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), así como pagos con Apple Pay y Google Pay a través de Stripe.",
  },
  {
    question: "¿Puedo solicitar un reembolso?",
    answer: "Sí, ofrecemos reembolso completo dentro de los primeros 7 días si no has compartido tu invitación con tus invitados.",
  },
  {
    question: "¿Cuándo se activa mi plan?",
    answer: "Tu plan se activa inmediatamente después de completar el pago. Podrás crear tu invitación al instante.",
  },
]

const routes = getRoutes()
import { ref } from 'vue';

const setIsLoading = ref(false)
const isLoading = ref(false)
const openFaq = ref(-1)

const paramas = ref(new URLSearchParams(document.location.search))
const planId = ref(paramas.value.get("plan") || "basico")
const plan = PLANS[planId.value as keyof typeof PLANS]

const STEPS = [
  { number: 1, title: "Plan" },
  { number: 2, title: "Pago" },
  { number: 3, title: "Activación" }
];

const TRUST_BADGES = [
  { icon: "shield", label: "Pago 100% seguro" },
  { icon: "credit-card", label: "Múltiples métodos" },
  { icon: "clock", label: "Activación inmediata" },
];

function setOpenFaq(index: number) {
  openFaq.value = index == openFaq.value ? -1 : index;
}

</script>

<style></style>