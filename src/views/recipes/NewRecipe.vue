<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import client from "@/helpers/client.js";

const router = useRouter()

const recipe = reactive({
  recipeName: '',
  authorName: '',
  imageUrl: '',
  ingredients: '',
  instructions: '',
  steps: '',
  category: '',
  recipeExplanation: '',
  minutesToCook: '',
  hoursToCook: '',
  servings: '',
  calories: '',
  protein: '',
  fat: '',
  carbs: '',
  fiber: ''
})

const file = ref(null)

function handleFileUpload(event) {
  const selectedFile = event.target.files[0]
  if (selectedFile) {
    file.value = selectedFile
    recipe.imageUrl = URL.createObjectURL(selectedFile)
  }
}

function resetForm() {
  Object.keys(recipe).forEach(key => {
    recipe[key] = ''
  })
  file.value = null
}

async function submitForm() {
  const formData = new FormData()
  for (const key in recipe) {
    formData.append(key, recipe[key])
  }
  if (file.value) {
    formData.append('documentFile', file.value)
  }

  try {
    const response = await client.post('recipes/new', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    // This only runs if the request was successful
    alert('Recipe submitted successfully!');
    resetForm(); // Call your form reset logic here
  } catch (error) {
    // Axios throws on non-2xx responses, so you catch all errors here
    console.error(error);
    alert('An error occurred while submitting the form.');
  }
}

function goBack() {
  router.back()
}
</script>

<template>
  <div class="container" id="naja">
    <div class="card">
      <h2 class="text-center mt-4">New Recipe</h2>
      <div class="card-body p-2">
        <form @submit.prevent="submitForm" enctype="multipart/form-data">
          <!-- Recipe Name -->
          <div class="mb-3">
            <label class="form-label">Recipe Name</label>
            <input class="form-control" v-model="recipe.recipeName" type="text" required minlength="3" maxlength="50"
                   placeholder="Enter recipe name"/>
          </div>

          <!-- Author Name -->
          <div class="mb-3">
            <label class="form-label">Author Name</label>
            <input class="form-control" v-model="recipe.authorName" type="text" required
                   placeholder="Enter author name"/>
          </div>

          <!-- Recipe Image Preview -->
          <div class="mb-3" v-if="recipe.imageUrl">
            <label class="form-label">Recipe Photo</label>
            <div>
              <img class="img-thumbnail" :src="recipe.imageUrl"
                   style="width: 150px; height: 150px; object-fit: cover;"/>
            </div>
          </div>

          <!-- File Upload -->
          <div class="mb-3">
            <label class="form-label" for="documentFile">Upload Recipe Photo</label>
            <input class="form-control" type="file" id="documentFile" accept="image/*" @change="handleFileUpload"/>
          </div>

          <!-- Ingredients -->
          <div class="mb-3">
            <label class="form-label">Ingredients</label>
            <textarea class="form-control" v-model="recipe.ingredients" rows="3"
                      placeholder="List the ingredients"></textarea>
          </div>

          <!-- Instructions -->
          <div class="mb-3">
            <label class="form-label">Instructions</label>
            <textarea class="form-control" v-model="recipe.instructions" rows="4" required
                      placeholder="Write the instructions"></textarea>
          </div>

          <!-- Steps -->
          <div class="mb-3">
            <label class="form-label">Steps</label>
            <textarea class="form-control" v-model="recipe.steps" rows="4" required
                      placeholder="List the steps"></textarea>
          </div>

          <!-- Category -->
          <div class="mb-3">
            <label class="form-label">Category</label>
            <input class="form-control" v-model="recipe.category" type="text" required placeholder="Enter category"/>
          </div>

          <!-- Recipe Explanation -->
          <div class="mb-3">
            <label class="form-label">Recipe Explanation</label>
            <textarea class="form-control" v-model="recipe.recipeExplanation" rows="3" required
                      placeholder="Explain your recipe"></textarea>
          </div>

          <!-- Time -->
          <div class="row mb-3">
            <div class="col-md-6">
              <label class="form-label">Prep Time (minutes)</label>
              <input class="form-control" v-model="recipe.minutesToCook" type="number" required placeholder="Minutes"/>
            </div>
            <div class="col-md-6">
              <label class="form-label">Prep Time (hours)</label>
              <input class="form-control" v-model="recipe.hoursToCook" type="number" placeholder="Hours"/>
            </div>
          </div>

          <!-- Nutrition -->
          <div class="row">
            <div class="col-md-3">
              <label class="form-label">Servings</label>
              <input class="form-control" v-model="recipe.servings" type="number" placeholder="Servings"/>
            </div>
            <div class="col-md-3">
              <label class="form-label">Calories</label>
              <input class="form-control" v-model="recipe.calories" type="number" placeholder="Calories"/>
            </div>
            <div class="col-md-3">
              <label class="form-label">Protein</label>
              <input class="form-control" v-model="recipe.protein" type="number" placeholder="Protein (g)"/>
            </div>
            <div class="col-md-3">
              <label class="form-label">Fat</label>
              <input class="form-control" v-model="recipe.fat" type="number" placeholder="Fat (g)"/>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="form-label">Carbs</label>
              <input class="form-control" v-model="recipe.carbs" type="number" placeholder="Carbs (g)"/>
            </div>
            <div class="col-md-6">
              <label class="form-label">Fiber</label>
              <input class="form-control" v-model="recipe.fiber" type="number" placeholder="Fiber (g)"/>
            </div>
          </div>

          <!-- Buttons -->
          <div class="d-flex justify-content-between mt-4">
            <button class="btn btn-primary" type="submit">Save</button>
            <button class="btn btn-secondary" type="reset" @click="resetForm">Reset</button>
            <button class="btn btn-link" @click="goBack">Back</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>