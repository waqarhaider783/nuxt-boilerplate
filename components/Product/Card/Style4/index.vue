<template>
  <div class="product-card-box">
    <nuxt-link to="#" class="product-wrap-inner">
      <div class="image">
        <figure>
          <img
            :src="require('~/assets/images/webp/product1.webp')"
            alt="Product-1"
          />
        </figure>
      </div>
      <h3 class="title">{{ title }}</h3>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCardStyle4',

  props: {
    title: {
      type: String,
      default: 'Tinctures & Drops',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
