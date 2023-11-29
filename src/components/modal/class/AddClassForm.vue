<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="title"
          prepend-inner-icon="mdi-form-select"
          label="Nama Kelas"
          type="text"
          placeholder="Nama Kelas"
        />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="description"
          prepend-inner-icon="mdi-form-select"
          label="Deskripsi"
          type="text"
          placeholder="Deskripsi"
        />
      </v-col>
      <v-col cols="12">
        <v-btn
          type="submit"
          class="me-2"
          @click="submitForm"
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

const resetForm = () => {
  title.value = ''
  description.value = ''
}

const submitForm = async () => {
  try {
    const payload = {
      title: title.value,
      description: description.value,
    }
    const response = await axios.post('http://localhost:3001/api/v1/class', payload)
    console.log('Response:', response.data)
    resetForm()
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>
