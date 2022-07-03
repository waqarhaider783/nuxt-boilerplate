<template>
  <div
    class="fileUpload"
    @drop="(e) => dropHandler(e)"
    @dragover="(e) => dragOverHandler(e)"
  >
    <div class="fileUpload__wrapper">
      <div class="fileUpload__dragArea" @click="clickInput">
        <div class="fileUpload__dragArea__logo">
          <font-awesome-icon :icon="['fa', 'upload']" />
        </div>
        <div class="fileUpload__dragArea__text">Click or drag to upload</div>
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
</template>
<script>
export default {
  name: 'FileUploadStyle1',

  data() {
    return {
      files: [],
    }
  },

  watch: {
    files(value) {
      this.$emit('on-change', value)
    },
  },

  methods: {
    clickInput() {
      this.$refs.fileInput.click()
    },

    dropHandler(e) {
      e.preventDefault()

      if (e.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
          // If dropped items aren't files, reject them
          if (
            e.dataTransfer.items[i].kind === 'file' &&
            (e.dataTransfer.items[i].type === 'image/png' ||
              e.dataTransfer.items[i].type === 'image/jpeg')
          ) {
            if (
              !this?.files?.find(
                (x) => x?.name === e?.dataTransfer?.files[i]?.name
              )
            ) {
              this.files.push(e.dataTransfer.items[i].getAsFile())
            }
          }
          // else {
          //   console.log('File Rejected')
          // }
        }
      } else {
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          if (
            e.dataTransfer.files[i].type === 'image/png' ||
            e.dataTransfer.files[i].type === 'image/jpeg'
          ) {
            if (
              !this?.files?.find(
                (x) => x?.name === e?.dataTransfer?.files[i]?.name
              )
            ) {
              this.files.push(e.dataTransfer.files[i].name)
            }
          }
          // else {
          //   console.log('File Rejected')
          // }
        }
      }
    },

    dragOverHandler(e) {
      e.preventDefault()
    },

    handleInputChange(e) {
      e.target.files.forEach((x) => {
        if (!this.files.find((y) => y?.name === x?.name)) {
          this.files.push(x)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
