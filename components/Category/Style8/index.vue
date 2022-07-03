<!-- :to="{
      path: `/${type}/${slug}`,
    }" -->
<!-- src="require('~/assets/images/banner_2.jpg)" -->
<template>
  <nuxt-link :to="linkTo">
    <div class="brands">
      <figure>
        <img :src="choosenImage" :alt="altText" />
      </figure>
      <p class="brands__text">{{ title }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CategoryStyle8',
  
  props: {
    title: {
      type: String,
      default: '',
      required: true,
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
    linkTo: {
      type: String,
      default: '',
    },
  },

  computed: {
    choosenImage() {
      if (this.sourceUrl) {
        return this.sourceUrl
      } else {
        return 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
      }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
