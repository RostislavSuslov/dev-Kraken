<template>
    <ui-fields-wrapper :error="error" :label="label" :helperText="helperText" :group="group">
        <input :type="type" :value="modelValue" :name="group"/>
        <template #helperText="data">
            <slot name="helperText" v-bind="data"></slot>
        </template>
    </ui-fields-wrapper>
</template>


<script setup>
import UiFieldsWrapper from './Wrapper.vue'

defineProps({
    type:{
        type: String,
        default: 'checkbox'
    },

    modelValue: null,
    group: String,
    label: String,
    error: String,
    helperText: String,
 })

defineEmits("update:modelValue");
const onInput = (event) => {
    emit('update:modelValue', event.target.value)
}

</script>