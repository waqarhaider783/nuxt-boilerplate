<template>
  <div class="productCard">
    <nuxt-link to="#" class="productCard__link">
      <span v-if="isHot" class="badge">
        <span class="badge-text">{{ isHot }}</span>
      </span>
      <font-awesome-icon
        :icon="['far', 'heart']"
        class="productCard__likeIcon"
      />
      <figure class="productCard__image">
        <img :src="require('~/assets/images/webp/product1.webp')" :alt="name" />
      </figure>
      <nuxt-link v-if="variations" to="#_" class="productCard__cta"
        >&plus; Select Options</nuxt-link
      >
      <span v-else class="productCard__cta">&plus; Add to Cart</span>
    </nuxt-link>
    <div class="product-caption">
      <h2>{{ name }}</h2>
      <span>{{ price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardStyle8',

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
    isHot: {
      type: String,
      default: '',
    },
    variations: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
