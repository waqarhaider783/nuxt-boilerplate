<template>
  <nuxt-link :to="linkTo" class="category">
    <div class="category__status" :class="{ 'category__status--hot': isHot }">
      {{ status && status }}
    </div>
    <figure class="category__image">
      <img :src="choosenImage" :alt="altText" />
    </figure>
    <div class="category__title">{{ title }}</div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CategoryStyle7',

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
    status: {
      type: String,
      default: '',
    },
    isHot: {
      type: Boolean,
      default: true,
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
