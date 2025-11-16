import { defineStore } from 'pinia'

export const useUserPanelStore = defineStore('userPanel', {
  state: (): {
    userName: string,
    activeTab: string,
  } => ({ 
    userName: '',
    activeTab: 'invitations',
  }),
  actions: {}
})
