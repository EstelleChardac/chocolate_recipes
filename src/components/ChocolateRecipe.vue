<template>
    <router-link
        :to="{ name: 'RecipeDetails', params: { id: meal.idMeal } }"
        class="link"
    >
        <div class="chocontainer">
            <h2 class="choctitle">
                {{ meal.strMeal }}
            </h2>
            <div class="chocimage">
                <img :src="meal.strMealThumb" />
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'ChocolateRecipe',
    props: {
        meal: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
h2 {
    line-height: 1.2;
}
.link {
    text-decoration: none;
    color: inherit;
}
.chocontainer {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    margin: 10px;
    border: solid black 3px;
    border-radius: 5px;
    width: 50%;

    .choctitle {
        // align-items: center;
    }

    .chocimage,
    img {
        width: 100%;
    }
}
</style>
