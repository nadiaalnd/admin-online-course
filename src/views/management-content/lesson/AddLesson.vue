<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Tambah Materi">
        <VCardText class="d-flex">
          <!-- 👉 Thumbnail -->
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="addLesson.thumbnail"
          />

          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="info"
                @click="refInputEl?.click()"
              >
                <VIcon
                  icon="mdi-cloud-upload-outline"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">Choose File</span>
              </VBtn>

              <input
                ref="refInputEl"
                type="file"
                name="file"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeThumbnail"
              >

              <VBtn
                type="reset"
                color="error"
                variant="tonal"
                @click="resetThumbnail"
              >
                <span class="d-none d-sm-block">Reset</span>
                <VIcon
                  icon="mdi-refresh"
                  class="d-sm-none"
                />
              </VBtn>
              <VBtn
                color="primary"
                @click="uploadThumbnail"
              >
                Upload Thumbnail
              </VBtn>
            </div>
            <p class="text-body-1 mb-0">
              Allowed JPG or PNG. Max size of 800K
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
                  v-model="addLesson.title"
                  label="Judul Materi"
                />
              </VCol>

              <!-- 👉 Desc -->
              <VCol
                md="12"
                cols="12"
              >
                <VTextField
                  v-model="addLesson.description"
                  label="Deskripsi"
                />
              </VCol>

              <!-- 👉 videoUrl -->
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="addLesson.videoUrl"
                  label="Link"
                />
              </VCol>

              <!-- 👉 Class -->
              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="addLesson.className"
                  label="Class"
                  :items="classOptions"
                />
              </VCol>

              <!-- 👉 Form Actions -->
              <VCol
                @click="submitForm"
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn>Submit</VBtn>

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
import axios from 'axios'
import { ref, onMounted } from 'vue'

const lessonData = {
  thumbnail: null,
  title: '',
  description: '',
  videoUrl: '',
  className: '',
}

const refInputEl = ref()
const addLesson = ref(structuredClone(lessonData))
const classOptions = ref([]);
const resetForm = () => {
  addLesson.value = structuredClone(lessonData)
}
const changeThumbnail = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        addLesson.value.thumbnail = fileReader.result
    }
  }
}
const resetThumbnail = () => {
  addLesson.value.thumbnail = lessonData.thumbnail
}
const uploadThumbnail = () => {
  if (addLesson.value.thumbnail) {
    const formData = new FormData();
    formData.append('file', addLesson.value.thumbnail);

    axios.post('http://localhost:3001/api/v1/file', formData)
      .then(response => {
        console.log('Thumbnail uploaded successfully', response.data);
      })
      .catch(error => {
        console.error('Error uploading thumbnail', error);
      });
  } else {
    console.warn('No thumbnail to upload');
  }
}
const submitForm = () => {
  axios.post('http://localhost:3001/api/v1/lesson', addLesson.value)
    .then(response => {
      console.log('Lesson added successfully', response.data);
      resetForm();
    })
    .catch(error => {
      console.error('Error adding lesson', error);
    });

  if (addLesson.value.thumbnail) {
    const formData = new FormData();
    formData.append('file', addLesson.value.thumbnail);

    axios.post('http://localhost:3001/api/v1/file', formData)
      .then(response => {
        console.log('Thumbnail uploaded successfully', response.data);
      })
      .catch(error => {
        console.error('Error uploading thumbnail', error);
      });
  }
}

onMounted(() => {
  axios.get('http://localhost:3001/api/v1/class')
    .then(response => {
      console.log('API Response:', response.data);

      if (Array.isArray(response.data)) {
        classOptions.value = response.data.map(item => item.title);
        console.log('Class Options:', classOptions.value);
      } else {
        console.error('Invalid data format. Expected an array.');
      }
    })
    .catch(error => {
      console.error('Error fetching class options', error);
    });
});
</script>
