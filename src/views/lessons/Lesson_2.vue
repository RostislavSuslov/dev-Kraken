<template>
    <div class="flex flex-col">
      <HWtitle 
      title="Lesson 2" 
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Beatae est magnam ipsam impedit repellendus quis, facilis
                   numquam vel saepe amet?" />

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
</script>
 