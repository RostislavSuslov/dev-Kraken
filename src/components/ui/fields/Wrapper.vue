<template>
    <div class="border ....">
        <slot name="label">
            <label v-if="label">
                {{ label }}
            </label>
        </slot>
        <slot v-if="currentHelperText || $slots.helperText" name="halperText" :helper-text="currentHelperText">
            <span :class="{'text-red-700': isError}">
                {{ currentHelperText }}
            </span>
        </slot>
    </div>
</template>


<script setup>
import { computed } from 'vue';

 const props = defineProps({
    label: String,
    error: String,
    helperText: String,
})

const currentHelperText = computed(()=> props.error ? props.error : props.helperText);
const isError = computed(()=> !!props.error)
</script>