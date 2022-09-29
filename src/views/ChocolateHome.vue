<template>
    <h1 class="webtitle">Chocolate cakes for everyone!</h1>
    <div class="chocrecipes">
        <ChocolateRecipe
            v-for="meal in meals"
            :key="meal.idMeal"
            :meal="meal"
        />
    </div>
    <button class="added" @click="$store.dispatch('addRecipe')">
        Add your recipes
    </button>
    <div class="recipe">{{ $store.state.recipe }}</div>
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
            meals: null,
            recipe: 0
        }
    },
    created() {
        RecipeService.getRecipes()
            .then((response) => {
                this.meals = response.data.meals
            })
            .catch((error) => console.log(error))
    }
}
</script>
<style lang="scss" scoped>
.chocrecipes {
    display: flex;
    flex-wrap: wrap;
}

.webtitle {
    &:hover {
        color: rgb(77, 20, 20);
        transform: translateY(30px) rotate(8deg) translateY(5px);
    }
}

.added {
    width: 130px;
    padding: 15px;
    display: flex;
    justify-content: center;
}
</style>
