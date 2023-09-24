<template>
    <ui-fields-wrapper>
        <select>
            <option value="111111111">11111111111</option>
            <option value="222222222">22222222222</option>
            <option value="333333333">33333333333</option>
            <option value="444444444">44444444444</option>
        </select>
        <template #helperText="data">
            <slot name="helperText" v-bind="data"></slot>
        </template>
    </ui-fields-wrapper>
</template>


<script setup>
import UiFieldsWrapper from './Wrapper.vue'

defineProps({
    options: Array
 })
</script>