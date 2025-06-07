<script setup>
import TitleSection from "@/components/TitleSection.vue";
import RecipeCard from "@/components/RecipeCard.vue";
import BlogCards from "@/components/BlogCards.vue";
import PopularRecipe from "@/popular-recipes.json";
import {ref} from "vue";
const popularRecipes = ref(PopularRecipe);

</script>

<template>
  <section class="homepage-content">
    <div class="left-side" style="color:#F6EED0">
      <h3>Your Daily Dish <br /> A food Journey</h3>
      <p style="margin-top: 150px; margin-bottom: 40px">
        Looking for a taste of what’s brewing at our café? Now you can explore our full menu of mouthwatering
        recipes, all available on our app! <br />
        From our signature coffees to freshly baked pastries and seasonal specials, everything is just a tap away.
      </p>
      <a class="btn1" href="/user-recipe">View Our Recipes</a>
    </div>
    <img
        class="image"
        src="https://i.pinimg.com/736x/3d/c2/2d/3dc22dff3c0ca1616c075db2e13a31e5.jpg"
    />
  </section>

  <section class="homepage-content">
    <img
        class="image"
        height="350"
        width="300"
        src="https://i.pinimg.com/736x/26/a7/03/26a703e3d561b6377c452c3f7efa6e00.jpg"
        style="margin-left: 100px; margin-top: 30px; margin-bottom: 30px"
    />
    <div class="left-side" style="color:#F6EED0">
      <h3>Share Your Recipe with Us!</h3>
      <p style="margin-top: 100px; margin-bottom: 50px">
        Have a client you love? We’d love to feature it! Share your favorite creations with us through our app, <br />
        and you could see your dish become part of our café’s menu. Let’s cook up something amazing together!
      </p>
      <a class="btn2" href="/index">Create New Recipe</a>
    </div>
  </section>

    <TitleSection title="Explore Recipes"/>

    <section class="featured-recipes">
      <RecipeCard
          v-for="popularRecipe in popularRecipes"
          :key="popularRecipe.id"
          :recipe="popularRecipe"
      />
    </section>

    <TitleSection title="Blog"/>

    <BlogCards :limit="3"/>

</template>
<style>

</style>