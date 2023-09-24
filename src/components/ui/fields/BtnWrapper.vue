<template>
    <div class="flex justify-between items-center">
        <slot name="firstBtn">
            <hh3 v-if="firstBtnTitle">
                {{ firstBtnTitle }}
            </hh3>
        </slot>
        <slot name="secondBtn">
            <h3 v-if="secondBtnTitle">
                {{ secondBtnTitle }}
            </h3>    
        </slot>
        <slot name="thirdBtn">
            <h3 v-if="thirdBtnTitle" >
                {{ thirdBtnTitle }}
            </h3>    
        </slot>
    </div>
</template>

<script setup>
 
    const props = defineProps ({
            firstBtnTitle: String,
            secondBtnTitle: String,
            thirdBtnTitle: String,
            backgroundColor: String,
        })
</script>