<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../api';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const email = ref('');
const password = ref('');
const router = useRouter();
const userStore = useUserStore();

const login = async () => {
  try {
    await api.get('/sanctum/csrf-cookie');
    await api.post('/login', {
      email: email.value,
      password: password.value
    });
    await userStore.fetchUser();
    router.push('/');
  } catch (error) {
    alert('Error al iniciar sesión');
  }
};
</script>
