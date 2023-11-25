<template>
  <ul class="action-buttons-container">
    <li>
      <v-icon
        @click="openEditClassModal"
        style='color: #909CFF;'
      >
        mdi-pencil
      </v-icon>
    </li>
    <li>
      <v-icon
        style='color: #DE1E1E;'
      >
        mdi-delete
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
</template>

<script setup>
import { ref } from 'vue'
import EditClassForm from '@/components/modal/class/EditClassForm.vue'

const editClassModal = ref(false)
const openEditClassModal = () => {
  editClassModal.value = true
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
