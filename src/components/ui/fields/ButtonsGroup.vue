<template>
    <ui-fields-buttons :firstBtnTitle="firstBtnTitle" :secondBtnTitle="secondBtnTitle" :thirdBtnTitle="thirdBtnTitle"
        :backgroundColor="backgroundColor">
        <template>
            <h3 :firstBtnTitle="firstBtnTitle"
                class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                {{ firstBtnTitle }}
            </h3>
        </template>
        <template>
            <h3 :secondBtnTitle="secondBtnTitle"
                class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                {{ secondBtnTitle }}
            </h3>
        </template>
        <template>
            <h3 :thirdBtnTitle="thirdBtnTitle"
                class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                {{ thirdBtnTitle }}
            </h3>
        </template>
    </ui-fields-buttons>
</template>
<script setup>
    import UiFieldsButtons from './BtnWrapper.vue'

    const props = defineProps({
        type: {
            type: String,
            default: 'text'
        },

        firstBtnTitle: String,
        secondBtnTitle: String,
        thirdBtnTitle: String,
        backgroundColor: String,
    })
</script>