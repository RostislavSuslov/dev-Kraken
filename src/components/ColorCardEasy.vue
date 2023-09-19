 <template>
    <li class="colorCard m-[15px] w-100 border border-gray-300 rounded-md p-4">
        <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-brandSecondaryColor"></div> 
        <div class="color-title font-semibold text-xs mb-3">{{ title }}</div>
        <div class="color-hex text-gray-500 text-sm">{{ description }}</div>
    </li>
</template>


<script setup>   
    const props = defineProps({
        title: String,
        classColor: String,
        description: String, 
})

</script>
 