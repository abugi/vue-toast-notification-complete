import { defineStore } from 'pinia'

export const useNotification = defineStore('toast', {
  state: () => {
    return {
        notification: {
            type: '',
            message: ''
        }
    }
  },
})
