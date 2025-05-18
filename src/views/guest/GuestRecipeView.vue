<script setup lang="ts">
import TitleSection from "@/components/TitleSection.vue";
import RecipeCard from "@/components/RecipeCard.vue";

import PopularRecipe from "@/popular-recipes.json";
import {ref} from "vue";

const popularRecipes = ref(PopularRecipe);

import {useRouter} from "vue-router";
const router = useRouter()

</script>

<template>
  <div class="hero">
    <h1 class="hero-title">Recipe Heaven</h1>
    <p class="hero-subtitle">Your go-to collection of recipes for every taste and occasion!</p>
  </div>

  <TitleSection title="Popular Recipes" />

  <section class="featured-recipes">
    <RecipeCard
        v-for="popularRecipe in popularRecipes"
        :key="popularRecipe.id"
        :recipe="popularRecipe"
    />
  </section>

  <button class="btn" style="margin-left: 700px">View More</button>

  <TitleSection title="View All" />

  <section class="featured-recipes">
    <RecipeCard
        v-for="popularRecipe in popularRecipes"
        :key="popularRecipe.id"
        :recipe="popularRecipe"
    />
  </section>

  <button class="btn" style="margin-left: 700px">View More</button>
</template>

<style scoped>

.row-features h5 {
  display: flex;
  justify-content: left;
  margin-left: 40px;
  margin-top: 45px;
  margin-bottom: 30px;
  font-family: Inter, sans-serif;
  font-size: xxx-large;
  color: #b66b51;
}

.row-features h5:hover {
  color: #e89a7e;
}

.btn {
  background-color: var(--button-bg);
  border: 2px solid ;
  color: white;
}

.btn:hover {
  background-color: var(--button-hover-bg);
  border-color: var(--button-hover-bg);
}

.hero {
  background-color: #F6EED0;
  padding: 20px 0;
  text-align: center;
  color: #9f2b3f;
  height: 200px;
}

.hero-title {
  margin-top: 30px;
  font-size: 36px;
  margin-bottom: 10px;
  background-color: #F6EED0;
}

.hero-subtitle {
  font-size: 18px;
  margin-bottom: 20px;
  background-color: #F6EED0;
}

.search-filters form {
  display: flex;
  justify-content: center;
  gap: 1em;
}


</style>
