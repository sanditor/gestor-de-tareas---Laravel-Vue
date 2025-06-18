<template>
  <li>
    <input type="checkbox" v-model="task.completed" @change="toggleComplete" />
    <strong :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.title }}</strong>
    <p>{{ task.description }}</p>
    <button @click="remove">Eliminar</button>
  </li>
</template>

<script setup>
import api from '../api';
const props = defineProps(['task']);
const emit = defineEmits(['updated']);

const toggleComplete = async () => {
  await api.put(`/tasks/${props.task.id}`, {
    completed: props.task.completed,
  });
  emit('updated');
};

const remove = async () => {
  await api.delete(`/tasks/${props.task.id}`);
  emit('updated');
};
</script>
