<script setup>
    import StyleGide__Alert from '../views/StyleGide__Alert.vue'
    import StyleGide__Buttons from '../views/StyleGide__Buttons.vue'
    import StyleGide__Color from '../views/StyleGide__Color.vue'
    import StyleGide__Icon from '../views/StyleGide__Icon.vue'
    import StyleGide__Input from '../views/StyleGide__Input.vue'
    import StyleGide__PrintingType from '../views/StyleGide__PrintingType.vue'
    import Homework from '../views/Homework.vue'
    
</script>

<template>
    <nav class="style-navigation bg-secondaryColor text-lightBackground p-5 rounded-md">
        <router-link to="/homework" class="style-item text-paragraph px-5 hover:text-accentGold">Homework</router-link>
        <router-link to="/style-color" class="style-item text-paragraph px-5 hover:text-accentGold">color</router-link>
        <router-link to="/style-printing-type" class="style-item text-paragraph px-5 hover:text-accentGold">style-printing-type</router-link>
        <router-link to="/style-alert" class="style-item text-paragraph px-5 hover:text-accentGold">alert</router-link>
        <router-link to="/style-buttons" class="style-item text-paragraph px-5 hover:text-accentGold">buttons</router-link>
        <router-link to="/style-icon" class="style-item text-paragraph px-5 hover:text-accentGold">icon</router-link>
        <router-link to="/style-input" class="style-item text-paragraph px-5 hover:text-accentGold">input</router-link>
    </nav>
    <div class="style-components min-h-[calc(100vh-230px)] bg-white p-16 flex flex-wrap">
        <router-view></router-view>
    </div>
</template>