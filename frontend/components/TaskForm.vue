<template>
  <form @submit.prevent="createTask">
    <input v-model="title" placeholder="Título de la tarea" required />
    <textarea v-model="description" placeholder="Descripción"></textarea>
    <button type="submit">Agregar Tarea</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import api from '../api';

const emit = defineEmits(['created']);
const title = ref('');
const description = ref('');

const createTask = async () => {
  await api.post('/tasks', {
    title: title.value,
    description: description.value
  });
  title.value = '';
  description.value = '';
  emit('created');
};
</script>
