<template>
  <div class="flex flex-col">
    <HWtitle :title="title" :tasks="tasks"/>
  </div>
</template>
<script setup>
import HWtitle from '../../components/HWtitle.vue';
import { ref } from 'vue';

const title = "Lesson 4"
const tasks = ref([
  { description: "Задача 1" },
  { description: "Задача 2" },
  { description: "Задача 3" },
])
</script>