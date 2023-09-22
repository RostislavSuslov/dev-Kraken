<template>
    <SlotInput>
        <template v-slot="slotsProps">
            <input :type="slotsProps.item.type" />
            <div class="alert">
                {{ slotsProps.item.alert }}
            </div>
        </template>
    </SlotInput>
</template>


<style>

</style>


<script setup>
    import SlotInput from "../components/form/SlotInput.vue";
</script>