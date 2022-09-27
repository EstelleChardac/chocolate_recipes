import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/search.php?s=Chocolate',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
export default {
    getRecipes() {
        return apiClient.get('')
    },
    getRecipe(idMeal) {
        return apiClient.get(
            'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal
        )
    }
}
