<template>
  <div class="flex flex-col">
      <HWtitle 
      title="Lesson 4" 
      description="
                   1) Створити компонент обгортку для інпутів (компонент примітивний виводить однакову логіку для всі інтерактивних полів, error, label, helper text)
                   2) Створити 4 компоненти text-input, textarea, controled (radio/checkbox), select
                   3) вивести свої компоненти на сторінку стаіл гайд 
                   4) Зробити унікальний вивід помилки якщо текстове поле має тип password (не використовувати при цьому props або будьякі умови)

                   Робити все в окремій гілці, по вашому вчорашньому коду я дам фідбек на протязі дня якщо будуть зауваження виправити.

                  1) це створення компонента обгортки для інпутів, логіка коли ви виносити все що дублюється в компонентах в окремий компонент.
                  2) всі компоненти завжди створюються в дирикторії components в ній можуть бути під дирикторії для структурування наприклад
                  components > ui > fields > BaseField
                  3) cторінка  стаіл гайд  це App у вас поки, а у когось окрема сторінка.
                  4) Подумайте як без умов можна виконати дану задачу проявіть ініціативу і логіку" />

  <!-- <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
             
        </button>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Кнопка 1
        </button>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
            Кнопка 2
        </button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
            Кнопка 3
        </button>
        <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2">
            Кнопка 4
        </button> -->
      <!-- <InputText></InputText>
      <Textarea></Textarea>
      <InputRadio></InputRadio>
      <Select></Select> -->
      <div class="flex justify-center mt-10">
          <base-input title="Title!)" name="login" error="helperText login" label="Login" /> 
          <base-input name="Number" helperText="helperText" label="Number" /> 
          <base-select name="select" label="select title" error="doshlo!!!!!" /> 
          
          <base-input-radio name="login" error="error radio" label="animals 1" group="animals"/> 
          <base-input-radio name="radio" error="error radio" label="animals 2" group="animals"/> 
          <base-input-radio name="radio" helperText="helperText" label="animals 3" group="animals"/> 
          <base-input-radio name="radio" helperText="helperText" label="animals 3" group="animals"/> 

          <base-input-radio name="login" error="error radio" label="cars 1" group="cars"/> 
          <base-input-radio name="radio" helperText="helperText" label="cars 2" group="cars"/> 
          <base-input-radio name="radio" helperText="helperText" label="cars 3" group="cars"/> 
          <base-input-radio name="radio" error="error radio" label="cars 3" group="cars"/> 

          <base-input-checkbox name="checkbox" helperText="helperText" label="plants 1" group="plants"/> 
          <base-input-checkbox name="checkbox" helperText="nice text lorem" label="plants 1" group="plants"/> 
          <base-input-checkbox name="checkbox" error="error radio" label="plants 1" group="plants"/> 
          <base-input-checkbox name="checkbox" error="error radio" label="plants 1" group="plants"/> 
          <base-textarea name="login" error="error login" label="textarea" /> 
      </div>
      

      <div class="flex justify-center mt-10">
        <ui-fields-buttons firstBtnTitle="Title1" secondBtnTitle="Title2" thirdBtnTitle="Title3" /> 

      
    </div>


    
  </div>
</template>
<script setup>
  import HWtitle from '../../components/HWtitle.vue';
 
 
 
  import BaseInput from '../../components/ui/fields/BaseInput.vue';
  import BaseInputRadio from '../../components/ui/fields/BaseInputRadio.vue';
  import BaseInputCheckbox from '../../components/ui/fields/BaseInputCheckbox.vue';
  import BaseTextarea from '../../components/ui/fields/BaseTextarea.vue';

  import BaseSelect from '../../components/ui/fields/BaseSelect.vue';
  import ButtonsGroup from '../../components/ui/fields/ButtonsGroup.vue';
</script>