<template>
  <div class="input-box relative flex flex-col my-10">
    <label for="input-default" class="flex mb-4">{{ label }}</label>
    <input
        :value="modelValue"
        @change="onChange"
        class="default-input bg-transparent border-2 border-solid border-blue-200 py-[6px] px-[12px] min-h-[38px] transition duration-300 ease-in-out focus:shadow-none focus:border-blue-600 focus:outline-none focus:border-b-2 focus:border-blue-500"

    />
  </div>
  <slot name="error">{{ error }}</slot>
</template>

<script setup>


const props = {
  modelValue: String,
  customInput: String,
  label: String,
};

const emit = defineEmits(['update:modelValue', 'update:customInput']);


const onChange = (event) => {
  emit('input');
  emit('update:modelValue', event.target.value, event);
  emit('update:customInput', event.target.value, event);
};

</script>

<style scoped lang="scss">

</style>
