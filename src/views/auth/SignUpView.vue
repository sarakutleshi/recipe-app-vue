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
                :max="maxDate" min="1900-01-01" required/>
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
          <router-link class="text-link" to="/log-in">Log in</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        surname: '',
        birthdate: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
      },
    };
  },
  methods: {
    async handleSubmit() {
      console.log("Form submitted:", this.form);

      // Simple client-side check
      if (this.form.password !== this.form.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      try {
        const response = await axios.post('http://localhost:8080/sign-up', this.form);
        alert(response.data); // Backend should return success message
        this.$router.push('/log-in'); // Or use `window.location.href = '/log-in'`
      } catch (error) {
        console.error("Registration error:", error.response?.data || error.message);
        alert(error.response?.data || "Registration failed");
      }
    },
  },
};

</script>
