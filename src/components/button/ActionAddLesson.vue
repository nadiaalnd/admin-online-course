<template>
  <v-card-actions>
    <v-select
      v-model="selectedClass"
      :items="classOptions"
      label="Filter by Class"
      style="max-width: 170px;"
      density="compact"
      outlined
      dense
    ></v-select>
    <v-spacer></v-spacer>
    <router-link to="/create">
      <v-btn variant='outlined' color="primary">Tambah</v-btn>
    </router-link>
  </v-card-actions>
</template>
<script setup>
import { ref } from 'vue';

const selectedClass = ref(null);

const classOptions = [
  'HTML',
  'PHP',
];
</script>
