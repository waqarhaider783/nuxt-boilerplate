<template>
  <nuxt-link :to="linkTo" class="card">
    <picture>
      <img
        class="card__image"
        :src="choosenImage"
        :alt="altText"
      />
    </picture>
    <span>{{ title }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CategoryStyle5',

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
