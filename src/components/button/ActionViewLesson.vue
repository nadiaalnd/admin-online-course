<template>
  <ul class="action-buttons-container">
    <li>
      <ActionClassLink
        class="action-buttons-container"
        :item="{
      icon: 'mdi-eye-outline',
      to: '/detail',
      style:'color: #16B1FF;'
    }"
      />
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

  <!-- Modal -->
  <v-dialog v-model="confirmDeleteModal" max-width="400">
    <v-card>
      <v-card-title>Hapus Materi</v-card-title>
      <v-card-text>
        Apakah Anda yakin ingin menghapus materi ini?
      </v-card-text>
      <v-card-actions>
        <v-btn @click="confirmDeleteLesson">Ya</v-btn>
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
import ActionClassLink from '@/components/button/ActionLessonLink.vue'

const editClassModal = ref(false)
const confirmDeleteModal = ref(false)
const classIdToDelete = ref(null)
const snackbar = ref({ show: false, message: '', color: '' })

const deleteOpenModal = (id) => {
  console.log('Deleting lesson with ID:', id);
  classIdToDelete.value = id
  confirmDeleteModal.value = true
}
const confirmDeleteLesson = async () => {
  console.log('Deleting lesson with ID:', classIdToDelete.value);

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
      showSnackbar('Gagal menghapus materi', 'error');
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
