<template>
  <article class="product card alignment--center">
    <div class="inner">
      <div class="image-block-container">
        <nuxt-link class="image-anchor" to="/"
          ><figure class="image" aspect-ratio="1x1">
            <img
              :src="require(`~/assets/images/${img}`)"
              alt="Product"
            /></figure
        ></nuxt-link>
      </div>
      <div class="details-block-container">
        <nuxt-link class="name-anchor" to="/"
          ><h3 class="title alignment--left">{{ title }}</h3></nuxt-link
        ><span class="price">£{{ price }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ProductCardStyle6',

  props: {
    title: {
      type: String,
      default: 'PURE WHEY PROTEIN™',
    },
    img: {
      type: String,
      default: 'products/product-img1.jpg',
    },
    price: {
      type: Number,
      default: 12.99,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
