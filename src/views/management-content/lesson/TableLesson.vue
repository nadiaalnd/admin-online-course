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
          class
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
        v-for="(item, index) in lessons"
        :key="item.lesson"
      >
        <td>
          {{ index + 1 }}
        </td>
        <td class="text-center">
          {{ item.title }}
        </td>
        <td class="text-center">
          {{ item.className }}
        </td>
        <td class="text-center">
          {{ item.description }}
        </td>
        <td class="text-center">
          <ActionLesson />
        </td>
      </tr>
    </tbody>
  </VTable>
</template>

<script setup>
import ActionLesson from '@/components/button/ActionViewLesson.vue'
import axios from 'axios'

const lessons = ref([]);
onMounted(() => {
  axios.get('http://localhost:3001/api/v1/lesson').then((response) => {
    const { data } = response
    lessons.value = data.data
    console.log('data', data.data)
  })
})
</script>
