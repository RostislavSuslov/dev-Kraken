<script setup>
  const props = defineProps({
    label: {
      type: String,
      default: 'Button'
    },
    btn: {
      type: String,
      default: 'inline-block px-12 py-6 border-[3px] border-solid  leading-6 font-extrabold uppercase ',

    },
    btnType: {
      type: String,
      primary: 'border-primaryColor text-primaryColor hover:border-primaryColor hover:bg-primaryColor hover:text-lightBackground active:border-primaryAccentColor active:bg-primaryAccentColor',
      secondary: 'border-secondaryColor text-secondaryColor hover:border-secondaryColor hover:bg-secondaryColor hover:text-lightBackground active:border-secondaryAccentColor active:bg-secondaryAccentColor',
      secondaryAccent: '',
    }

  })
</script>

<template>
  <button :class="['btn', `${btn}`,  ]">
      {{label}}
  </button>
</template>