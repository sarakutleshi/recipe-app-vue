<script setup lang="ts">

</script>

<template>
  <h1 class="title" style="margin-bottom: 50px; margin-top: 40px">ABOUT US.</h1>

  <section style="display: flex ;">
    <div class="first-text" style="flex: 1; font-size:larger ; margin-top: 40px ">
      <p>About us.</p>
      <p>About our Team.</p>
      <p>Our Team.</p>
      <p>Press.</p>
    </div>
    <div class="second-text" style="flex: 2; gap: 0 ; font-size: large">
      <p>
        We believe that cooking is more than just preparing meals; it's a journey of creativity, discovery, and
        connection. Whether you're a seasoned chef or just starting your culinary adventure, our app is here to
        inspire and guide you every step of the way. <br>
        At RecipeApp, we provide a wide variety of recipes tailored to suit every taste, occasion, and skill level.
        From quick weeknight dinners to show-stopping desserts, our curated collection ensures you'll always find
        something delicious to create.<br>
        But we don’t stop at recipes! Our app is designed to make cooking easier and more enjoyable with features
        like personalized recommendations, meal planning tools, and step-by-step guides. Plus, you can share your
        favorite creations with our community of food enthusiasts.<br>
        Join us in celebrating the joy of cooking and the magic of food. Together, let’s turn everyday meals into
        extraordinary moments.
      </p>
    </div>
  </section>

  <section>
    <img alt="Horizontal Image" class="first-pic"
         src="https://i.pinimg.com/736x/33/55/23/33552342f7ef90ed0b6a9de1f977fe65.jpg">
  </section>

  <section style="display: flex ;">
    <div class="first-text" style="flex: 1;">

      <p style="margin-top: 70px ; font-size: xx-large ; font-family: Calibri ,sans-serif">
        <strong>"</strong>Good food is the foundation of genuine happiness.<strong>"</strong> <br><br>
        – Auguste Escoffier
      </p>
    </div>
    <div style="flex: 2">
      <img src="https://i.pinimg.com/736x/73/c2/87/73c287adc3f68c34468eaede323fbe0c.jpg"
           style=" width: 400px; height: 350px; margin-left: 200px; margin-top: 50px">
    </div>
  </section>

</template>

<style scoped>
.title {
  color: #504040;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  display: flex;
  margin-left: 400px;
  margin-top: 150px;
  font-size: 70px;
}

.first-text {
  font-family: Inter, sans-serif;
  margin-left: 250px;
  gap: 0;
}

.second-text {
  font-family: Inter, sans-serif;
}

.first-pic {
  width: 1300px;
  height: 350px;
  object-fit: cover;
  margin-top: 50px;
  margin-left: 150px;
  margin-bottom: 50px;
}
</style>