<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Kelas">
        <ActionAddCategory />
        <TableCategory />
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import TableCategory from '@/views/management-content/class/TableClass.vue'
import ActionAddCategory from '@/components/button/ActionAddClass.vue'

</script>
