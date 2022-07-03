<template>
  <nuxt-link :to="linkTo" class="category">
    <div class="category__wrapper">
      <div class="category__image">
        <picture>
          <img :src="choosenImage" :alt="altText" width="109" height="109" />
        </picture>
      </div>
      <h3 v-if="title" class="category__title">{{ title }}</h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CategoryStyle10',
  props: {
    title: {
      type: String,
      default: '',
    },
    sourceUrl: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: '',
    },
    linkTo: {
      type: String,
      default: '#_',
      required: true,
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
