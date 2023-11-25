<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="name"
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
          @click.prevent="$emit('submit', { name, description })"
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

const name = ref('')
const description = ref('')

const resetForm = () => {
  name.value = ''
  description.value = ''
}
</script>
