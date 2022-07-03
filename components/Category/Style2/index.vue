<template>
  <nuxt-link :to="linkTo" class="categoryStyle2-Container">
    <img :src="choosenImage" :alt="altText" />
    <p>{{ title }}</p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CategoryStyle1',

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

<style lang="scss" scoped src="./index.scss"></style>
>
