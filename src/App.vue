<template>
    <div id="root">
        <Sidebar />
        <Main />
        <div class="flex flex-col justify-center">
            <!-- <form class="">
                <DefaultInput :model-value="firstInput"/>
                <br>
                    <h2>{{ firstInput }}</h2>
                <br>
                <div class="input-box flex flex-col my-16">
                    <label for="input-custom" class="flex mb-4">input-custom:</label>
                    <input type="text" id="input-custom" name="input-custom">
                </div>
            </form> -->
        </div>
    </div>
</template>  

<style lang="scss">
    @import './assets/css/style.scss';
</style>

<script setup>
    // import {ref} from 'vue';
    import Sidebar from './components/Sidebar.vue';
    import Main from './components/Main.vue';
    // import DefaultInput from './components/DefaultInput.vue';

    // const firstInput = ref('Hello');
</script>