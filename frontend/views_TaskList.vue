<template>
  <div>
    <h2>Mis Tareas</h2>
    <TaskForm @created="fetchTasks" />
    <ul>
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" @updated="fetchTasks" />
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TaskForm from '../components/TaskForm.vue';
import TaskItem from '../components/TaskItem.vue';
import api from '../api';

const tasks = ref([]);
const fetchTasks = async () => {
  const res = await api.get('/tasks');
  tasks.value = res.data;
};

onMounted(fetchTasks);
</script>
