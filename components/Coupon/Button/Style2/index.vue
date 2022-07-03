<template>
  <div class="button">
    <div class="button__wrapper">
      <nuxt-link :to="slug" class="button__link">
        <span>Get Code</span>
      </nuxt-link>
      <span class="button__hiddenCode">
        {{ code }}
        <span class="button__foldedCorner"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponButton2',
  props: {
    slug: {
      default: '#',
      type: String,
    },
    code: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
