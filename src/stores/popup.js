import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popup', {
  state: () => ({
    isLoginOpen: false,
    isRegisterOpen: false,
  }),
  actions: {
    openLogin() {
      this.isLoginOpen = true
      this.isRegisterOpen = false
    },
    openRegister() {
      this.isRegisterOpen = true
      this.isLoginOpen = false
    },
    closePopups() {
      this.isLoginOpen = false
      this.isRegisterOpen = false
    },
    toggleLogin() {
      this.isLoginOpen = !this.isLoginOpen
      if (this.isLoginOpen) {
        this.isRegisterOpen = false
      }
    },
    toggleRegister() {
      this.isRegisterOpen = !this.isRegisterOpen
      if (this.isRegisterOpen) {
        this.isLoginOpen = false
      }
    },
  },
})