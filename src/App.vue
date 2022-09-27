<template>
    <header>
        <div>
            <nav class="navbar">
                <router-link to="/">Welcome</router-link>
                <router-link to="/ingredients">List of ingredients</router-link>
                <!-- <router-link to="/recipe">Chocolate Cake Recipe</router-link> -->
            </nav>
            <router-view />
        </div>
    </header>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-around;
}

a {
    text-decoration: none;
    color: var(--dark-grey);
}
a:hover {
    background-color: bisque;
}
</style>
