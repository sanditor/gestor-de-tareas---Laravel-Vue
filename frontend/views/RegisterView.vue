<template>
  <div>
    <h2>Registro</h2>
    <form @submit.prevent="register">
      <input v-model="name" type="text" placeholder="Nombre completo" required />
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import api from '../api';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();
const userStore = useUserStore();

const register = async () => {
  try {
    await api.get('/sanctum/csrf-cookie');
    await api.post('/register', {
      name: name.value,
      email: email.value,
      password: password.value
    });
    await userStore.fetchUser();
    router.push('/');
  } catch (error) {
    alert('Error al registrarse');
  }
};
</script>
