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
            :image="detailLesson.thumbnail"
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
          <VForm class="mt-6" @submit.prevent="updateLesson">
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

              <!-- 👉 Class -->
              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="detailLesson.className"
                  label="Language"
                  :items="['HTML', 'PHP', 'Laravel', 'MySQL', 'Python']"
                />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn type="submit">Save changes</VBtn>

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
import axios from 'axios';

const lessonData = {
  id: "",
  title: "",
  description: "",
  link: "",
  lesson: "",
  thumbnail: "",
  className: "",
};

const refInputEl = ref();
const detailLesson = ref(structuredClone(lessonData));

const resetForm = () => {
  detailLesson.value = structuredClone(lessonData);
};

const changeAvatar = (file) => {
  const fileReader = new FileReader();
  const { files } = file.target;
  if (files && files.length) {
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') detailLesson.value.thumbnail = fileReader.result;
    };
  }
};

const resetAvatar = () => {
  detailLesson.value.thumbnail = lessonData.thumbnail;
};

const updateLesson = () => {
  const { title, description, link, className, thumbnail } = detailLesson.value;
  const updatedLesson = {
    title,
    description,
    link,
    className,
    thumbnail
  };

  axios.put(`http://localhost:3001/api/v1/lesson/${id}`, updatedLesson)
    .then((response) => {
      console.log('Lesson updated successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error updating lesson:', error);
    });
};

onMounted(() => {
  axios.get('http://localhost:3001/api/v1/lesson').then((response) => {
    const { data } = response;
    if (data && data.data && data.data.length > 0) {
      const apiLesson = data.data[0];
      detailLesson.value.id = apiLesson.id;
      detailLesson.value.title = apiLesson.title;
      detailLesson.value.description = apiLesson.description;
      detailLesson.value.link = apiLesson.link;
      detailLesson.value.className = apiLesson.className;
      detailLesson.value.thumbnail = apiLesson.thumbnail;

      console.log('Fetched lesson data:', detailLesson.value);
    }
  });
});
</script>
