<template>
    <div class="chocontainer">
        <h2 class="choctitle">
            {{ meal.strMeal }}
        </h2>
        <div class="chocchoc">
            <p>{{ meal.strInstructions }}</p>
        </div>
        <div class="chocimage">
            <img :src="meal.strMealThumb" />
        </div>
    </div>
</template>

<script>
import RecipeService from '../services/RecipeService.js'
export default {
    data() {
        return {
            meal: null,
            idMeal: 52776
        }
    },
    created() {
        RecipeService.getRecipe(this.idMeal)
            .then((response) => {
                this.meal = response.data.meals[0]
                // console.log(response.data)
            })
            .catch((error) => console.log(error))
    }
}
</script>
<style lang="scss" scoped>
h2 {
    line-height: 1.2;
}
.chocontainer {
    display: flex;
    align-items: flex-start;
    margin: 10px;

    .chocchoc {
        padding: 0 10px 0 10px;
        p:first-child::first-letter {
            color: rgb(77, 20, 20);
            font-weight: bold;
            font-size: 70px;
            float: left;
            line-height: 60px;
            padding-right: 8px;
            margin-top: -3px;
        }
    }

    // .choctitle {

    // }
    .chocdesc {
        width: 50%;
        padding: 15px;
    }
    .chocimage {
        width: 50%;
        object-fit: cover;
        object-position: center;
        margin-right: 15px;
    }
    .chocchoc {
        width: 100%;
    }
}
</style>
