<template>
    <main>
        <!-- <ChocolateRecipe
            v-for="meal in meals"
            :key="meal.idMeal"
            :meal="meal"
        /> -->
        <h1 v-for="meal in meals" :key="meal.idMeal">
            {{ meal[0].strMeal }} {{ meal[0].strInstructions }}
        </h1>
    </main>
</template>

<script>
// import ChocolateRecipe from '../components/ChocolateRecipe.vue'
import axios from 'axios'

export default {
    name: 'ChocolateHome',
    // components: {
    //     ChocolateRecipe
    // },
    data() {
        return {
            meals: []
        }
    },
    created() {
        axios
            .get(
                'https://www.themealdb.com/api/json/v1/1/search.php?s=Chocolate'
            )
            .then((response) => {
                this.meals = response.data
            })
            .catch((error) => console.log(error))
    }
}
</script>
<style scoped>
main {
    color: black;
}
</style>
