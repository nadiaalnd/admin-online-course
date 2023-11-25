<template>
  <ActionClassLink
    class="action-buttons-container"
    :item="{
      icon: 'mdi-eye',
      to: '/detail',
      style:'color: #AE98D6;'
    }"
  />
</template>
<script setup>
import ActionClassLink from '@/components/button/ActionLessonLink.vue'
</script>

<style scoped>
.action-buttons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
  cursor: pointer;
}
</style>
