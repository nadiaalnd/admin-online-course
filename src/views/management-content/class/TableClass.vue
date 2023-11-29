<template>
  <VTable
    height="250"
    fixed-header
  >
    <thead>
    <tr>
      <th class="text-uppercase">
        no
      </th>
      <th class="text-uppercase text-center">
        title
      </th>
      <th class="text-uppercase text-center">
        description
      </th>
      <th class="text-uppercase text-center">
        action
      </th>
    </tr>
    </thead>

    <tbody>
    <tr
      v-for="(item, index) in classes"
      :key="item.class"
    >
      <td>
        {{ index + 1 }}
      </td>
      <td class="text-center">
        {{ item.title }}
      </td>
      <td class="text-center">
        {{ item.description }}
      </td>
      <td class="text-center">
        <ActionClass
          @open-edit-modal="openEditModal"
          @open-delete-modal="openDeleteModal"
        />
        <EditClassForm
          v-if="isEditModalOpen && item.class === editingClassId"
          @submit="handleEditSubmit"
        />
      </td>
    </tr>
    </tbody>
  </VTable>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ActionClass from '@/components/button/ActionClass.vue'
import EditClassForm from '@/components/modal/class/EditClassForm.vue'
import axios from 'axios'

const isEditModalOpen = ref(false)
const editingClassId = ref(null)
const openEditModal = (item) => {
  editingClassId.value = item.class
  isEditModalOpen.value = true
}

const classes = ref([]);
onMounted(() => {
  axios.get('http://localhost:3001/api/v1/class').then((response) => {
    const { data } = response
    classes.value = data.data
    console.log('data', data.data)
  })
})
const handleEditSubmit = () => {
  axios.get('http://localhost:3001/api/v1/class').then((response) => {
    const { data } = response
    classes.value = data.data
  })
  isEditModalOpen.value = false
}
</script>
