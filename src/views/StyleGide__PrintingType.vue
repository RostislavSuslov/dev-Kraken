<script setup>
    import ColorCardEasy from '../components/ColorCardEasy.vue';
</script>
<template>
    <div class="component-item">
        <ul class="color-list flex m-3 mx-15 flex-wrap">
            <ColorCardEasy title="grayQuaternary" classColor="bg-grayQuaternary" description="#527483" />
            <ColorCardEasy title="darkBackground" classColor="bg-darkBackground" description="#232265" />
            <ColorCardEasy title="accentRedSecondary" classColor="bg-accentRedSecondary" description="#710033" />
       </ul>
        <ul class="printing-list">
            <li class="printing-item"><h1 class="text-fsH1">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1></li>
            <li class="printing-item"><h2 class="text-fsH2">Lorem ipsum dolor sit amet, consectetur adipisicing.</h2></li>
            <li class="printing-item"><h3 class="text-fsH3">Lorem ipsum dolor sit amet, consectetur adipisicing.</h3></li>
            <li class="printing-item"><h4 class="text-fsH4">Lorem ipsum dolor sit amet, consectetur adipisicing.</h4></li>
            <li class="printing-item"><h5 class="text-fsH5">Lorem ipsum dolor sit amet, consectetur adipisicing.</h5></li>
            <li class="printing-item"><h6 class="text-fsH6">Lorem ipsum dolor sit amet, consectetur adipisicing.</h6></li>
        </ul>
        <ul class="printing-list">
            <li class="printing-item"><p class="text-caption">Caption</p></li>
            <li class="printing-item"><p class="text-button">button</p></li>
            <li class="printing-item"><p class="text-buttonSmall">Button small</p></li>
            <li class="printing-item"><p class="text-paragraph">Paragraph</p></li>
            <li class="printing-item"><p class="text-link">Link</p></li>
        </ul>
    </div>
</template>