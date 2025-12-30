<script setup>
import {ref, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import client from "@/helpers/client.js"

const route = useRoute()
const router = useRouter()

const recipe = ref({
  recipeName: '',
  authorName: '',
  ingredients: '',
  category: '',
  servings: '',
  recipeExplanation: '',
  protein: '',
  minutesToCook: '',
  hoursToCook: '',
  imageUrl: ''
})

const loading = ref(false)
const error = ref(null)
const success = ref(false)

onMounted(async () => {
  try {
    const id = route.params.id
    const res = await client.get(`/recipes/details/${id}`)
    recipe.value = res.data
  } catch {
    error.value = 'Recipe not found.'
  }
})

async function handleUpdate() {
  loading.value = true
  error.value = null

  try {
    const id = route.params.id
    await client.put(`/recipes/${id}`, recipe.value)
    success.value = true
    setTimeout(() => router.push(`/details/${id}`), 1000)
  } catch (err) {
    error.value = err?.response?.data?.message || 'Failed to update recipe.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <div class="card">
      <h2 class="text-center my-4">Edit Recipe</h2>

      <div class="card-body">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <div v-if="success" class="alert alert-success">Recipe updated successfully!</div>

        <form @submit.prevent="handleUpdate">
          <div class="mb-3">
            <label class="form-label">Recipe Name</label>
            <input v-model="recipe.recipeName" class="form-control"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Author Name</label>
            <input v-model="recipe.authorName" class="form-control"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Ingredients</label>
            <textarea v-model="recipe.ingredients" class="form-control"></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label">Category</label>
            <input v-model="recipe.category" class="form-control"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Servings</label>
            <input type="number" v-model="recipe.servings" class="form-control"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Explanation</label>
            <textarea v-model="recipe.recipeExplanation" class="form-control"></textarea>
          </div>

          <div class="mb-3">
            <label class="form-label">Protein</label>
            <input v-model="recipe.protein" class="form-control"/>
          </div>

          <div class="row">
            <div class="col">
              <label class="form-label">Minutes</label>
              <input type="number" v-model="recipe.minutesToCook" class="form-control"/>
            </div>
            <div class="col">
              <label class="form-label">Hours</label>
              <input type="number" v-model="recipe.hoursToCook" class="form-control"/>
            </div>
          </div>

          <div class="mb-3 mt-3">
            <label class="form-label">Image URL</label>
            <input v-model="recipe.imageUrl" class="form-control"/>
          </div>

          <div class="text-center mt-4">

            <button class="btn btn-primary me-3" :disabled="loading">
              {{ loading ? 'Saving...' : 'Save Changes' }}
            </button>

            <button type="button" class="btn btn-secondary" @click="router.back()">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
