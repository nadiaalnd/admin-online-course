<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Kelas">
        <VCardText>
          <ActionAddLesson/>
        </VCardText>
        <TableLesson/>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import TableLesson from '@/views/management-content/lesson/TableLesson.vue'
import ActionAddLesson from '@/components/button/ActionAddLesson.vue'
</script>
