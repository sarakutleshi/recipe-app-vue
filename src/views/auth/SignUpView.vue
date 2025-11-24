<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import {useAuthStore} from "@/stores/auth.js";
import { useAppToast } from '@/composables/useAppToast.js'
import { useLoading } from "@/composables/useLoading.js"
import userService from "@/services/userService.js"

const router = useRouter()
const authStore = useAuthStore()
const toast = useAppToast()
const { isLoading, withLoading } = useLoading()

const form = reactive({
  name: { val: '', isValid: true },
  surname: { val: '', isValid: true },
  username: { val: '', isValid: true },
  email: { val: '', isValid: true },
  password: { val: '', isValid: true },
  confirmPassword: { val: '', isValid: true },
  // birthdate: { val: '', isValid: true },
  role: 'USER'
})

const formIsValid = ref(true)

const validateForm = () => {
  formIsValid.value = true
  for (const key in form) {
    if (form[key].val !== undefined && !form[key].val) {
      form[key].isValid = false
      formIsValid.value = false
    }
  }
}
//
// const validateDate = () => {
//   const date = new Date(form.birthdate.val);
//   form.birthdate.isValid = date < new Date();
//   if (!form.birthdate.isValid) {
//     toast.showWarning("Birth date must be in the past");
//   }
// }

const clearValidity = (key) => {
  form[key].isValid = true
}

const handleSubmit = async () => {
  validateForm()
  if (!formIsValid.value) {
    toast.showWarning('Please fill all fields!')
    return
  }
  if (form.password.val !== form.confirmPassword.val) {
    toast.showWarning('Passwords do not match!')
    return
  }

  const obj = {
    name: form.name.val,
    surname: form.surname.val,
    username: form.username.val,
    email: form.email.val,
    password: form.password.val,
    confirmPassword: form.confirmPassword.val,
    role: form.role
  }

  await withLoading(async () => {
    const response = await userService.registerUser(obj)
    if (response) {
      toast.showSuccess("Registration successful!")
      await router.push({name: 'login'})
    }
  })
}
</script>

<template>
  <section class="register-section vh-100 d-flex align-items-center justify-content-center">
    <div class="card shadow p-4" style="max-width: 600px; width: 100%;">
      <div class="text-center mb-4">
        <h2 class="fw-bold">Sign Up</h2>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Name</label>
            <input v-model="form.name.val" class="form-control" :class="{ 'is-invalid': !form.name.isValid }" @blur="clearValidity('name')" />
            <div class="invalid-feedback">Please enter your name.</div>
          </div>

          <div class="col-md-6">
            <label class="form-label">Surname</label>
            <input v-model="form.surname.val" class="form-control" :class="{ 'is-invalid': !form.surname.isValid }" @blur="clearValidity('surname')" />
            <div class="invalid-feedback">Please enter your last name.</div>
          </div>
          <div class="col-md-6">
            <label class="form-label">UserName</label>
            <input v-model="form.username.val" class="form-control" :class="{ 'is-invalid': !form.username.isValid }" @blur="clearValidity('username')" />
            <div class="invalid-feedback">Please enter username.</div>
          </div>

          <div class="col-md-6">
            <label class="form-label">Email</label>
            <input type="email" v-model="form.email.val" class="form-control" :class="{ 'is-invalid': !form.email.isValid }" @blur="clearValidity('email')" />
            <div class="invalid-feedback">Please enter a valid email address.</div>
          </div>

          <div class="col-md-6">
            <label class="form-label">Password</label>
            <input type="password" v-model="form.password.val" class="form-control" :class="{ 'is-invalid': !form.password.isValid }" @blur="clearValidity('password')" />
            <div class="invalid-feedback">Please enter a password.</div>
          </div>

          <div class="col-md-6">
            <label class="form-label">Confirm Password</label>
            <input type="password" v-model="form.confirmPassword.val" class="form-control" :class="{ 'is-invalid': !form.confirmPassword.isValid }" @blur="clearValidity('confirmPassword')" />
            <div class="invalid-feedback">Please confirm your password.</div>
          </div>

<!--          <div class="col-md-6">-->
<!--            <label class="form-label">Birth Date</label>-->
<!--            <input-->
<!--                type="date"-->
<!--                v-model="form.birthdate.val"-->
<!--                @change="validateDate"-->
<!--                :max="new Date().toISOString().split('T')[0]"-->
<!--            >            <div class="invalid-feedback">Please enter your birth date.</div>-->
<!--          </div>-->

        </div>

        <div class="d-grid mt-4">
          <button type="submit" class="btn btn-primary btn-lg" :disabled="isLoading">Sign Up</button>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-3">
          <span class="text-muted">Already have an account?
            <router-link to="/auth/log-in" class="text-decoration-none">Login</router-link>
          </span>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.register-section {
  background: linear-gradient(to bottom right, #e0eafc, #cfdef3);
}
.card {
  border-radius: 1rem;
}
</style>