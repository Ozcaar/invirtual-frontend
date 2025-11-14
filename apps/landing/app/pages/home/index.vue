<script setup lang="ts">
import CTASection from '~/components/sections/CTASection.vue'
import FeaturesSection from '~/components/sections/FeaturesSection.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import HowItWorksSection from '~/components/sections/HowItWorksSection.vue'
import PricingSection from '~/components/sections/PricingSection.vue'
import TestimonialsSection from '~/components/sections/TestimonialsSection.vue'
import MockupSection from '~/components/sections/MockupSection.vue'

definePageMeta({
  layout: 'landing',
})
</script>

<template>
  <div>
    <HeroSection />
    <MockupSection />
    <FeaturesSection />
    <HowItWorksSection />
    <PricingSection />
    <TestimonialsSection />
    <CTASection />
  </div>
</template>