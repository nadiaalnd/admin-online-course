<template>
  <VBtn @click="openAddDetailLesson">Tambah</VBtn>
</template>

<script setup>
import { useRouter } from 'vue-router'

const openAddDetailLesson = () => {
  const router = useRouter()
  router.push('/add-lesson')
}
</script>
