<template>
    <ui-fields-wrapper>
        <input :type="type"/>
        <template #helperText="data">
            <slot name="helperText" v-bind="data"></slot>
        </template>
    </ui-fields-wrapper>
</template>


<script setup>
import UiFieldsWrapper from './Wrapper.vue'

defineProps({
    type:{
        type:String,
        default: 'text'
    }
 })
</script>