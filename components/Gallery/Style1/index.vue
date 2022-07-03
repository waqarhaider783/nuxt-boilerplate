<template>
  <div class="section">
    <div class="wrapper">
      <div class="gallery">
        <div class="gallery__top">
          <Heading-style-4 :is-sidebar="false" :title="title" />
        </div>
        <div class="gallery__main">
          <div class="grid-column-5 gap-0">
            <div
              v-for="(image, index) in images"
              :key="`image-${index}`"
              class="gallery__image"
            >
              <figure>
                <img
                  :src="image && image.sourceUrl"
                  :alt="image && image.altText"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
