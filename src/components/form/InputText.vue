<template>
    <div class="flex flex-col my-10">
        <label for="input-default" class="flex mb-4">{{label}}</label>
        <input i :value="modelValue" @change="onChange" />

        <div class="error">Error Lorem, ipsum dolor.</div>
        <div class="halper">Helper Lorem, ipsum.</div>
    </div>
</template>