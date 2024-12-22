<template>
    <div class="rules-page">
      <h1>Aturan & Alur Peminjaman</h1>
      <p class="intro-text">Panduan lengkap untuk meminjam peralatan di Lab KCKS</p>
  
      <div class="rules-cards">
        <!-- Card 1: Aturan Peminjaman -->
        <div class="card">
          <h2>1. Aturan Peminjaman</h2>
          <p>
            Pengajuan Peminjaman: Mahasiswa harus mengajukan peminjaman melalui petugas laboratorium dengan membawa kartu identitas yang valid.
          </p>
        </div>
  
        <!-- Card 2: Durasi Peminjaman -->
        <div class="card">
          <h2>2. Durasi Peminjaman</h2>
          <p>
            Peminjaman maksimal 7 hari kerja. Perpanjangan harus diajukan sebelum batas waktu pengembalian.
          </p>
        </div>
  
        <!-- Card 3: Verifikasi Petugas -->
        <div class="card">
          <h2>3. Verifikasi Petugas</h2>
          <p>
            Setiap peminjaman harus diverifikasi dan dicatat oleh petugas laboratorium yang bertugas.
          </p>
        </div>
  
        <!-- Card 4: Tanggung Jawab -->
        <div class="card">
          <h2>4. Tanggung Jawab</h2>
          <p>
            Peminjam bertanggung jawab penuh atas kondisi barang dan harus mengganti jika terjadi kerusakan.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  // Script kosong karena konten halaman bersifat statis
  </script>
  
  <style scoped>
body {
    background-color:white;
  }

  .rules-page {
    padding:130px 80px 250px 80px;
    font-family: Arial, sans-serif;
    background-color: white;
  }
  
  .rules-page h1 {
    color: black;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .intro-text {
    color: black;
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
  
  .rules-cards {
    background-color: white;
    color: black;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Membuat dua kolom */
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .card {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: left;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .card h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 1rem;
    color: #000000;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  </style>
  