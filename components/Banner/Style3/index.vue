<template>
  <div class="goldjam-banner-main">
    <div class="banner-image" :style="backgroundImage">
      <div class="Wrp">
        <div class="text-content">
          <h1>{{ title }}</h1>
          <h2>{{ subTitle }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerStyle3',
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

<style lang="scss" scoped src="./index.scss"></style>
