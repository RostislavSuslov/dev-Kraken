<template>
    <div id="root">
        <Sidebar />
        <Main />
    </div>
</template>  


<style lang="scss">
    @import './assets/css/style.scss';
</style>


<script setup>
    import Sidebar from './components/Sidebar.vue';
    import Main from './components/Main.vue';
</script>