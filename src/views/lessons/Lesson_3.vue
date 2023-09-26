<template>
    <div class="flex flex-col">
        <HWtitle :title="title" :tasks="tasks" />
        <form>
            <template>
                <span>Error</span>
            </template>
            <DefaultInput id="input-custom"  label="input-custom" v-model.trim.lazy="firstInput" v-model:custom-input="secondInput"/>
            <h2>{{ firstInput }}</h2>



            <DefaultInput id="input-default"  label="input-default" v-model.trim.lazy="firstInput" v-model:custom-input="secondInput"/>
            <h2>{{ secondInput }}</h2>
           
        </form>
    </div>
    
</template>
<script setup>
    import {ref, onMounted, watch } from 'vue';
    import HWtitle from '../../components/HWtitle.vue';
    import DefaultInput from './input/DefaultInput.vue';


    const title = "Lesson 3"
    const tasks = ref([
      { description: "1) Зробити кастомний інпут з привʼязкою v-model" },
      { description: "2) в компоненті де додаєте катстомний (в мене це був App) інпут вивести значення з цього інпуту і додати під ним дефолтний інпут" },
      { description: "3) при зміні чогось в кастомному інпуті воно повинно синхронізуватись з дефолтним інпутом і навпаки" },
      { description: "4) в кастомному інпуті додати логіку яка буде викликати тригер зміни теми  при вводі ключевого слова." },

    ])
    
    const firstInput = ref('Hello');
    const inputCustom = ref("#input-custom");
    const radioButtons = document.querySelectorAll('.radio-input');

    const setupRadioButtons = () => {
        // const themes = {
        //   remove_theme_second: () => {
        //     document.body.classList.remove('theme-second');
        //   },
        //   add_theme_second: () => {
        //     document.body.classList.add('theme-second');
        //   },
        //   //add more thems
        // };

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

    const checkForSecondKeyword = () => {
    if (firstInput.value.toLowerCase().includes('second')) {
        activateThemeSecond();
        radioButtons[1].checked = true;
    } else {
        deactivateThemeSecond();
        radioButtons[0].checked = true;
      }
    };

    const activateThemeSecond = () => {
      document.body.classList.add('theme-second');
    };
    const deactivateThemeSecond = () => {
    document.body.classList.remove('theme-second');
    };

    // Watch for changes in firstInput and secondInput
    watch([firstInput], checkForSecondKeyword);

    onMounted(() => {
        setupRadioButtons();
    });
</script>