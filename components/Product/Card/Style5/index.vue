<template>
  <div class="gm-product-card-container">
    <div class="gm-product-card">
      <img :src="require('~/assets/images/game/remote.png')" :alt="name" />

      <h2>{{ name }}</h2>
      <span>{{ price }}</span>
      <div class="gm-product-card__button">
        <nuxt-link to="/games/products/product-details" class="get-deals">
          GET DEALS
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardStyle5',

  props: {
    name: {
      type: String,
      default: 'Razer Naga Expert MMO',
    },
    img: {
      type: String,
      default: '~/assets/images/webp/product1.webp',
    },
    price: {
      type: String,
      default: '$140 – $160',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
