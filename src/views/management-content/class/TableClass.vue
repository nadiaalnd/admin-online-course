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
      v-for="item in categories"
      :key="item.category"
    >
      <td>
        {{ item.no }}
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
          v-if="isEditModalOpen"
          @submit="handleEditSubmit"
        />
      </td>
    </tr>
    </tbody>
  </VTable>
</template>

<script setup>
import ActionClass from '@/components/button/ActionClass.vue'
import EditClassForm from '@/components/modal/class/EditClassForm.vue'

const categories = [
  {
    no: 1,
    title: "Web Development",
    description: "lorem ipsum dolor sit amet",
  },
  {
    no: 2,
    title: "Android Development",
    description: "lorem ipsum dolor sit amet",
  },
  {
    no: 3,
    title: "IOS Development",
    description: "lorem ipsum dolor sit amet",
  },
  {
    no: 4,
    title: "Desktop Development",
    description: "lorem ipsum dolor sit amet",
  },
  {
    no: 5,
    title: "Machine Learning",
    description: "lorem ipsum dolor sit amet",
  },
  {
    no: 6,
    title: "UI/UX Design",
    description: "lorem ipsum dolor sit amet",
  },
  {
    no: 7,
    title: "Graphic Design",
    description: "lorem ipsum dolor sit amet",
  },
  {
    no: 8,
    title: "Data Analyst",
    description: "lorem ipsum dolor sit amet",
  }
]


</script>
