<script setup>
import TheNavBar from "../../../vue-recipe-app/src/components/NavBar.vue";
</script>

<template>
  <div id="main" class="layout-navbar">
    <the-nav-bar />

    <div id="main-content">
      <div class="page-heading">
        <section class="section">
          <router-view />
        </section>
      </div>
    </div>
  </div>
</template>

