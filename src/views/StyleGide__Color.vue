<script>
    import ColorCard from '../components/ColorCard.vue';

    // const props = defineProps({
    //     
    // })
    export default {
            data() {
                return {
                    colorValue: [
                        {
                            variable: "primaryColor",
                            hex: "#9F5AB8",
                        },  
                        {
                            variable: "secondaryColor",
                            hex: "#888888",
                        }, 
                    
                        {
                            variable: "primaryColor",
                            hex: "#000",
                        },
                        {
                            variable: "brandPrimaryColor",
                            hex: "#000",
                        },
                        {
                            variable: "secondaryColor",
                            hex: "#000",
                        },
                        {
                            variable: "secondaryPurple",
                            hex: "#000",
                        },
                        {
                            variable: "brandSecondaryColor",
                            hex: "#000",
                        },
                        {
                            variable: "accentRed",
                            hex: "#000",
                        },
                        {
                            variable: "accentRedSecondary",
                            hex: "#000",
                        },
                        {
                            variable: "accentGreen",
                            hex: "#000",
                        },
                        {
                            variable: "accentGreenSecondary",
                            hex: "#000",
                        },
                        {
                            variable: "accentGold",
                            hex: "#000",
                        },
                        {
                            variable: "accentGoldSecondary",
                            hex: "#000",
                        },
                        {
                            variable: "lightBackground",
                            hex: "#000",
                        },
                        {
                            variable: "grayBackground",
                            hex: "#000",
                        },
                        {
                            variable: "graySecondary",
                            hex: "#000",
                        },
                        {
                            variable: "grayTertiary",
                            hex: "#000",
                        },
                        {
                            variable: "grayQuaternary",
                            hex: "#000",
                        },
                        {
                            variable: "darkBackground",
                            hex: "#000",
                        },
                        {
                            variable: "darkSecondary",
                            hex: "#000",
                        },
                        {
                            variable: "darkTertiary",
                            hex: "#000",
                        },
                    ]
                };
            },
            components: {
                ColorCard
            }
        }
    
</script>

<template>
    <div class="component-item min-h-[calc(100vh-230px)] bg-white p-16 flex flex-wrap">
        <ul class="color-list flex m-3 mx-15 flex-wrap">
            <ColorCard v-for="color in colorValue" v-bind:key="color" v-bind:colorValue="color" />
        </ul>
    </div>
</template>

 

<style lang="scss">

</style>