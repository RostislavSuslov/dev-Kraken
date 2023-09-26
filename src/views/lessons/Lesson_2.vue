<template>
    <div class="flex flex-col">
      <HWtitle :title="title" :tasks="tasks" />

      <ul class="color-list flex m-3 mx-15 flex-wrap items-start">
          <ColorCardEasy title="grayQuaternary" classColor="bg-grayQuaternary" description="#527483" />
          <ColorCardEasy title="darkBackground" classColor="bg-darkBackground" description="#232265" />
          <ColorCardEasy title="accentRedSecondary" classColor="bg-accentRedSecondary" description="#710033" />
      </ul>   
    </div>
</template>


<style>

</style>


<script setup>
    import HWtitle from '../../components/HWtitle.vue';
    import ColorCardEasy from '../../components/ColorCardEasy.vue';
    import {ref  } from 'vue';




    const title = "Lesson 2"
    const tasks = ref([
      { description: "1) Зробити ColorCard" },
    ])

</script>
 