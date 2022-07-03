<template>
  <div class="pet-product-card">
    <div class="card">
      <div class="image">
        <figure>
          <img
            :src="
              image
                ? require(`~/assets/images/${image}`)
                : 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
            "
          />
        </figure>
      </div>
      <h2 class="title">{{ title }}</h2>
      <!-- <StarsRating /> -->
      <div class="img-wrapper rating">
        <img src="~/assets/images/rating.png" alt="Rating" />
      </div>
      <div class="button">
        <nuxt-link :to="src">DETAILS</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardStyle1',

  props: {
    title: {
      type: String,
      default: 'Mouse Bell',
    },
    src: {
      type: String,
      default: '/pet/product-detail',
    },
    image: {
      default: 'pet/pet-product.png',
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
