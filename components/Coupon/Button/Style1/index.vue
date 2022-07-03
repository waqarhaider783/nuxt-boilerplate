<template>
  <nuxt-link :to="slug" class="button">
    {{ title }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'CouponButton1',

  props: {
    title: {
      type: String,
      default: 'Get Deal',
    },
    slug: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
