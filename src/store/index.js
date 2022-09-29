import { createStore } from 'vuex'
import axios from 'axios'

// Create a new store instance.
export default createStore({
    state() {
        return {
            recipe: 0
        }
    },
    mutations: {
        addRecipe(state, payload) {
            state.recipe = payload
        }
    },
    actions: {
        addRecipe({ commit }) {
            axios('https://www.themealdb.com/api/json/v1/1/random.php').then(
                (response) => {
                    commit('addRecipe', response.data.meals[0].strMeal)
                }
            )
        }
    },
    getters: {},
    modules: {}
})
