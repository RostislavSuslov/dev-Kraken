<script setup>

    import Sidebar from './components/Sidebar.vue';
    import Main from './components/Main.vue';
    import ColorCardEasy from './components/ColorCardEasy.vue';
</script>
<template>
    <div id="root">
        <Sidebar />
        <Main />

        <ColorCardEasy title="Это тайтл" classColor="Это колоор" description="Это дескрипшин" />
        <ColorCardEasy title="Это тайтл 2" classColor="bg-prymaryColor" description="Это дескрипшин 2" />
        <ColorCardEasy title="Это тайтл 3" classColor="bg-secondaryColor" description="Это дескрипшин 3" />
    </div>
</template>  


<style lang="scss">
    @import './assets/css/style.scss'
</style>
