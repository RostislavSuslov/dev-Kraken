
<script>
    // const props = defineProps({
    //     label: {
    //         type: String, 
    //         required: true,
    //     },
    //     size: {
    //         type: String,
    //         validator (value) {
    //             return ['sm', 'xs', 'md'].includes(value)
    //         },
    //         default: 'primaryColor'
    //     },
    //     cardClasses: {
    //         type: [String, Array, Object],
    //         validator(value){
    //             if (value === 'bg-blue-100') {
    //                 return false
    //             }
    //             return true;
    //         }
    //     }
    // })

   export default {
        props: ["colorValue"],
        colorValue: Object,
        computed: {
            getColorClass() {
 
            return 'bg-' + this.colorValue.variable;
            },
        },
        data() {
            return {};
        }
    }
</script>

<template>
    <li class="colorCard m-[15px] w-100 border border-gray-300 rounded-md p-4">
<<<<<<< HEAD
        <div class="color-show w-[100px] h-[70px] rounded-md mb-6" :class="colorValue.class"></div> 
        <div class="color-title font-semibold text-xs mb-3">{{colorValue.class}}</div>
=======
        <div :class="['color-show', 'w-[100px]', 'h-[70px]', 'rounded-md', 'mb-6', getColorClass ]"></div> 
        <div class="color-title font-semibold text-xs mb-3">{{colorValue.variable}}</div>
>>>>>>> c38025dfeb58f2861116d06289c008455c116a0d
        <div class="color-hex text-gray-500 text-sm">{{colorValue.hex}}</div>
    </li>
</template>    

