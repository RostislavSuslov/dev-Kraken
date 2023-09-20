<template>

    <div class="input-box flex flex-col my-10">
        <label for="input-default" class="flex mb-4">input-default:</label>
        <input :value="modelValue" @input="onInput" />
    </div>
</template>


<script setup>
    defineProps({
          modelValue: String
    })

   const emit = defineEmits(['input']);

   const onInput = (event) => {
    emit('input', event.target.value)
   }
</script>


<style>

</style>