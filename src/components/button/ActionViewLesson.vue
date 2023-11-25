<template>
  <ActionClassLink
    class="action-buttons-container"
    :item="{
      icon: 'mdi-eye-outline',
      to: '/detail',
      style:'color: #16B1FF;'
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
