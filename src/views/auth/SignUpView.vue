<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const maxDate = ref(new Date().toISOString().split('T')[0]); // "YYYY-MM-DD"

const form = reactive({
  name: '',
  surname: '',
  birthdate: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
});

const loading = ref(false);

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function handleSubmit() {
  if (loading.value) return;

  if (
      !form.name ||
      !form.surname ||
      !form.birthdate ||
      !form.email ||
      !form.username ||
      !form.password ||
      !form.confirmPassword
  ) {
    alert('Please fill in all required fields.');
    return;
  }

  if (!isValidEmail(form.email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (form.password !== form.confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  if (!form.acceptTerms) {
    alert('You must accept the terms and conditions.');
    return;
  }

  loading.value = true;

  try {
    const response = await axios.post('http://localhost:8080/api/v1/auth/sign-up', form);
    alert(response.data); // Assuming the backend sends a success message
    await router.push({ name: 'login' });
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    alert(error.response?.data || 'Registration failed.');
  } finally {
    loading.value = false;
  }
}
</script>


<template>
  <div class="signup-form" style="display: flex">
    <div>
      <img src="https://i.pinimg.com/736x/0f/17/48/0f1748b05384a148c377b89d4244defb.jpg"
           style="height: 655px; width: 550px; border-radius: 20px 0 0 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"
      />
    </div>

    <div class="form-box">
      <div class="auth-form-container text-start mx-auto">
        <form @submit.prevent="handleSubmit" class="auth-form auth-signup-form">
          <div class="email mb-3">
            <input
                class="form-control signup-name" placeholder="Name"
                v-model="form.name" required type="text"/>
          </div>

          <div class="email mb-3">
            <input class="form-control signup-name" placeholder="Surname"
                v-model="form.surname" required type="text"/>
          </div>

          <div class="email mb-3">
            <label>Birthdate</label>
            <input class="form-control signup-name" placeholder="Birthday"
                v-model="form.birthdate" type="date"
                :max="maxDate" min="1950-01-01" required/>
<!--            <input type="date" v-model="form.birthdate" :max="maxDate" />
-->
          </div>

          <div class="email mb-3">
            <input class="form-control signup-email" placeholder="Email"
                v-model="form.email" required type="email"/>
          </div>

          <div class="email mb-3">
            <input class="form-control signup-email" placeholder="Username"
                v-model="form.username" required type="text"/>
          </div>

          <div class="password mb-3">
            <input class="form-control signup-password" placeholder="Create a password"
                v-model="form.password" required type="password"/>
          </div>

          <div class="password mb-3">
            <input class="form-control signup-password" placeholder="Confirm password"
                v-model="form.confirmPassword" required type="password"/>
          </div>

          <div class="extra mb-3">
            <div class="form-check">
              <input class="form-check-input" type="checkbox"
                  v-model="form.acceptTerms" required/>
              <label class="form-check-label">I agree to Portal's
                <a class="app-link" href="#">Terms of Service</a> and
                <a class="app-link" href="#">Privacy Policy</a>.
              </label>
            </div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>

        <div class="auth-option text-center pt-5">
          Already have an account?
          <a class="text-link" href="/auth/log-in">Log in</a>
        </div>
      </div>
    </div>
  </div>
</template>