<script setup>
     import { ref, onMounted } from 'vue';

const radioButtons = ref(null);

onMounted(() => {
  radioButtons.value = document.querySelectorAll('.radio-input');

  radioButtons.value.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
      document.body.classList.remove('theme-second');

      switch (radioButton.id) {
        case 'first':
          document.body.classList.remove('theme-second');
          break;
        case 'custom':
          document.body.classList.add('theme-second');
          break;
        default:
          break;
      }
    });
  });
});
</script>

<template>
    <div class="sidebar bg-secondaryColor">
        <a href="/" class="logo">
            <img src="src/assets/logo.svg" alt="logo-Kraken-CRM">
        </a>
        <button class="burger">burger</button>
        <nav class="main-navigation">
            <a href="offers" class="text-paragraph px-5 hover:text-accentGold">offers</a>
            <a href="advertisers" class="text-paragraph px-5 hover:text-accentGold">advertisers</a>
            <a href="Webmasters" class="text-paragraph px-5 hover:text-accentGold">Webmasters</a>
            <a href="domens" class="text-paragraph px-5 hover:text-accentGold">domens</a>
            <a href="settings" class="text-paragraph px-5 hover:text-accentGold">settings</a>
        </nav>
        <nav class="user-navigation">
            <a href="#">User Name</a>.
            <a href="log out">log out</a>
        </nav>

       
        <div class="theme-toggle">
            <div class="radio-container">
                <input type="radio" class="radio-input" id="first" name="radios" checked>
                <label for="first" class="radio-custom"></label>
                <label for="first">Theme first</label>
            </div>
        
            <div class="radio-container">
                <input type="radio" class="radio-input" id="custom" name="radios">
                <label for="custom" class="radio-custom"></label>
                <label for="custom">Theme second</label>
            </div>
        </div>
    </div>
</template>  


<style scoped>
 
        .radio-container {
            display: flex;
            align-items: center;
            gap: 8px;
        }

 
        .radio-input {
            display: none;
        }

 
        .radio-custom {
            width: 24px;
            height: 24px;
            border: 2px solid #333;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
 
        .radio-input:checked + .radio-custom::before {
            content: "";
            width: 12px;
            height: 12px;
            background-color: #333;
            border-radius: 50%;
        }    
</style>