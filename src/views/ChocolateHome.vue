<template>
    <h1 class="webtitle">Chocolate cakes for everyone!</h1>
    <div>
        <ChocolateRecipe
            v-for="meal in meals"
            :key="meal.idMeal"
            :meal="meal"
        />
    </div>
</template>

<script>
import ChocolateRecipe from '../components/ChocolateRecipe.vue'
import RecipeService from '../services/RecipeService.js'

export default {
    name: 'ChocolateHome',
    components: {
        ChocolateRecipe
    },

    data() {
        return {
            meals: null
        }
    },
    created() {
        RecipeService.getRecipes()
            .then((response) => {
                this.meals = response.data.meals
                console.log(response.data.meals)
            })
            .catch((error) => console.log(error))
    }
}
</script>
<style lang="scss" scoped>
.webtitle {
    &:hover {
        color: rgb(77, 20, 20);
        transform: translateY(30px) rotate(8deg) translateY(5px);
    }
}
</style>
