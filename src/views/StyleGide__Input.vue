<template>
    <SlotInput>
       <template v-slot:default>
        <input type="text">
       </template>

       <template v-slot:checkbox>
        <input type="checkbox">
       </template> 

       <template v-slot:radio>
        <input type="radio">
       </template>

       <template v-slot:textarea>
        <textarea></textarea>
       </template>
    </SlotInput>
</template>


<style>

</style>


<script setup>
    import SlotInput from "../components/SlotInput.vue"
</script>