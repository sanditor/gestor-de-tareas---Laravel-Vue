import { defineStore } from 'pinia';
import api from '../api';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    async fetchUser() {
      try {
        const res = await api.get('/user');
        this.user = res.data;
      } catch {
        this.user = null;
      }
    },
    async logout() {
      await api.post('/logout');
      this.user = null;
    }
  }
});
