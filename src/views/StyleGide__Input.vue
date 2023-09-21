<template>
    <SlotInput>
       <template v-slot:default>
        <input type="text">
       </template>

       <template v-slot:typeCheckbox>
        <input type="checkbox">
       </template> 

       <template v-slot:typeRadio>
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