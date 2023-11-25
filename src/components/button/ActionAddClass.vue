<template>
  <VCardText>
    <VBtn @click="openTambahModal" color="primary">Tambah</VBtn>
    <v-dialog v-model="tambahModal" max-width="600">
      <v-card>
        <v-card-title>
          Tambah Kelas
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <AddClassForm />
        </v-card-text>
      </v-card>
    </v-dialog>
  </VCardText>
</template>
<script setup>
import { ref } from 'vue'
import AddClassForm from '@/components/modal/class/AddClassForm.vue'

const tambahModal = ref(false)
const openTambahModal = () => {
  tambahModal.value = true
}
</script>
