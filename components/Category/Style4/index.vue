<template>
  <div class="">
    <nuxt-link :to="linkTo" class="card__title">
      <div class="card">
        <img
          class="card__image"
          :src="choosenImage"
          :alt="altText"
        />
      </div>
      <h1>{{ title }}</h1>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CategoryStyle4',

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
