<template>
    <router-link to="/recipe/52776" class="link">
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: solid black 3px;
    border-radius: 5px;
    width: 25%;

    .choctitle {
        // align-items: center;
    }

    .chocimage,
    img {
        width: 100%;
    }
}
</style>
