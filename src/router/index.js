import { createRouter, createWebHistory } from 'vue-router'
import ChocolateHome from '../views/ChocolateHome.vue'
import IngredientsList from '../views/IngredientsList.vue'
import RecipeDetails from '../views/RecipeDetails.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Chocolate cake',
            component: ChocolateHome
        },
        {
            path: '/ingredients',
            name: 'List of ingredients',
            component: IngredientsList
        },
        {
            path: '/recipe/52776',
            name: 'Recipe details',
            component: RecipeDetails
        }
    ]
})

export default router
