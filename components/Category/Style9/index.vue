<template>
  <nuxt-link :to="linkTo">
    <div class="brand">
      <figure>
        <img :src="choosenImage" :alt="altText" />
      </figure>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CategoryStyle9',

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
