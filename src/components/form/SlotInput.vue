<template>
    <div>
         <ul>
            <li v-for="data in slotsData" v-bind:key="data">
                <slot v-bind:item="data"></slot>
            </li>
         </ul>
    </div>
</template>


<style>


</style>


<script>
    export default {
        data() {
            return {
                slotsData: ['a', 'b', 'c', 'd']
            };
        }
    };
</script>