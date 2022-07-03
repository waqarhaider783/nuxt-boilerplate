<template>
  <div>
    <div
      class="imageContainer"
      :style="backgroundImage"
    >
      <div class="container">
        <p class="imageContainer__title">{{ title }}</p>
        <p class="imageContainer__subtitle">{{ subTitle }}</p>
        <p class="imageContainer__online">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerStyle5',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },

    subTitle: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },

    altText: {
      type: String,
      default: '',
    },
  },

  computed: {
    backgroundImage() {
      const image = this.sourceUrl
      return { backgroundImage: `url(${image})` }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
