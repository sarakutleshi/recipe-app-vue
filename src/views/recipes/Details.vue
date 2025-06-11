<script setup>
import {computed, onMounted, ref} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const recipe = ref(null)

// Fetch recipe by ID from backend
onMounted(async () => {
  try {
    const id = route.params.id
    const response = await axios.get(`/api/recipes/details/${id}`)
    recipe.value = response.data
  } catch (error) {
    console.error('Error fetching recipe:', error)
    recipe.value = null
  }
})

// Fields to show with custom labels
const displayedFields = computed(() => {
  if (!recipe.value) return {}

  return {
    'Recipe Name': recipe.value.recipeName,
    'Author Name': recipe.value.authorName,
    'Ingredients': recipe.value.ingredients,
    'Category': recipe.value.category,
    'Servings': recipe.value.servings,
    'Recipe Explanation': recipe.value.recipeExplanation,
    'Protein': recipe.value.protein,
    'ID': recipe.value.id,
    'Minutes to Cook': recipe.value.minutesToCook,
    'Hours to Cook': recipe.value.hoursToCook,
    'Created Date': recipe.value.createdAt
  }
})

function goBack() {
  router.back()
}
</script>

<template>
  <div class="container" id="naja">
    <div class="card">
      <h2 class="card-title" style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 50px">
        Recipe Details
      </h2>

      <!-- Show error if recipe not found -->
      <div class="card-body" v-if="!recipe">
        <div class="alert alert-danger" role="alert">
          Recipe not found.
        </div>
      </div>

      <!-- Show recipe details -->
      <div class="card-body" v-else>
        <div class="row mb-3" v-for="(value, label) in displayedFields" :key="label">
          <div class="col-sm-4 detail-label">{{ label }}</div>
          <div class="col-sm-8 detail-value">{{ value || '-' }}</div>
        </div>
      </div>

      <!-- Back Button -->
      <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-secondary" @click="goBack">Back</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>