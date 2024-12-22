<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar">
      <router-link to="/" class="navbar-item">Lab KCKS</router-link>
      <div class="spacer"></div>
      
      <!-- Menampilkan nama pengguna setelah login -->
      <div v-if="username" class="navbar-item">
        Welcome, {{ username }}
      </div>

      <!-- Menampilkan tombol Log Out jika sudah login -->
      <div v-if="username" @click="logout" class="navbar-item logout">
        Log Out
      </div>

      <router-link to="/rules" class="navbar-item">Aturan & Alur</router-link>
    </nav>

    <!-- Tempat untuk menampilkan halaman berdasarkan router -->
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref<string | null>(null);

// Ambil data authToken dari localStorage dan ekstrak username
onMounted(() => {
  const authToken = localStorage.getItem('authToken'); // Ambil token auth dari localStorage
  if (authToken) {
    const userData = JSON.parse(authToken); // Mengubah string JSON menjadi objek
    console.log("Data pengguna dari localStorage:", userData); // Debugging: Cek data yang ada di localStorage
    username.value = userData.username; // Ambil username
  }
});

// Fungsi untuk logout
const logout = () => {
  // Hapus data authToken dari localStorage
  localStorage.removeItem('authToken');
  
  // Set username ke null
  username.value = null;
  
  // Arahkan pengguna kembali ke halaman login
  router.push('/'); // Pastikan Anda sudah memiliki route ke halaman login
};
</script>

<style scoped>
/* Style untuk navbar */
#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
}

.navbar-item {
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

/* Spacer untuk mengisi ruang kosong di tengah */
.spacer {
  flex-grow: 1;
}

/* Hover effect untuk navbar items */
.navbar-item:hover {
  background-color: #0056b3;
  border-radius: 5px;
}

/* Style untuk tombol logout */
.logout {
  cursor: pointer;
  color: white;
}

.logout:hover {
  background-color: white;
}
</style>
