import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'user',
  () => {
    const token = ref('121111')
    function setToken(value) {
      token.value = value
    }
    function removeToken() {
      token.value = ''
    }
    return { token, setToken, removeToken }
  },
  { persist: true }
)
