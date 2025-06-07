<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const user = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const errors = reactive({
  email: '',
  password: ''
})

const router = useRouter()

const validateForm = () => {
  errors.email = ''
  errors.password = ''

  let isValid = true

  if (!user.email.includes('@')) {
    errors.email = 'Please enter a valid email address.'
    isValid = false
  }

  return isValid
}

const handleSubmit = () => {
  if (!validateForm()) return

  if (user.rememberMe) {
    localStorage.setItem('rememberedEmail', user.email)
  } else {
    localStorage.removeItem('rememberedEmail')
  }

  router.push({name : 'client-home'})
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
          <input v-model.trim="user.email"
                 class="form-control signin-email" type="email"
                 placeholder="Email address" required minlength="3" maxlength="50"/>
          <span class="text-danger" v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div class="textbox">
          <input v-model="user.password" class="form-control signin-password"
              type="password" placeholder="Password" required minlength="6" maxlength="50" />
        </div>

        <div class="form-check" style="display: flex; justify-content: flex-start">
          <input v-model="user.rememberMe" class="form-check-input" type="checkbox" id="rememberMe"/>
          <label class="form-check-label" for="rememberMe" style="margin-left: 10px">
            Remember me
          </label>
        </div>

        <input class="btn" type="submit" value="Log In"/>

        <p>Don't have an account? <a href="/auth/sign-up">Sign up</a></p>
      </div>
    </form>
  </div>
</template>

