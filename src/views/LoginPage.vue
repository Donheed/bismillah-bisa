<template>
    <div class="login-page">
      <form @submit.prevent="handleLogin">
        <h1>Login</h1>
        <div>
          <label for="email">Username:</label>
          <input
            type="text"
            id="email"
            v-model="form.username"
            required
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
          />
        </div>
        <div>
          <label for="role">Role:</label>
          <select id="role" v-model="form.role" required>
            <option value="" disabled>Pilih Role</option>
            <option value="admin">Admin</option>
            <option value="operator">Operator</option>
          </select>
        </div>
        <button type="submit">Login</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  // User database
  const validUsers = [
    { id: "1", username: "andre", password: "andre123", role: "admin" },
    { id: "2", username: "jiki", password: "jiki123", role: "operator" },
  ];
  
  // Reactive form data
  const form = ref({
    username: "",
    password: "",
    role: "",
  });
  
  // Error message for invalid login attempts
  const errorMessage = ref("");
  
  // Router instance to redirect after login
  const router = useRouter();
  
  // Generate a unique token
  const generateToken = (): string => {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  };
  
  // Handle login
  const handleLogin = () => {
    console.log('Form Values:', form.value); // Log form values
  
    // Check if the user exists in the database
    const user = validUsers.find(
      (u) =>
        u.username === form.value.username &&
        u.password === form.value.password &&
        u.role === form.value.role
    );
  
    console.log('User found:', user); // Log the found user
  
    if (user) {
      // Generate a unique token
      const token = generateToken();
  
      // Save user data and token to localStorage
      const userData = { ...user, token };
      localStorage.setItem("authToken", JSON.stringify(userData));
  
      // Redirect based on role
      if (user.role === "admin") {
        router.push("/admin");
      } else if (user.role === "operator") {
        router.push("/operator");
      }
  
      // Clear the form and error message
      form.value.username = "";
      form.value.password = "";
      form.value.role = "";
      errorMessage.value = "";
    } else {
      // Show error message
      errorMessage.value = "Login gagal! Periksa kembali data Anda.";
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  form {
    color: black;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  
  form h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form div {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
    margin-top: 10px;
    text-align: center;
  }
  </style>
  