<script setup>
import {useRoute, useRouter} from "vue-router";
import {useAuthStore} from "@/stores/auth.js";
import {reactive, ref} from "vue";
import {useAppToast} from "@/composables/useAppToast.js";

const router = useRouter()
const route = useRoute();
const authStore = useAuthStore();
const toast = useAppToast()

const user = reactive({
  email: '',
  password: ''
})
const isLoading = ref(false)

const handleSubmit = async () => {
  if (!user.email || !user.password) {
    toast.showWarning("Please fill all fields!");
    return
  }
  try {
    isLoading.value = true
    const response = await authStore.logIn(user)
    const redirect = route.query.redirect || {name: 'user-home'}
    await router.push(redirect)

  } catch (error) {
    toast.showError(error.response?.data?.message || "An error has occurred!");
    console.log(error)
  } finally {
    isLoading.value = false
  }
}
</script>


<template>
  <div class="login-form">
    <form @submit.prevent="handleSubmit" class="auth-form login-form">
      <div>
        <img
            src="https://i.pinimg.com/736x/11/e2/c1/11e2c18430aec77d4ae9f1b1a7e40ec8.jpg"
            style="height: 320px; width: 300px; border-radius: 20px 0 0 20px"/>
      </div>
      <div class="form-box">
        <h2>Login</h2>

        <div class="textbox">
          <label for="email"></label>
          <input v-model.trim="user.email"
                 class="form-control signin-email"
                 type="email"
                 placeholder="Enter a valid email address"
                 required
                 minlength="3"
                 maxlength="50"/>
        </div>

        <div class="textbox">
          <label for="password"></label>
          <input v-model="user.password"
                 class="form-control signin-password"
                 type="password"
                 placeholder="Enter Password"
                 required
                 minlength="6"
                 maxlength="50"/>
        </div>

        <div class="d-grid">
          <button type="submit" class="btn">Login</button>
        </div>
        <p>Don't have an account? <a href="/auth/sign-up">Sign up</a></p>
      </div>
    </form>
  </div>
</template>

