<template>
  <ul class="action-buttons-container">
    <li>
      <v-icon
        @click="openEditClassModal"
        style='color: #FFB400;'
      >
        mdi-pencil-outline
      </v-icon>
    </li>
    <li>
      <v-icon
        @click="deleteOpenModal"
        style='color: #FF4C51;'
      >
        mdi-delete-outline
      </v-icon>
    </li>
  </ul>
  <v-dialog v-model="editClassModal" max-width="600">
    <v-card>
      <v-card-title>
        Edit Kelas
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <EditClassForm />
      </v-card-text>
    </v-card>
  </v-dialog>

  <!-- Modal -->
  <v-dialog v-model="confirmDeleteModal" max-width="400">
    <v-card>
      <v-card-title>Hapus Kelas</v-card-title>
      <v-card-text>
        Apakah Anda yakin ingin menghapus kelas ini?
      </v-card-text>
      <v-card-actions>
        <v-btn @click="confirmDeleteClass">Ya</v-btn>
        <v-btn @click="cancelDelete">Batal</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-snackbar v-model="snackbar.show" :color="snackbar.color">
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import EditClassForm from '@/components/modal/class/EditClassForm.vue'

const editClassModal = ref(false)
const confirmDeleteModal = ref(false)
const classIdToDelete = ref(null)
const snackbar = ref({ show: false, message: '', color: '' })

const openEditClassModal = () => {
  editClassModal.value = true
}
const deleteOpenModal = (id) => {
  console.log('Deleting class with ID:', id);
  classIdToDelete.value = id
  confirmDeleteModal.value = true
}
const confirmDeleteClass = async () => {
  console.log('Deleting class with ID:', classIdToDelete.value);

  if (classIdToDelete.value) {
    try {
      const response = await axios.delete(`http://localhost:3001/api/v1/class/${classIdToDelete.value}`);
      console.log('Response:', response.data);
      showSnackbar('Kelas berhasil dihapus', 'success');
      confirmDeleteModal.value = false;
      editClassModal.value = false;
    } catch (error) {
      console.error('Error deleting class:', error);
      console.log('Error from server:', error.response.data);
      showSnackbar('Gagal menghapus kelas', 'error');
    }
  }
};
const cancelDelete = () => {
  confirmDeleteModal.value = false
}
const showSnackbar = (message, color) => {
  snackbar.value = { show: true, message, color }
  setTimeout(() => {
    snackbar.value.show = false
  }, 3000)
}
</script>

<style scoped>
.action-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  cursor: pointer;
}
</style>
