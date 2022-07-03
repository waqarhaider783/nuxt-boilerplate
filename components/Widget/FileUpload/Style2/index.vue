<template>
  <div class="imagePicker">
    <div class="imagePicker__wrapper">
      <div v-for="(file, index) in files" :key="index">
        <picture>
          <img
            :src="
              readURL(file) ||
              'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
            "
            :alt="index"
          />
        </picture>
      </div>

      <div class="imagePicker__uploader" @click="clickInput">
        <div class="imagePicker__icon">
          <font-awesome-icon :icon="['fa', 'plus']" />
        </div>

        <input
          ref="fileInput"
          type="file"
          name="fileInput"
          accept="image/png, image/jpeg"
          multiple
          hidden
          @change="(e) => handleInputChange(e)"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FileUploadStyle2',

  // props: {
  //   images: {
  //     type: Array,
  //     required: true,
  //   },
  // },

  data() {
    return {
      files: [],
    }
  },

  // created() {
  //   this.files = [...this.images, ...this.files]
  // },

  methods: {
    clickInput() {
      this.$refs.fileInput.click()
    },

    handleInputChange(e) {
      e.target.files.forEach((x) => {
        if (!this.files.find((y) => y?.name === x?.name)) {
          this.files.push(x)
        }
      })
    },

    readURL(file) {
      const reader = new FileReader()
      const src = reader.readAsDataURL(file)
      const src2 = URL.createObjectURL(file)
      console.log(src)
      console.log(src2)
      return src2
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
