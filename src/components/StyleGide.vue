<script>
    import StyleGide__Alert from '../views/StyleGide__Alert.vue'
    import StyleGide__Buttons from '../views/StyleGide__Buttons.vue'
    import StyleGide__Color from '../views/StyleGide__Color.vue'
    import StyleGide__Icon from '../views/StyleGide__Icon.vue'
    import StyleGide__Input from '../views/StyleGide__Input.vue'
    import StyleGide__PrintingType from '../views/StyleGide__PrintingType.vue'
</script>

<template>
    <nav class="style-navigation">
        <router-link to="/style-color" class="style-item">color</router-link>
        <router-link to="/style-printing-type" class="style-item">printing-type</router-link>
        <router-link to="/style-alert" class="style-item">alert</router-link>
        <router-link to="/style-buttons" class="style-item">buttons</router-link>
        <router-link to="/style-icon" class="style-item">icon</router-link>
        <router-link to="/style-input" class="style-item">input</router-link>
    </nav>
    <div class="style-components">
        <router-view></router-view>
    </div>
</template>