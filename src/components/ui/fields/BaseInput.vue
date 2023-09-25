<template>
    <ui-fields-wrapper :title="title" :error="error" :label="label" :helperText="helperText">
        <input :type="type" :value="modelValue"/>
        <template #helperText="data">
            <slot name="helperText" v-bind="data"></slot>
        </template>
    </ui-fields-wrapper>
</template>


<script setup>
import UiFieldsWrapper from './Wrapper.vue'

const props = defineProps({
    type: {
        type:String,
        default: 'text'
    },
    
    title: String,
    label: String,
    error: String,
    helperText: String,

    modelValue: null,
 })

defineEmits("update:modelValue");
const onInput = (event) => {
    emit('update:modelValue', event.target.value)
}

</script>