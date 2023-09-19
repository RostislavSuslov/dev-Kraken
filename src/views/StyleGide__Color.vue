<template>
    <div class="component-item min-h-[calc(100vh-230px)] bg-white p-16 flex flex-wrap">
        <ul class="color-list flex m-3 mx-15">
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-primaryColor"></div>
                <div class="color-title font-semibold text-xs mb-3">primaryColor</div>
                <div class="color-hex text-gray-500 text-sm">#9F5AB8 <br> #1E99B4</div>
            </li>
        </ul>
        <ul class="color-list flex m-3 mx-15">
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-brandPrimaryColor"></div>
                <div class="color-title font-semibold text-xs mb-3">brandPrimaryColor</div>
                <div class="color-hex text-gray-500 text-sm">#4288b5</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-secondaryColor"></div>
                <div class="color-title font-semibold text-xs mb-3">secondaryColor</div>
                <div class="color-hex text-gray-500 text-sm">#072e53</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-secondaryPurple"></div>
                <div class="color-title font-semibold text-xs mb-3">secondaryPurple</div>
                <div class="color-hex text-gray-500 text-sm">#f4dcff</div>
            </li>
        </ul>
        <ul class="color-list flex m-3 mx-15">
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-brandSecondaryColor"></div>
                <div class="color-title font-semibold text-xs mb-3">brandSecondaryColor</div>
                <div class="color-hex text-gray-500 text-sm">#ba90ce</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-accentRed"></div>
                <div class="color-title font-semibold text-xs mb-3">accentRed</div>
                <div class="color-hex text-gray-500 text-sm">#f2e1e0</div>
            </li>
        </ul>
        <ul class="color-list flex m-3 mx-15">
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-accentRedSecondary"></div>
                <div class="color-title font-semibold text-xs mb-3">accentRedSecondary</div>
                <div class="color-hex text-gray-500 text-sm">#9b1c13</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-accentGreen"></div>
                <div class="color-title font-semibold text-xs mb-3">accentGreen</div>
                <div class="color-hex text-gray-500 text-sm">#d1e7dd</div>
            </li>
        </ul>
        <ul class="color-list flex m-3 mx-15">
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-accentGreenSecondary"></div>
                <div class="color-title font-semibold text-xs mb-3">accentGreenSecondary</div>
                <div class="color-hex text-gray-500 text-sm">#0f5132</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-accentGold"></div>
                <div class="color-title font-semibold text-xs mb-3">accentGold</div>
                <div class="color-hex text-gray-500 text-sm">#fff3cd</div>
            </li>
        </ul>
        <ul class="color-list flex m-3 mx-15">
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-accentGoldSecondary"></div>
                <div class="color-title font-semibold text-xs mb-3">accentGoldSecondary</div>
                <div class="color-hex text-gray-500 text-sm">#664d03</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-lightBackground"></div>
                <div class="color-title font-semibold text-xs mb-3">lightBackground</div>
                <div class="color-hex text-gray-500 text-sm">#ffffff</div>
            </li>
        </ul>
        <ul class="color-list flex m-3 mx-15">
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-grayBackground"></div>
                <div class="color-title font-semibold text-xs mb-3">grayBackground</div>
                <div class="color-hex text-gray-500 text-sm">#f6f6fa</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-graySecondary"></div>
                <div class="color-title font-semibold text-xs mb-3">graySecondary</div>
                <div class="color-hex text-gray-500 text-sm">#e9e9e9</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-grayTertiary"></div>
                <div class="color-title font-semibold text-xs mb-3">grayTertiary</div>
                <div class="color-hex text-gray-500 text-sm">#989898</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-grayQuaternary"></div>
                <div class="color-title font-semibold text-xs mb-3">grayQuaternary</div>
                <div class="color-hex text-gray-500 text-sm">#323232</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-darkBackground"></div>
                <div class="color-title font-semibold text-xs mb-3">darkBackground</div>
                <div class="color-hex text-gray-500 text-sm">#0e3046</div>
            </li>
        </ul>
        <ul class="color-list flex m-3 mx-15">
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-darkSecondary"></div>
                <div class="color-title font-semibold text-xs mb-3">darkSecondary</div>
                <div class="color-hex text-gray-500 text-sm">#202637</div>
            </li>
            <li class="color-item mx-[15px] w-100 border border-gray-300 rounded-md p-4">
                <div class="color-show w-[100px] h-[70px] rounded-md mb-6 bg-darkTertiary"></div>
                <div class="color-title font-semibold text-xs mb-3">darkTertiary</div>
                <div class="color-hex text-gray-500 text-sm">#001223</div>
            </li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style lang="scss">

</style>