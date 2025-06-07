<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import axios from 'axios';

const recipe = ref(null);
const route = useRoute();
const recipeId = route.params.id;

const fetchRecipe = async () => {
  try {
    const response = await axios.get(`/api/v1/recipes/${recipeId}`);
    recipe.value = response.data;
  } catch (error) {
    console.error('Failed to fetch recipe:', error);
  }
};

onMounted(fetchRecipe);
</script>


<template>
  <div class="recipe-container" v-if="recipe">
    <!-- Recipe Explanation -->
    <div class="recipe-explanation">
      <p>{{ recipe.recipeExplanation }}</p>
    </div>

    <!-- Recipe Description -->
    <div class="recipe-description">
      <div class="recipe-description-item">
        <h6>Author Name</h6>
        <p>{{ recipe.authorName }}</p>
      </div>
      <div class="recipe-description-item">
        <h6>Cook Time</h6>
        <p>{{ recipe.minutesToCook }} min</p>
      </div>
      <div class="recipe-description-item">
        <h6>Serving</h6>
        <p>{{ recipe.servings }} servings</p>
      </div>
    </div>

    <!-- Recipe Image -->
    <div class="recipe-image-container">
      <div class="recipe-image">
        <img :src="recipe.imageUrl" alt="Recipe Image">
      </div>
    </div>

    <!-- Nutritional Information -->
    <div class="nutrition-table">
      <table>
        <thead>
        <tr>
          <th colspan="2">Nutritional Information</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Calories</td>
          <td>{{ recipe.calories }}</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>{{ recipe.carbs }}</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>{{ recipe.fat }}</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>{{ recipe.protein }}</td>
        </tr>
        <tr>
          <td>Fiber</td>
          <td>{{ recipe.fiber }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Ingredients List -->
    <div class="ingredients-list">
      <h4>Ingredients:</h4>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
    </div>

    <!-- Instructions -->
    <div class="instructions">
      <h4>Instructions:</h4>
      <p>{{ recipe.instructions }}</p>
    </div>
  </div>

  <div v-else>
    <p>Loading recipe...</p>
  </div>
</template>

<style scoped>
/* You can adjust or reuse your CSS here */
.recipe-container {
  padding: 20px;
}

.recipe-description-item {
  margin-bottom: 10px;
}

.recipe-image img {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
}

.nutrition-table table {
  width: 100%;
  border-collapse: collapse;
}

.nutrition-table td, .nutrition-table th {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>
