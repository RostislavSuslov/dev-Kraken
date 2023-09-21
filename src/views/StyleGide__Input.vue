<template>
    <SlotInput>
        <template v-slot="slotsProps">
            <input :type=slotsProps.item>
        </template>
    </SlotInput>
</template>


<style>

</style>


<script setup>
    import SlotInput from "../components/form/SlotInput.vue";
</script>