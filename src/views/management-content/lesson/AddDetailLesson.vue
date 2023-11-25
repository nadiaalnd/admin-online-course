<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Detail Materi">
        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="detailLesson.avatarImg"
          />

          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="refInputEl?.click()"
              >
                <VIcon
                  icon="mdi-cloud-upload-outline"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">Upload new thumbnail</span>
              </VBtn>

              <input
                ref="refInputEl"
                type="file"
                name="file"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeAvatar"
              >

              <VBtn
                type="reset"
                color="error"
                variant="tonal"
                @click="resetAvatar"
              >
                <span class="d-none d-sm-block">Reset</span>
                <VIcon
                  icon="mdi-refresh"
                  class="d-sm-none"
                />
              </VBtn>
            </div>

            <p class="text-body-1 mb-0">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </form>
        </VCardText>

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- 👉 Title -->
              <VCol
                md="12"
                cols="12"
              >
                <VTextField
                  v-model="detailLesson.title"
                  label="Judul Materi"
                />
              </VCol>

              <!-- 👉 Desc -->
              <VCol
                md="12"
                cols="12"
              >
                <VTextField
                  v-model="detailLesson.description"
                  label="Deskripsi"
                />
              </VCol>

              <!-- 👉 Link -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="detailLesson.link"
                  label="Link"
                />
              </VCol>

              <!-- 👉 Language -->
              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="detailLesson.lesson"
                  label="Language"
                  :items="['HTML', 'PHP', 'Laravel', 'MySQL', 'Pyhton']"
                />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn>Save changes</VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                  @click.prevent="resetForm"
                >
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const lessonData = {
  avatarImg: avatar1,
  title: 'HTML - Basic',
  description: 'Materi HTML dasar',
  link: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
  lesson: 'HTML',
}

const refInputEl = ref()
const detailLesson = ref(structuredClone(lessonData))

const resetForm = () => {
  detailLesson.value = structuredClone(lessonData)
}

const changeAvatar = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        detailLesson.value.avatarImg = fileReader.result
    }
  }
}

const resetAvatar = () => {
  detailLesson.value.avatarImg = lessonData.avatarImg
}
</script>
