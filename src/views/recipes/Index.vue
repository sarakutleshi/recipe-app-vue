<script setup>
import {ref, onMounted} from 'vue'
import client from '@/helpers/client.js'
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();

const recipes = ref([])
const error = ref('')
const success = ref('')
const deleting = ref(false);
const deleteError = ref(null);

onMounted(async () => {
  try {
    const response = await client.get('recipes')
    recipes.value = response.data
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to load recipes.'
  }
})

async function handleDelete() {
  const confirmed = window.confirm("Are you sure you want to permanently delete this recipe?");
  if (!confirmed) return;
  deleting.value = true;
  deleteError.value = null;
  const id = route.params.id;

  try {
    await client.delete(`/recipes/${id}`);
    await router.push('/index');
  } catch (err) {
    deleteError.value = err?.response?.data?.message || 'Failed to delete recipe. Please try again.';
  } finally {
    deleting.value = false;
  }
}
</script>

<template>
  <!-- Error Message -->
  <div v-if="error" class="alert alert-danger" role="alert">
    <strong>Error!</strong> {{ error }}
  </div>

  <!-- Success Message -->
  <div v-if="success" class="alert alert-success" role="alert">
    <strong>Info:</strong> {{ success }}
  </div>

  <!-- New Recipe Button -->
  <div class="mb-3">
    <router-link to="/new" class="btn" style="display: flex; justify-content: center; margin-bottom: 50px">
      + New Recipe
    </router-link>
  </div>

  <!-- No Recipes Warning -->
  <div v-if="recipes.length === 0">
    <hr/>
    <div class="alert alert-warning" role="alert">
      <strong>Warning!</strong> No recipes found.
    </div>
  </div>

  <!-- Recipe Cards -->
  <div v-else style="display: flex; justify-content: center;">
    <div class="recipe-container">
      <div class="recipe-card" v-for="recipe in recipes" :key="recipe.id">
        <img :src="recipe.imageUrl" alt="Recipe Image"/>

        <h4>{{ recipe.recipeName?.trim() || 'No Name Available' }}</h4>

        <p><strong>Author:</strong> {{ recipe.authorName }}</p>
        <p><strong>Created:</strong> {{ recipe.createdAt }}</p>
        <p><strong>Category:</strong> {{ recipe.category }}</p>

        <router-link class="btn" :to="`/details/${recipe.id}`">Details</router-link>
        <router-link class="btn" :to="`/edit/${recipe.id}`">Edit</router-link>
        <button class="btn" @click="handleDelete">🗑 Delete</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipe-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  justify-content: center;
}

.recipe-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.recipe-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}

.recipe-card h4 {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #333;
}

.recipe-card p {
  font-size: 0.9rem;
  color: #555;
  margin: 5px 0;
}

.recipe-card .actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}

.btn:hover {
  background-color: var(--button-hover-bg);
  color: #170d0d;
}

</style>