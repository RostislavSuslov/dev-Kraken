<script setup>
    import Sidebar from './components/Sidebar.vue';
    import Main from './components/Main.vue';
    import ColorCardEasy from './components/ColorCardEasy.vue';
</script>
<template>
    <div id="root">
        <Sidebar />
        <Main />
        <ColorCardEasy title="grayQuaternary" classColor="bg-grayQuaternary" description="#527483" />
        <ColorCardEasy title="darkBackground" classColor="bg-darkBackground" description="#232265" />
        <ColorCardEasy title="accentRedSecondary" classColor="bg-accentRedSecondary" description="#710033" />
    </div>
</template>  
<style lang="scss">
    @import './assets/css/style.scss'
</style>
