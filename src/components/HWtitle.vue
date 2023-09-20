<template>
    <div class="HWtitle">
        <h1 class="text-fsH2 font-semibold mb-[12px]">{{title }}</h1>
        <p class="text-fsH6 text-500 text-grayTertiary">{{description}}</p>
    </div>
</template>
  
<script setup>
    const props = defineProps({
          title: String,
          description: String,        
    });
</script>