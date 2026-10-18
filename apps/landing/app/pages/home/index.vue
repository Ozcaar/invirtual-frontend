<script setup lang="ts">
import CTASection from '~/components/home/sections/CTASection.vue'
import FeaturesSection from '~/components/home/sections/FeaturesSection.vue'
import HeroSection from '~/components/home/sections/HeroSection.vue'
import HowItWorksSection from '~/components/home/sections/HowItWorksSection.vue'
import PricingSection from '~/components/home/sections/PricingSection.vue'
import TestimonialsSection from '~/components/home/sections/TestimonialsSection.vue'
import MockupSection from '~/components/home/sections/MockupSection.vue'

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
