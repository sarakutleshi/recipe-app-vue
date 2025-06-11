<script setup>
import {useAuthStore} from '@/stores/auth.js'
import {useRouter} from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const onLogout = () => {
  authStore.logOut();
  router.push({name: 'guest-home'})
}
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
                <a class="nav-link" href="/view-recipe">Recipe</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/index">Add Yours</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About Us</a>
              </li>
            </ul>
          </div>


        </div>
      </nav>
    </section>
    <br>
    <hr/>
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

body {
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

.logo {
  margin-right: 100px;
  color: #b66b51;
  font-size: xxx-large;
  font-family: Bahnschrift, serif;
}

.logo:hover {
  color: #a85539;
}
</style>