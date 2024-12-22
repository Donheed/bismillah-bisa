<template>
  <div class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900">Data Peminjaman</h2>

      <!-- Navigasi Tab di Atas -->
      <div class="mt-4">
        <nav class="flex space-x-4">
          <NuxtLink to="/admin" class="text-blue-500 hover:underline">Data Barang</NuxtLink>
          <NuxtLink to="/admin/all-operator" class="text-blue-500 hover:underline">Data Petugas</NuxtLink>
          <NuxtLink to="/admin/summary" class="text-blue-500 hover:underline">Data Peminjaman</NuxtLink>
        </nav>
      </div>

      <!-- Filter Tanggal -->
      <div class="mt-6 flex space-x-4">
        <div>
          <label for="startDate" class="block text-sm font-medium text-gray-700">Start Date</label>
          <input type="date" id="startDate" v-model="startDate" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label for="endDate" class="block text-sm font-medium text-gray-700">End Date</label>
          <input type="date" id="endDate" v-model="endDate" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label for="searchBorrower" class="block text-sm font-medium text-gray-700">Search Borrower</label>
          <input type="text" id="searchBorrower" v-model="searchBorrower" placeholder="Enter borrower name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <button @click="downloadPDF" class="bg-blue-500 text-white px-4 py-2 rounded-md">Download PDF</button>
      </div>

      <div ref="pdfContent" class="mt-6">
        <table class="min-w-full mt-4 bg-white border border-gray-300">
          <thead>
            <tr>
              <th class="border px-4 py-2">No</th>
              <th class="border px-4 py-2">Nama Barang</th>
              <th class="border px-4 py-2">Jumlah Pinjam</th>
              <th class="border px-4 py-2">Tgl. Pinjam</th>
              <th class="border px-4 py-2">Tgl. Kembali</th>
              <th class="border px-4 py-2">Peminjam</th>
              <th class="border px-4 py-2">Petugas</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(loan, index) in filteredLoans" :key="index">
              <td class="border px-4 py-2">{{ index + 1 }}</td>
              <td class="border px-4 py-2">{{ loan.itemName }}</td>
              <td class="border px-4 py-2">{{ loan.amount }}</td>
              <td class="border px-4 py-2">{{ loan.borrowDate }}</td>
              <td class="border px-4 py-2">{{ loan.returnDate }}</td>
              <td class="border px-4 py-2">{{ loan.borrower }}</td>
              <td class="border px-4 py-2">{{ loan.officer }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import html2pdf from 'html2pdf.js'

const loans = ref([
  { itemName: 'ESP 32 Wroom 32UE', amount: 1, borrowDate: '17/7/2024', returnDate: '17/8/2024', borrower: 'Jiki', officer: 'Dani' },
  { itemName: 'Raspberry PI', amount: 1, borrowDate: '17/8/2024', returnDate: '17/12/2024', borrower: 'Malvin', officer: 'Andre' }
])

const startDate = ref('')
const endDate = ref('')
const searchBorrower = ref('')

const filteredLoans = computed(() => {
  return loans.value.filter(loan => {
    const matchesDate = (!startDate.value || new Date(loan.borrowDate) >= new Date(startDate.value)) &&
                        (!endDate.value || new Date(loan.borrowDate) <= new Date(endDate.value));
    const matchesBorrower = loan.borrower.toLowerCase().includes(searchBorrower.value.toLowerCase());
    return matchesDate && matchesBorrower;
  });
});

const downloadPDF = () => {
  const element = document.querySelector('div[ref="pdfContent"]');
  const opt = {
    margin:       1,
    filename:     'Data_Peminjaman.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save();
}
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>