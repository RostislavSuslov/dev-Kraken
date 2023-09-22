<template>
    <div>
         <ul>
            <li v-for="data in slotsData" v-bind:key="data">
                <slot v-bind:item="data"></slot>
                <slot v-bind:item="data.alert"></slot>
            </li>
         </ul>
    </div>
</template>


<style>


</style>


<script setup>
    const slotsData = [
                        {   id: 1,
                            type : 'text',
                            alertType: 'custom',
                            alert: 'Enter any text',
                        },
                        {   id: 2,
                            type : 'number',
                            alertType: 'success',
                            alert: 'A simple success alert—check it out!',
                        },
                        {   id: 3,
                            type : 'color',
                            alertType: 'danger',
                            alert: 'A simple danger alert—check it out!',
                        },
                        {   id: 4,
                            type : 'file',
                            alertType: 'warning',
                            alert: 'A simple warning alert—check it out!',
                        },
                        {   id: 5,
                            type : 'radio',
                            alertType: 'info',
                            alert: 'A simple info alert—check it out!',
                        },
                        {   id: 6,
                            type : 'checkbox',
                            alertType: 'info',
                            alert: 'A simple info alert—check it out!',
                        },
                        {   id: 7,
                            type : 'password',
                            alertType: 'warning',
                            alert: 'A simple warning alert—check it out!',
                        },
                    ];

    const slotsDataAlert = [{}, {}, {}, {}, {}, {},];
</script>