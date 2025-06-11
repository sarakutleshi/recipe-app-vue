<template>
  <div class="subscribe" style="background-color: #dab7a9">
    <label class="subscribe-label" style="background-color: #dab7a9">
      Let's Stay In Touch!
    </label>
    <p class="subscribe-paragraph" style="background-color: #dab7a9">
      Join our newsletter, so that we reach out to you with our news and offers.
    </p>
    <div class="input-container" style="background-color: #dab7a9">
      <input type="email" class="subscribe-input" placeholder="Write your Email Here">
    </div>
    <button class="subscribe-button">Submit</button>
  </div>
  <footer style="background-color:#E89A7EFF; color:#170d0d; padding:20px; text-align:center;
height: 380px">
    <div style="max-width: 1200px; margin: 80px auto auto;">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-evenly; background-color: #E89A7EFF;">

        <div style="flex: 1; text-align:left; background-color: #E89A7EFF;">
          <h2 style="background-color: #E89A7EFF;">RecipeApp</h2>
          <p style="background-color: #E89A7EFF;">Your one-stop destination for delicious recipes</p>
        </div>

        <!-- Quick Links -->
        <div style="flex: 1; text-align:left; background-color: #E89A7EFF;">
          <h4 style="background-color: #E89A7EFF;">Quick Links</h4>
          <ul style="list-style-type:none; padding:0; background-color: #E89A7EFF; color: #170d0d;">
            <li style="background-color: #E89A7EFF;"><a href="/user-home"
                                                        style="color:#170d0d; background-color: #E89A7EFF; text-decoration:none;">Home</a>
            </li>
            <li style="background-color: #E89A7EFF;"><a href="/recipe"
                                                        style="color:#170d0d; background-color: #E89A7EFF; text-decoration:none;">Recipes</a>
            </li>
            <li style="background-color: #E89A7EFF;"><a href="/about"
                                                        style="color:#170d0d; background-color: #E89A7EFF; text-decoration:none;">About</a>
            </li>
            <li style="background-color: #E89A7EFF;"><a href="/index"
                                                        style="color:#170d0d; background-color: #E89A7EFF; text-decoration:none;">Add Yours</a>
            </li>
            <li style="background-color: #E89A7EFF;"><a href="/blog"
                                                        style="color:#170d0d; background-color: #E89A7EFF; text-decoration:none;">Blog</a>
            </li>
          </ul>
        </div>

        <!-- Social Media Icons -->
        <div style="flex: 1; text-align:left; background-color: #E89A7EFF;">
          <h4 style="background-color: #E89A7EFF;">Follow Us</h4>
          <ul style="list-style-type:none; padding:0; background-color: #E89A7EFF;">
            <li style="background-color: #E89A7EFF;"><a href="https://facebook.com" target="_blank"
                                                        style="color:#170d0d; background-color: #E89A7EFF; text-decoration:none;">Facebook</a>
            </li>
            <li style="background-color: #E89A7EFF;"><a href="https://instagram.com" target="_blank"
                                                        style="color:#170d0d; background-color: #E89A7EFF; text-decoration:none;">Instagram</a>
            </li>
            <li style="background-color: #E89A7EFF;"><a href="https://twitter.com" target="_blank"
                                                        style="color:#170d0d; background-color: #E89A7EFF; text-decoration:none;">Twitter</a>
            </li>
            <li style="background-color: #E89A7EFF;"><a href="https://pinterest.com" target="_blank"
                                                        style="color:#170d0d; background-color: #E89A7EFF; text-decoration:none;">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
      <p style="background-color: #E89A7EFF; color: #170d0d;">&copy; 2024 RecipeApp. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.subscribe {
  background-color: #dab7a9;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: max();
  margin: 20px auto auto;
}

.subscribe-label {
  display: block;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #4b2e2e;
}

.subscribe-paragraph {
  font-size: 1rem;
  color: #4b2e2e;
  margin-bottom: 1rem;
}

.subscribe-input {
  padding: 0.6rem;
  width: 80%;
  max-width: 350px;
  border: 1px solid #aaa;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.subscribe-button {
  background-color: #a76c5e;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.subscribe-button:hover {
  background-color: #8c5a4e;
}
</style>