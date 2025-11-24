<script setup lang="ts">
defineProps<{
  recipe: {
    id: number;
    imageUrl: string;
    username: string;
    content: string;
  };
}>();

</script>

<template>
  <div class="recipe-card">
    <img :src="recipe.imageUrl" class="card-img-top" alt="Recipe Image">
    <div class="card-body">
      <h5 class="card-title">{{ recipe.username }}</h5>
      <p class="card-text">{{ recipe.content }}</p>
      <router-link :to="`/views-recipe/${recipe.id}`" class="btn">
        View More
      </router-link>
    </div>
  </div>
</template>

