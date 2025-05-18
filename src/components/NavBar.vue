<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter()

</script>

<template>
  <header>
    <section class="first-part">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <h1 class="logo">Recipe App</h1>
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/guest-recipe">Recipe</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/guest-blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/guest-about">About Us</a>
              </li>
            </ul>
          </div>
          <div class="d-flex ms-auto">
            <a href="/log-in" class="btn">Log In</a>
            <a href="/sign-up" class="btn">Sign In</a>
          </div>
        </div>
      </nav>
    </section>
  </header>
</template>

<style scoped>
* {
  font-family: Bahnschrift, sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  background-color: white;
}

body{
  background-color: white;
}

.container-fluid {
  position: sticky;
  margin-left: 250px;
  margin-right: 200px;
  font-family: Inter, sans-serif;
  font-weight: inherit;
  margin-top: 10px;
  justify-content: center;
}

.left-side h3:hover {
  color: #b66b51;
}

.nav-link:hover {
  color: #f9c0ab;
}

.nav-link {
  color: black;

}

.logo{
  margin-right: 100px;
  color: #b66b51;
  font-size: xxx-large;
  font-family: Bahnschrift, serif;
}

.logo:hover{
  color: #a85539;
}

.btn{
  cursor: pointer;
  display: inline-block;
  background-color: #9f624d;
  text-decoration: none;
  color: white;
  justify-content: space-evenly;
  justify-items: center;
  justify-self: center;
  font-weight: bold;
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
}

.btn:hover {
  color: #d79c87;
  background-color: #ffffff;
}
</style>