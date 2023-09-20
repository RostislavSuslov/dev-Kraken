<template>
    <div class="flex flex-col">
        <HWtitle 
        title="Lesson 3" 
        description="   1) Зробити кастомний інпут з привʼязкою v-model
                        2) в компоненті де додаєте катстомний (в мене це був App)
                           інпут вивести значення з цього інпуту
                           і додати під ним дефолтний інпут 
                        3) при зміні чогось в кастомному інпуті
                           воно повинно синхронізуватись з дефолтним інпутом і навпаки
                        4) в кастомному інпуті додати логіку яка буде викликати тригер
                           зміни теми  при вводі ключевого слова." />

        <form class="">
            <div class="input-box flex flex-col my-10">
                <label for="input-custom" class="flex mb-4">input-custom:</label>
                <input type="text" id="input-custom" name="input-custom">
            </div>
            <br>
                <h2>{{ firstInput }}</h2>
            <br>
            <DefaultInput :model-value="firstInput" @input="onInput"/>
         
        </form>
    </div>
    
</template>
<script setup>
    import {ref} from 'vue';
    import HWtitle from '../../components/HWtitle.vue';
    import DefaultInput from './input/DefaultInput.vue';
 
    
   const firstInput = ref('Hello');

   const onInput = (inputValue) => {
    firstInput.value = inputValue
   }
</script>