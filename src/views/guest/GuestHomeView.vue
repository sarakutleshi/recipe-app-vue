<script setup lang="ts">
import TitleSection from "@/components/TitleSection.vue";
import RecipeCard from "@/components/RecipeCard.vue";

import PopularRecipe from "@/popular-recipes.json";
import {ref} from "vue";
import BlogCards from "@/components/BlogCards.vue";
const popularRecipes = ref(PopularRecipe);

</script>

<template>
  <section class="homepage-content">
    <div class="left-side" style="color:#F6EED0">
      <h3>Your Daily Dish <br> A food Journey</h3>
      <p style="margin-top: 100px; margin-bottom: 50px">
        Looking for a taste of what’s brewing at our café? Now you can explore our full menu of mouthwatering
        recipes, <br>
        all available on our app! From our signature coffees to freshly baked pastries and seasonal specials,
        everything is just a tap away. <br><br>

        Whether you're craving a sweet treat or a savory snack, our app gives you an easy way to view detailed
        recipes, ingredients, and even make your own at home. <br>
        Enjoy a behind-the-scenes look at how we craft every dish with love, care, and the finest ingredients.<br>
        <br>
        Log In to the app today and dive into a world of flavor at your fingertips. <br>
        Your next favorite recipe is just waiting to be discovered!
      </p>
      <a class="btn2" href="/auth/log-in">Log In</a>
    </div>
    <img class="image" src="https://i.pinimg.com/736x/3d/c2/2d/3dc22dff3c0ca1616c075db2e13a31e5.jpg">
  </section>


  <section class="homepage-content">
    <img class="image" height="350px"
         src="https://i.pinimg.com/736x/26/a7/03/26a703e3d561b6377c452c3f7efa6e00.jpg"
         style="margin-left: 100px; margin-top: 30px" width="300px">
    <div class="left-side" style="color:#F6EED0">
      <h3>Share Your Recipes</h3>
      <p style="margin-top: 50px; margin-bottom: 50px">
        Craving something delicious? <br>
        Check out our café's food recipes on the app!<br>
        From tasty pastries to savory dishes, you'll find everything you need to recreate your favorites at home.<br>
        Sign In to the app and start cooking today!
      </p>

      <a class="btn1" href="/auth/sign-up">Sign Up</a>
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
<style scoped>

body {
  background-color: white;
}
.btn1, .btn2 {
  cursor: pointer;
  display: inline-block;
  background-color: #d79c87;
  text-decoration: none;
  color: white;
  justify-items: center;
  border-radius: 5px;
  padding: 10px 20px;
}

.btn1:hover, .btn2:hover {
  color: #d79c87;
  background-color: #f5e0ce;
}

.homepage-content .image {
  margin-right: 90px;
  height: 508px;
  width: 456px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
}

.homepage-content {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 50px;
  font-size: large;
}

.homepage-content div {
  margin-left: 30px;
  padding: 40px;
}

.homepage-content h3 {
  margin-bottom: 30px;
  font-weight: bold;
  height: 50px;
  font-size: 60px;
  color: black;
}

.homepage-content p {
  margin-top: 100px;
  color: black;

}

.featured-recipes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 40px 20px;
  text-align: center;
}


.recipe-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.recipe-card:hover img {
  transform: scale(1.1);
}

.recipe-card h3 {
  font-size: 1.4rem;
  color: #333;
  margin: 5px 0;
}

.recipe-card p {
  font-size: 1rem;
  color: #676666;
  margin: 10px 0;
}

.recipe-card a {
  color: #d79c87;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 15px;
}

.recipe-card a:hover {
  text-decoration: underline;
}

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
</style>