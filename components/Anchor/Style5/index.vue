<template>
  <nuxt-link :to="urlLink" class="anchor">
    <div class="anchor__image">
      <img :src="choosenImage" alt="User" width="36" height="36" />
    </div>
    <div class="anchor__text">{{ title }}</div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'AnchorStyle4',
  props: {
    urlLink: {
      type: String,
      default: '#',
    },

    title: {
      type: String,
      default: 'Anchor',
    },

    image: {
      type: String,
      default: 'blog/technology.png',
    },
  },

  computed: {
    choosenImage() {
      try {
        return require(`~/assets/images/${this.image}`)
      } catch (error) {
        return 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
      }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
