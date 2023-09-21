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


      <InputText></InputText>
      <Textarea></Textarea>
      <InputRadio></InputRadio>
      <Select></Select>
  </div>
</template>
<script setup>
  import HWtitle from '../../components/HWtitle.vue';
  import InputText from '../../components/form/InputText.vue';
  import Textarea from '../../components/form/Textarea.vue';
  import InputRadio from '../../components/form/InputRadio.vue';
  import Select from '../../components/form/Select.vue';
</script>