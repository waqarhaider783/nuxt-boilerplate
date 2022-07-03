<template>
  <nuxt-link :to="linkTo" class="category">
    {{ title }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'CategoryStyle6',
  
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    linkTo: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
>
