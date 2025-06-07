<script setup lang="ts">

import { useAuthStore } from '@/stores/auth';
import {useRouter} from "vue-router";

const authStore = useAuthStore();
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
                <a class="nav-link" href="/guest-recipe">Recipe</a>
              </li>
              <div v-if="authStore.isLoggedIn" >
                <li class="nav-item">
                  <a class="nav-link" href="/index">Add Recipe</a>
                </li>
              </div>
              <li class="nav-item">
                <a class="nav-link" href="/blog">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About Us</a>
              </li>
            </ul>
          </div>
          <div v-if="!authStore.isLoggedIn">
            <div class="d-flex ms-auto">
              <a href="/auth/log-in" class="btn">Log In</a>
              <a href="/auth/sign-up" class="btn">Sign In</a>
            </div>
          </div>
          <div v-else>
            <div class="app-utility-item app-user-dropdown dropdown">
              <a aria-expanded="false"
                 class="dropdown-toggle d-flex align-items-center text-decoration-none"
                 data-bs-toggle="dropdown"
                 href="#"
                 id="user-dropdown-toggle"
                 role="button">
                <img alt="User Profile"
                     class="rounded-circle"
                     src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjExMjAtZWxlbWVudC0xOS5wbmc.png"
                     style="height: 30px; width: 30px; object-fit: cover; margin-right: 8px; ">
                <span class="d-none d-sm-inline">Profile</span>
              </a>
              <ul aria-labelledby="user-dropdown-toggle"
                  class="dropdown-menu dropdown-menu-end shadow"
                  style="min-width: 200px;">
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <i class="bi bi-person-circle me-2"></i> Account
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#">
                    <i class="bi bi-gear me-2"></i> Settings
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <button class="dropdown-item" @click="onLogout">
                    <i class="icon-mid bi bi-box-arrow-left me-2"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    </section>
    <br>
    <hr />
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