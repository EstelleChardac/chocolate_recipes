import { createRouter, createWebHistory } from 'vue-router'
import ChocolateHome from '../views/ChocolateHome.vue'
import IngredientsList from '../views/IngredientsList.vue'
import RecipeDetails from '../views/RecipeDetails.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'ChocolateHome',
            component: ChocolateHome
        },
        {
            path: '/ingredients',
            name: 'IngredientsList',
            component: IngredientsList
        },
        {
            path: '/recipe/:id',
            props: true,
            name: 'RecipeDetails',
            component: RecipeDetails
        }
    ]
})

export default router
