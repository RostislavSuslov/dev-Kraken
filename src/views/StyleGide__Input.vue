<template>
    <SlotInput>
        <template v-slot="slotsProps">
            <p>{{slotsProps.item}}</p>
        </template>
    </SlotInput>
</template>


<style>

</style>


<script setup>
    import SlotInput from "../components/form/SlotInput.vue";
</script>