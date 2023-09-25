<template>
    <li class="colorCard m-[15px] w-100 border border-gray-300 rounded-md p-4">
      <div class="color-show w-[100px] h-[70px] rounded-md mb-6" :class="colorValue.class"></div> 
      <div class="color-title font-semibold text-xs mb-3">{{ colorValue.class }}</div>
      <div class="color-hex text-gray-500 text-sm">{{ colorValue.hex }}</div>
    </li>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    colorValue: Object,
  });
  
  const getColorClass = ref('bg-' + props.colorValue.variable);
</script>
  