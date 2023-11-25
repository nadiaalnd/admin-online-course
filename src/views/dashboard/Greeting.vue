<template>
  <VCard
    :title="greeting"
    subtitle="Welcome to the command center"
    class="position-relative"
  >
    <VCardText>
      <p class="text-body-2 font-weight-medium text-primary">
        Every click is a step towards<br>success
      </p>
      <p>Enjoy exploring🚀</p>
    </VCardText>

    <!-- Triangle Background -->
    <VImg
      :src="triangleBg"
      class="triangle-bg flip-in-rtl"
    />

    <!-- Trophy -->
    <VImg
      :src="avatar"
      class="avatar"
    />
  </VCard>
</template>

<script setup>
import triangleDark from '@images/misc/triangle-dark.png'
import triangleLight from '@images/misc/triangle-light.png'
import avatar from '@images/avatars/avatar-9.png'
import { useTheme } from 'vuetify'

const { global } = useTheme()
const triangleBg = computed(() => global.name.value === 'light' ? triangleLight : triangleDark)

const isDaytime = ref(true) // Adjust this based on your logic for determining day/night
const currentHour = new Date().getHours()
isDaytime.value = currentHour >= 6 && currentHour < 18

const greeting = computed(() => {
  if (isDaytime.value) {
    if (currentHour >= 6 && currentHour < 12) {
      return 'Good Morning! 🌥️'
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good Afternoon! 🌞'
    } else {
      return 'Good Evening! 🌝'
    }
  } else {
    return 'Good Night! 🌛'
  }
})
</script>

<style lang="scss">
@use "@layouts/styles/mixins" as layoutsMixins;

.v-card .triangle-bg {
  position: absolute;
  inline-size: 10.375rem;
  inset-block-end: 0;
  inset-inline-end: 0;
}

.v-card .avatar {
  position: absolute;
  inline-size: 5rem;
  inset-block-end: 0rem;
  inset-inline-end: 1rem;
}
</style>
