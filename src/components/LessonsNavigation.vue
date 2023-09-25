<template>
    <nav class="lessons-navigation bg-prumaryColor text-lightBackground p-5 flex flex-col rounded-md">
        <router-link to="/lesson-2" class="style-item text-darkTertiary px-5 hover:text-brandSecondaryColor">
            <h2 class="text-fsH2">Lesson-2</h2>
            <h3 class="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus.</h3>
        </router-link>
        <router-link to="/lesson-3" class="style-item text-darkTertiary px-5 hover:text-brandSecondaryColor">
            <h2 class="text-fsH2">Lesson-3</h2>
            <h3 class="text-gray-500 text-sm">  1) Зробити кастомний інпут з привʼязкою v-model
                2) в компоненті де додаєте катстомний (в мене це був App)
                   інпут вивести значення з цього інпуту
                   і додати під ним дефолтний інпут 
                3) при зміні чогось в кастомному інпуті
                   воно повинно синхронізуватись з дефолтним інпутом і навпаки
                4) в кастомному інпуті додати логіку яка буде викликати тригер
                   зміни теми  при вводі ключевого слова." </h3>
        </router-link>
        <router-link to="/lesson-4" class="style-item text-darkTertiary px-5 hover:text-brandSecondaryColor">
            <h2 class="text-fsH2">Lesson-4</h2>
            <h3 class="text-gray-500 text-sm">1) це створення компонента обгортки для інпутів, логіка коли ви виносити все що дублюється в компонентах в окремий компонент.
                2) всі компоненти завжди створюються в дирикторії components в ній можуть бути під дирикторії для структурування наприклад
                components > ui > fields > BaseField
                3) cторінка  стаіл гайд  це App у вас поки, а у когось окрема сторінка.
                4) Подумайте як без умов можна виконати дану задачу проявіть ініціативу і логіку</h3>
        </router-link>
        <router-link to="/lesson-5" class="style-item text-darkTertiary px-5 hover:text-brandSecondaryColor">
            <h2 class="text-fsH2">Lesson-5</h2>
            <h3 class="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, natus.</h3>
        </router-link>
    </nav>
</template>