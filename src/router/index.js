import { createRouter, createWebHistory }      from      'vue-router'
import StyleGide__Alert                        from      '../views/StyleGide__Alert.vue'
import StyleGide__Buttons                      from      '../views/StyleGide__Buttons.vue'
import StyleGide__Color                        from      '../views/StyleGide__Color.vue'
import StyleGide__Icon                         from      '../views/StyleGide__Icon.vue'
import StyleGide__Input                        from      '../views/StyleGide__Input.vue'
import StyleGide__PrintingType                 from      '../views/StyleGide__PrintingType.vue'
import Homework                                from      '../views/Homework.vue'
// import Lesson_1                                from      '../views/Lessons/Lesson_1.vue'
import Lesson_2                                from      '../views/Lessons/Lesson_2.vue'
import Lesson_3                                from      '../views/Lessons/Lesson_3.vue'
import Lesson_4                                from      '../views/Lessons/Lesson_4.vue'
import Lesson_5                                from      '../views/Lessons/Lesson_5.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homework',
      name: 'homework',
      component: Homework,
    },
    // {
    //   path: '/lesson-1',
    //   name: 'lesson-1',
    //   component: Lesson_1,
    // },
    {
      path: '/lesson-2',
      name: 'lesson-2',
      component: Lesson_2,
    },
    {
      path: '/lesson-3',
      name: 'lesson-3',
      component: Lesson_3,
    },
    {
      path: '/lesson-4',
      name: 'lesson-4',
      component: Lesson_4,
    },
    {
      path: '/lesson-5',
      name: 'lesson-5',
      component: Lesson_5,
    },
    {
      path: '/style-color',
      name: 'style-color',
      component: StyleGide__Color,
      meta: { isHome: true },
    },
    {
      path: '/style-alert',
      name: 'style-alert',
      component: StyleGide__Alert
    },
    {
      path: '/style-buttons',
      name: 'style-buttons',
      component: StyleGide__Buttons
    },
    {
      path: '/style-icon',
      name: 'style-icon',
      component: StyleGide__Icon
    },
    {
      path: '/style-input',
      name: 'style-input',
      component: StyleGide__Input
    },
    {
      path: '/style-printing-type',
      name: 'style-printing-type',
      component: StyleGide__PrintingType
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import('../views/AboutView.vue')
    // }
  ],
 
})

export default router
