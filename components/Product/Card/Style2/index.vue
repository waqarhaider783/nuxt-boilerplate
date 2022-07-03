<template>
  <div class="brand-listing">
    <div class="card">
      <h2 class="title">{{ title }}</h2>
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
      <div class="button">
        <nuxt-link to="/product">Read review</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardStyle2',

  props: {
    title: {
      type: String,
      default: 'Something',
    },
    image: {
      type: String,
      default: 'webp/product2.webp',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
