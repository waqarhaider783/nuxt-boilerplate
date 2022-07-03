<template>
  <nuxt-link :to="urlLink" class="anchor">{{ title }}</nuxt-link>
</template>

<script>
export default {
  name: 'AnchorStyle10',
  props: {
    urlLink: {
      type: String,
      default: '#',
    },

    title: {
      type: String,
      default: 'Anchor',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
