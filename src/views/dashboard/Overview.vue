<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Overview</VCardTitle>

      <template #append>
        <div class="me-n3">
          <MoreBtn />
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          sm="3"
        >
          <div class="d-flex align-center">
            <div class="me-3">
              <VAvatar
                :color="item.color"
                rounded
                size="42"
                class="elevation-1"
              >
                <VIcon
                  size="24"
                  :icon="item.icon"
                />
              </VAvatar>
            </div>

            <div class="d-flex flex-column">
              <span class="text-caption">
                {{ item.title }}
              </span>
              <span class="text-body-1 font-weight-bold">{{ item.stats }}</span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>

<script setup>
const statistics = [
  {
    title: 'Engagement',
    stats: '24K',
    icon: 'mdi-trending-up',
    color: 'primary',
  },
  {
    title: 'Mentor',
    stats: '173',
    icon: 'mdi-account-outline',
    color: 'success',
  },
  {
    title: 'Members',
    stats: '1.54K',
    icon: 'mdi-cellphone-link',
    color: 'warning',
  },
  {
    title: 'Income',
    stats: 'Rp 22M',
    icon: 'mdi-currency-usd',
    color: 'info',
  },
]
</script>
