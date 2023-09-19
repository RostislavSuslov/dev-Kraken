<script setup>
    import Sidebar from './components/Sidebar.vue';
    import Main from './components/Main.vue';
    import ColorCardEasy from './components/ColorCardEasy.vue';
</script>
<template>
    <div id="root">
        <Sidebar />
        <Main />
<<<<<<< HEAD
        <ColorCardEasy title="grayQuaternary" classColor="bg-grayQuaternary" description="#527483" />
        <ColorCardEasy title="darkBackground" classColor="bg-darkBackground" description="#232265" />
        <ColorCardEasy title="accentRedSecondary" classColor="bg-accentRedSecondary" description="#710033" />
=======

        <ColorCardEasy title="Это тайтл" classColor="Это колоор" description="Это дескрипшин" />
        <ColorCardEasy title="Это тайтл 2" classColor="bg-prymaryColor" description="Это дескрипшин 2" />
        <ColorCardEasy title="Это тайтл 3" classColor="bg-secondaryColor" description="Это дескрипшин 3" />
>>>>>>> c38025dfeb58f2861116d06289c008455c116a0d
    </div>
</template>  
<style lang="scss">
    @import './assets/css/style.scss'
</style>
