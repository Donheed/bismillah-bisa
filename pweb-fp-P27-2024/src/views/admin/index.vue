<template>
  <div class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-gray-900">Data Barang</h2>

      <!-- Navigasi Tab di Atas -->
      <div class="mt-4">
        <nav class="flex space-x-4">
          <NuxtLink to="/admin" class="text-blue-500 hover:underline">Data Barang</NuxtLink>
          <NuxtLink to="/admin/all-operator" class="text-blue-500 hover:underline">Data Petugas</NuxtLink>
          <NuxtLink to="/admin/summary" class="text-blue-500 hover:underline">Data Peminjaman</NuxtLink>
        </nav>
      </div>

      <div class="mt-6 flex justify-between items-center">
        <h3 class="text-xl font-semibold">List Barang</h3>
        <button @click="showAddItemModal" class="bg-blue-500 text-white px-4 py-2 rounded-md">+ Tambah Barang</button>
      </div>

      <table class="min-w-full mt-4 bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="border px-4 py-2">No</th>
            <th class="border px-4 py-2">Nama Barang</th>
            <th class="border px-4 py-2">Jumlah</th>
            <th class="border px-4 py-2">Kondisi</th>
            <th class="border px-4 py-2">Tanggal Registrasi</th>
            <th class="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td class="border px-4 py-2">{{ index + 1 }}</td>
            <td class="border px-4 py-2">{{ item.name }}</td>
            <td class="border px-4 py-2">{{ item.amount }}</td>
            <td class="border px-4 py-2">{{ item.condition }}</td>
            <td class="border px-4 py-2">{{ new Date(item.created_at).toLocaleDateString() }}</td>
            <td class="border px-4 py-2">
              <button @click="editItem(index)" class="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Edit</button>
              <button @click="deleteItem(index)" class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Modal untuk menambah/edit barang -->
      <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/3">
          <h3 class="text-lg font-semibold">{{ isEditing ? 'Edit Barang' : 'Tambah Barang' }}</h3>
          <form @submit.prevent="isEditing ? updateItem() : addItem()">
            <div class="mb-4">
              <label for="itemName" class="block text-sm font-medium text-gray-700">Nama Barang</label>
              <input type="text" id="itemName" v-model="itemName" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div class="mb-4">
              <label for="itemQuantity" class="block text-sm font-medium text-gray-700">Jumlah</label>
              <input type="number" id="itemQuantity" v-model="itemQuantity" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div class="mb-4">
              <label for="itemCondition" class="block text-sm font-medium text-gray-700">Kondisi</label>
              <input type="text" id="itemCondition" v-model="itemCondition" required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div class="flex justify-end">
              <button type="button" @click="closeModal" class="mr-2 text-gray-500 hover:underline">Cancel</button>
              <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-md">{{ isEditing ? 'Update' : 'Add' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DUMMY_ITEMS } from '~/data/dummy/items'

const items = ref(DUMMY_ITEMS)
const itemName = ref('')
const itemQuantity = ref(0)
const itemCondition = ref('')
const isModalOpen = ref(false)
const isEditing = ref(false)
let editingIndex = ref(null)

const showAddItemModal = () => {
  isModalOpen.value = true
  isEditing.value = false
  resetForm()
}

const closeModal = () => {
  isModalOpen.value = false
}

const addItem = () => {
  items.value.push({
    name: itemName.value,
    amount: itemQuantity.value,
    condition: itemCondition.value,
    created_at: new Date()
  })
  closeModal()
}

const editItem = (index) => {
  const item = items.value[index]
  itemName.value = item.name
  itemQuantity.value = item.amount
  itemCondition.value = item.condition
  editingIndex.value = index
  isModalOpen.value = true
  isEditing.value = true
}

const updateItem = () => {
  items.value[editingIndex.value] = {
    name: itemName.value,
    amount: itemQuantity.value,
    condition: itemCondition.value,
    created_at: new Date()
  }
  closeModal()
}

const deleteItem = (index) => {
  items.value.splice(index, 1) // Hapus item dari daftar
}

const resetForm = () => {
  itemName.value = ''
  itemQuantity.value = 0
  itemCondition.value = ''
}
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>