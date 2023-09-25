<template>
    <div class="border ....">
        <slot name="title">
            <h3 v-if="title">
                {{title}}
            </h3>
        </slot>
        <slot name="label">
            <label v-if="label">
                {{ label }}
            </label>
        </slot>
        <slot /> <!-- input || select || radio || more tags-->
        <slot v-if="currentHelperText || $slots.helperText" name="helperText" :helper-text="currentHelperText">
            <span :class="{'text-red-700': isError}">
                {{ currentHelperText }}
            </span>
        </slot>
    </div>
</template>


<script setup>
import { computed } from 'vue';

const props = defineProps({
    title: String,
    label: String,
    error: String,
    helperText: String,
})

const currentHelperText = computed(()=> props.error ? props.error : props.helperText);
const isError = computed(()=> !!props.error)
</script>