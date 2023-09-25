<template>
    <div class="flex flex-col">
        <HWtitle 
        title="Lesson 5" 
        description="https://www.figma.com/file/2p9f3wJQOXLjU9aXNPff2t/FME?node-id=30%3A3052&mode=dev

1) Створити компонент кнопки
2) Додати модифікатори кольрів через пропс
3) додати модифікатори стилей через пропс (outlined, contained, text щось ще придумаєте буде +)
4) додати модифікатори розмірів
5) додати модифікатор disabled
для тих хто вчиться на вихідних і все швидко зробив перші 5 пунктів
1) кнопка може приймати пропс href|to і залежно від цього рендериться тег (https://vuejs.org/guide/essentials/component-basics.html#dynamic-components) по дефолту рендериться звичайний button
2) додати модифікатори squre і fab (для круглих і квадратних кнопок)
3) додати slot для іконок в батьківському компоненті виводити кнопку з текстом і іконкою і тільки з іконкою

Для всіх
Всі кнопки повині виводитись на одній сторінці міняти стилі згідно макетів  при додаванні атрибутів hover/focus/disabled

Зверніть увагу як реалзовані кнопки в ui-frameworks
https://vuetifyjs.com/en/components/buttons/
https://primevue.org/button/
https://quasar.dev/vue-components/button/

в кінцевому результаті повинно вийти щось схоже" />
    </div>

  <div  class="flex flex-wrap p-3">
      <div class="flex flex-col p-5 border-2 border-dashed border-fuchsia-500 mr-24 mb-16 last:mr-0">
        <BaseButton label="Primary"  />
        <br>
        <BaseButton label="Seconary" btn-type="seconary"/>
        <br>
        <BaseButton label="SeconaryAccent" class="seconary"/>

<!--        <button class="inline-block px-12 py-6 border-[3px] border-solid border-primaryColor leading-6 text-primaryColor font-extrabold uppercase hover:border-primaryColor hover:bg-primaryColor  hover:text-lightBackground active:border-primaryAccentColor active:bg-primaryAccentColor">call to action</button>-->
<!--        <br>-->
<!--        <button class="inline-block px-12 py-6 border-[3px] border-solid border-primaryColor leading-6 text-primaryColor font-extrabold uppercase hover:border-primaryColor hover:bg-primaryColor  hover:text-lightBackground active:border-primaryAccentColor active:bg-primaryAccentColor">call to action</button>-->
       </div>
    <div class="flex flex-col p-5 border-2 border-dashed border-fuchsia-500 mr-24 mb-16 last:mr-0">
       <button class="inline-block px-12 py-6 border-[3px] border-solid border-secondaryColor leading-6 text-secondaryColor font-extrabold uppercase hover:border-secondaryColor hover:bg-secondaryColor  hover:text-lightBackground active:border-secondaryAccentColor active:bg-secondaryAccentColor">button</button>
        <br>
       <button class="inline-block px-12 py-6 border-[3px] border-solid border-secondaryColor leading-6 text-secondaryColor font-extrabold uppercase hover:border-secondaryColor hover:bg-secondaryColor  hover:text-lightBackground active:border-secondaryAccentColor active:bg-secondaryAccentColor">button</button>
    </div>
    <div class="flex flex-col p-5 border-2 border-dashed border-fuchsia-500 mr-24 mb-16 last:mr-0">
      <button class="inline-block px-12 py-6 border-[3px] border-solid border-secondaryColor bg-secondaryColor leading-6 text-lightBackground font-extrabold uppercase hover:border-primaryColor hover:bg-primaryColor  hover:text-lightBackground active:border-primaryAccentColor active:bg-primaryAccentColor">button</button>
      <br>
      <button class="inline-block px-12 py-6 border-[3px] border-solid border-secondaryColor bg-secondaryColor leading-6 text-lightBackground font-extrabold uppercase hover:border-primaryColor hover:bg-primaryColor  hover:text-lightBackground active:border-primaryAccentColor active:bg-primaryAccentColor">button</button>
    </div>
  </div>
</template>



<script setup>
    import HWtitle from '../../components/HWtitle.vue';
    import BaseButton from '../../components/ui/fields/BaseButton.vue'
</script>

<style scoped lang="scss">

</style>