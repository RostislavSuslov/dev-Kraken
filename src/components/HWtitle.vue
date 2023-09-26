<template>
  <div class="HWtitle">
    <h1 class="text-fsH2 font-semibold mb-[12px]">{{ title }}</h1>

    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="text-fsH6 text-500 text-grayTertiary">
        {{ task.description }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  title: String,
  tasks: Array,
})
</script>