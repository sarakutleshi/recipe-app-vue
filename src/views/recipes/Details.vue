<script setup>
import {ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import client from "@/helpers/client.js";

const route = useRoute();

const recipes = ref(null);
const error = ref(false);

const displayFields = computed(() => {
  if (!recipes.value) return {};
  return {
    'First Name': recipes.value.recipeName,
    'Last Name': recipes.value.authorName,
    'Ingredients': recipes.value.ingredients,
    'Category': recipes.value.category,
    'Servings': recipes.value.servings,
    'State': recipes.value.recipeExplanation,
    'Protein': recipes.value.protein,
    'ID': recipes.value.id,
    'Minutes to Cook': recipes.value.minutesToCook,
    'Hours to Cook': recipes.value.hoursToCook,
    'Created Date': recipes.value.createdAt,
  };
});


onMounted(() => {
  const id = route.params.id;
  client.get(`/recipes/details/${id}`)
      .then((res) => {
        recipes.value = res.data;
      })
      .catch(() => {
        error.value = true;
      });
});
</script>


<template>
  <div class="container" id="naja">
    <div class="card">
      <h2 class="card-title" style="display: flex; justify-content: center; margin-top: 20px; margin-bottom: 50px">
        Recipe Details
      </h2>

      <div class="card-body" v-if="!recipes && error">
        <div class="alert alert-danger" role="alert">
          Recipe not found.
        </div>
      </div>

      <div class="card-body" v-for="(value, key) in displayFields" :key="key">
        <div class="row align-items-start mb-3 py-2 border-bottom">
          <div class="col-sm-4 text-muted fw-semibold">{{ key }}</div>
          <div class="col-sm-8 text-dark">{{ value }}</div>
        </div>
      </div>

      <router-link to="/" class="btn btn-secondary m-3">Back</router-link>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  padding: 1rem;
}

.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}

.text-muted {
  color: #6c757d;
}

.text-dark {
  color: #212529;
}

.fw-semibold {
  font-weight: 600;
}

</style>
