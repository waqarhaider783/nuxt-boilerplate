<template>
  <nuxt-link :to="urlLink" class="banner">
    <div class="banner__figure">
      <img
        :src="sourceUrl"
        :alt="altText"
        class="banner__image"
      />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BannerStyle7',
  props: {
    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },

    altText: {
      type: String,
      default: '',
    },

    urlLink: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
