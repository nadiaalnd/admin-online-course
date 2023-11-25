<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsAward />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsTransactions />
    </VCol>

    <VCol
      cols="12"
      md="12"
    >
      <AnalyticsWeeklyOverview />
    </VCol>
  </VRow>
</template>

<script setup>
import AnalyticsAward from '@/views/dashboard/Greeting.vue'
import AnalyticsTransactions from '@/views/dashboard/Overview.vue'
import AnalyticsWeeklyOverview from '@/views/dashboard/MonthlyOverview.vue'

const totalProfit = {
  title: 'Total Profit',
  color: 'secondary',
  icon: 'mdi-poll',
  stats: '$25.6k',
  change: 42,
  subtitle: 'Weekly Project',
}

const newProject = {
  title: 'New Project',
  color: 'primary',
  icon: 'mdi-briefcase-variant-outline',
  stats: '862',
  change: -18,
  subtitle: 'Yearly Project',
}
</script>
