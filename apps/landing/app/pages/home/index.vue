<script setup lang="ts">
import CTASection from '~/pages/home/components//sections/CTASection.vue'
import FeaturesSection from '~/pages/home/components/sections/FeaturesSection.vue'
import HeroSection from '~/pages/home/components/sections/HeroSection.vue'
import HowItWorksSection from '~/pages/home/components/sections/HowItWorksSection.vue'
import PricingSection from '~/pages/home/components/sections/PricingSection.vue'
import TestimonialsSection from '~/pages/home/components/sections/TestimonialsSection.vue'
import MockupSection from '~/pages/home/components/sections/MockupSection.vue'

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