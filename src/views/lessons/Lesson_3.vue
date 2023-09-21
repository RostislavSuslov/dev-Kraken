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
        <form>
            <DefaultInput id="input-custom"  label="input-custom" v-model.trim.lazy="firstInput" v-model:custom-input="secondInput"/>
                <h2>{{ firstInput }}</h2>
                <h2>{{ secondInput }}</h2>


                
        </form>
    </div>
    
</template>
<script setup>
   import {ref, onMounted } from 'vue';
   import HWtitle from '../../components/HWtitle.vue';
   import DefaultInput from './input/DefaultInput.vue';
 
    
   const firstInput = ref('Hello');
   const secondInput = ref('Hello');
    const inputCustom = ref("#input-custom");
    console.log(inputCustom);

   const onInput = (inputValue) => {
    firstInput.value = inputValue
   }

   const setupRadioButtons = () => {
        const radioButtons = document.querySelectorAll('.radio-input');

        const themes = {
            first: () => {
            document.body.classList.remove('theme-second');
            },
            custom: () => {
            document.body.classList.add('theme-second');
            },
            //add more thems
        };

        const handleRadioButtonChange = (radioButton) => {
            const themeFunction = themes[radioButton.id];
            if (themeFunction) {
                themeFunction();
            }
        }

        radioButtons.forEach(radioButton => {
            radioButton.addEventListener('change', () => {
                handleRadioButtonChange(radioButton);
            });
        });
    }

    onMounted(() => {
        setupRadioButtons();
    });

    
 
</script>