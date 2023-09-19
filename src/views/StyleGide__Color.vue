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
                            class: "bg-primaryColor",
                            hex: "#9F5AB8",
                        },  
                        {
                            class: "bg-secondaryColor",
                            hex: "#888888",
                        }, 
                    
                        {
                            class: "bg-primaryColor",
                            hex: "#000",
                        },
                        {
                            class: "bg-brandPrimaryColor",
                            hex: "#000",
                        },
                        {
                            class: "bg-secondaryColor",
                            hex: "#000",
                        },
                        {
                            class: "bg-secondaryPurple",
                            hex: "#000",
                        },
                        {
                            class: "bg-brandSecondaryColor",
                            hex: "#000",
                        },
                        {
                            class: "bg-accentRed",
                            hex: "#000",
                        },
                        {
                            class: "bg-accentRedSecondary",
                            hex: "#000",
                        },
                        {
                            class: "bg-accentGreen",
                            hex: "#000",
                        },
                        {
                            class: "bg-accentGreenSecondary",
                            hex: "#000",
                        },
                        {
                            class: "bg-accentGold",
                            hex: "#000",
                        },
                        {
                            class: "bg-accentGoldSecondary",
                            hex: "#000",
                        },
                        {
                            class: "bg-lightBackground",
                            hex: "#000",
                        },
                        {
                            class: "bg-grayBackground",
                            hex: "#000",
                        },
                        {
                            class: "bg-graySecondary",
                            hex: "#000",
                        },
                        {
                            class: "bg-grayTertiary",
                            hex: "#000",
                        },
                        {
                            class: "bg-grayQuaternary",
                            hex: "#000",
                        },
                        {
                            class: "bg-darkBackground",
                            hex: "#000",
                        },
                        {
                            class: "bg-darkSecondary",
                            hex: "#000",
                        },
                        {
                            class: "bg-darkTertiary",
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
 