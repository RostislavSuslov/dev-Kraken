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
 
            <DefaultInput id="input-custom"  v-model="firstInput" v-model:custom-input="secondInput"/>
          
                <h2>{{ firstInput }}</h2>
                <h2>{{ secondInput }}</h2>

            <DefaultInput id="input-default" v-model="firstInput" v-model:custom-input="secondInput"/>
        </form>
    </div>
    
</template>
<script setup>
    import {ref} from 'vue';
    import HWtitle from '../../components/HWtitle.vue';
    import DefaultInput from './input/DefaultInput.vue';
 
    
   const firstInput = ref('Hello');
   const secondInput = ref('Hello');

   const onInput = (inputValue) => {
    firstInput.value = inputValue
   }
</script>