<template>
    <div class="input-box flex flex-col my-10">
        <label for="input-default" class="flex mb-4">input-default:</label>
        <input :value="modelValue" @change="onChange" />
    </div>
</template>


<script setup>
    defineProps({
        modelValue: String,
        customInput: String,
    })

    const emit = defineEmits(['update:modelValue', 'update:customInput']);

    const onInput = (event) => {
          emit('input')
          emit('update:modelValue', event.target.value, event)
          emit('update:customInput', event.target.value, event)
    }

    const onChange = (event) => {
          emit('input')
          emit('update:modelValue', event.target.value, event)
          emit('update:customInput', event.target.value, event)
    }
</script>


<style>

</style>