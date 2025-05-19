<script setup>
import {reactive} from 'vue'

const user = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const errors = reactive({
  email: '',
  password: ''
})

const validateForm = () => {
  errors.email = ''
  errors.password = ''

  if (!user.email.includes('@')) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,50}$/.test(form.password)) {
    errors.password = 'Password must be at least 6 characters, include letters and numbers.'
  }

  return !errors.email && !errors.password
}

const handleSubmit = () => {
  if (validateForm()) {
    // Replace this with actual API call
    console.log('Form submitted:', {...user})
    alert('Logged in!')
  }
}
</script>


<template>
  <div class="login-form">
    <form @submit.prevent="handleSubmit" class="auth-form login-form">
      <div>
        <img
            src="https://i.pinimg.com/736x/11/e2/c1/11e2c18430aec77d4ae9f1b1a7e40ec8.jpg"
            style="height: 320px; width: 300px; border-radius: 20px 0 0 20px"
        />
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
          <input
              v-model="user.password"
              class="form-control signin-password"
              type="password"
              placeholder="Password"
              required
              minlength="6"
              maxlength="50"
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,50}$"
          />
          <span class="text-danger" v-if="errors.password">{{ errors.password }}</span>
        </div>

        <div class="form-check" style="display: flex; justify-content: flex-start">
          <input v-model="user.rememberMe" class="form-check-input" type="checkbox" id="rememberMe"/>
          <label class="form-check-label" for="rememberMe" style="margin-left: 10px">
            Remember me
          </label>
        </div>

        <input class="btn" type="submit" value="Log In"/>

        <p>Don't have an account? <a href="/sign-up">Sign up</a></p>
      </div>
    </form>
  </div>
</template>


