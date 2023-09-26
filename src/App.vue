<template>
    <div id="root" class="max-w-screen-xl mx-auto grid grid-cols-[345px] 1fr grid-rows-1 grid-cols-1 gap-x-[30px] min-h-screen relative">
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