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
          thumbnail
        </th>
        <th class="text-uppercase text-center">
          class
        </th>
        <th class="text-uppercase text-center">
          action
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in classes"
        :key="item.class"
      >
        <td>
          {{ item.no }}
        </td>
        <td class="text-center">
          {{ item.title }}
        </td>
        <td class="text-center">
          {{ item.thumbnail }}
        </td>
        <td class="text-center">
          {{ item.class }}
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

const classes = [
  {
    no: 1,
    title: "HTML - Introduction",
    thumbnail: "img.png",
    class: "HTML",
  },
  {
    no: 2,
    title: "HTML - Basic",
    thumbnail: "img.png",
    class: 'HTML',
  },
  {
    no: 3,
    title: "HTML - Advance",
    thumbnail: "img.png",
    class: "HTML",
  },
  {
    no: 4,
    title: "PHP - Introduction",
    thumbnail: "img.png",
    class: "PHP",
  },
  {
    no: 5,
    title: "PHP - Basic",
    thumbnail: "img.png",
    class: "PHP",
  },
  {
    no: 6,
    title: "PHP - OOP",
    thumbnail: "img.png",
    class: "PHP",
  }
]
</script>
