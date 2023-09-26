<script setup>

</script>

<template>
    <div class="sidebar max-h-[calc(100vh-100px)] grid-row-1 grid-row-span-5 bg-darkTertiary text-white mt-[100px] py-[50px] px-0 max-w-[345px] min-w-[345px]">
        <a href="/" class="logo inline-block mb-[80px] ml-[75px]">
            <img src="src/assets/logo.svg" alt="logo-Kraken-CRM">
        </a>

        <button class="burger hidden">burger</button>

        <nav class="main-navigation grid">
            <a href="offers" class="text-base uppercase leading-5 py-6 px-10 rounded-md transition duration-300 ease-in-out hover:bg-darkSecondary">offers</a>
            <a href="advertisers" class="text-base uppercase leading-5 py-6 px-10 rounded-md transition duration-300 ease-in-out hover:bg-darkSecondary">advertisers</a>
            <a href="Webmasters" class="text-base uppercase leading-5 py-6 px-10 rounded-md transition duration-300 ease-in-out hover:bg-darkSecondary">Webmasters</a>
            <a href="domens" class="text-base uppercase leading-5 py-6 px-10 rounded-md transition duration-300 ease-in-out hover:bg-darkSecondary">domens</a>
            <a href="settings" class="text-base uppercase leading-5 py-6 px-10 rounded-md transition duration-300 ease-in-out hover:bg-darkSecondary">settings</a>
        </nav>
        <nav class="user-navigation absolute top-0 left-0 right-0 px-[35px] py-[20px] h-[100px] bg-white text-black flex justify-end items-center">
            <a href="#">User Name</a>.
            <a href="#">log out</a>
        </nav>


        <div class="theme-toggle absolute left-[15px] top-[15px] text-black">
            <div class="radio-container flex items-center gap-[8px] mb-[12px]">
                <input type="radio" class="radio-input hidden peer" id="first" name="radios" checked>
                <label for="first" class="radio-custom peer-checked:before:bg-amber-200 radio-custom w-[24px] h-[24px] border-[2px] border-solid border-gray-700 rounded-full flex items-center justify-center cursor-pointer"></label>
                <label for="first">Theme first</label>
            </div>

            <div class="radio-container flex items-center gap-[8px] mb-[12px]">
                <input type="radio" class="radio-input hidden" id="custom" name="radios">
                <label for="custom" class="radio-custom radio-custom w-[24px] h-[24px] border-[2px] border-solid border-gray-700 rounded-full flex items-center justify-center cursor-pointer"></label>
                <label for="custom">Theme second</label>
            </div>
        </div>
    </div>
</template>  


<style scoped lang="scss">

.radio-input:checked + .radio-custom::before {
  content: "";
  width: 12px;
  height: 12px;
  background-color: #333;
  border-radius: 50%;
}

</style>