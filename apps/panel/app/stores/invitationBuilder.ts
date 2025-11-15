import { defineStore } from 'pinia'
import { STEPS_BUILDER } from '~/pages/invitation-builder/constants'

const totalSteps = STEPS_BUILDER.length

export interface InvitationData {
  
  // Step 1: Event Info
  eventName: string
  eventDate: string
  eventTime: string
  eventLocation: string
  welcomeMessage: string

  // Step 2: Design
  template: string
  primaryColor: string
  secondaryColor: string
  fontFamily: string
  backgroundImage: string

  // Step 3: Optional Sections
  giftRegistry: boolean
  giftRegistryLink: string
  itinerary: boolean
  itineraryItems: string[]
  gallery: boolean
  galleryImages: string[]
  music: boolean
  musicUrl: string
  rsvp: boolean

  // Step 4: Publishing
  rawSlug: string
  slug: string
  isDraft: boolean
}

export const useInvitationBuilderStore = defineStore('invitationBuilder', {
  state: (): {
    currentStep: number
    totalSteps: number
    invitationData: InvitationData
  } => ({
    currentStep: 1,
    totalSteps: totalSteps,

    invitationData: {

      // Step 1: Event Info
      eventName: '',
      eventDate: '',
      eventTime: '',
      eventLocation: '',
      welcomeMessage: '',
      
      // Step 2: Design
      template: 'elegant',
      primaryColor: '#D4AF37',
      secondaryColor: '#FFB6C1',
      fontFamily: 'Poppins',
      backgroundImage: '',

      // Step 3: Optional Sections
      giftRegistry: false,
      giftRegistryLink: '',
      itinerary: false,
      itineraryItems: [],
      gallery: false,
      galleryImages: [],
      music: false,
      musicUrl: '',
      rsvp: true,

      // Step 4: Publishing
      rawSlug: '',
      slug: '',
      isDraft: false,
    }
  }),

  getters: {
    progress: (state) => (state.currentStep / state.totalSteps) * 100,
    isFirstStep: (state) => state.currentStep === 1,
    isLastStep: (state) => state.currentStep === state.totalSteps,
  },

  actions: {
    // Navigation
    nextStep() {
      if (this.currentStep < this.totalSteps) this.currentStep++
    },
    prevStep() {
      if (this.currentStep > 1) this.currentStep--
    },
    goToStep(step: number) {
      if (step >= 1 && step <= this.totalSteps) this.currentStep = step
    },

    // Data
    updateData(data: Partial<InvitationData>) {
      Object.assign(this.invitationData, data)
    },

    resetBuilder() {
      this.$reset()
    },
  }
})
