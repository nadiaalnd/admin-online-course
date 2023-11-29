<template>
  <v-form>
    <v-row @submit="submitForm">
      <v-col cols="12">
        <v-text-field
          v-model="title"
          prepend-inner-icon="mdi-form-select"
          label="Nama Kelas"
          type="text"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="description"
          prepend-inner-icon="mdi-form-select"
          label="Deskripsi"
          type="text"
        />
      </v-col>
      <v-col cols="12">
        <v-btn
          type="submit"
          class="me-2"
        >
          Submit
        </v-btn>
        <v-btn
          color="secondary"
          type="reset"
          variant="tonal"
          @click="resetForm"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const title = ref('')
const description = ref('')
const id = ref('')

const resetForm = () => {
  title.value = ''
  description.value = ''
  id.value = ''
}
const submitForm = async() => {
  try {
    const response = await axios.patch('http://localhost:3001/api/v1/class/${id.value}', {
      title: title.value,
      description: description.value,
    })
  } catch (error) {
    console.log('Error updating class', error)
  }
}
</script>
