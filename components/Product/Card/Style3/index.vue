<template>
  <div class="ProductBox">
    <div class="prdInfo">
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
      <div class="prdDetail">
        <p class="desc">{{ desc }}</p>
        <p class="price">
          <strong>${{ price }}.99</strong> <span>$0.08 per mg CBD</span>
        </p>
      </div>
      <div class="button">
        <a href="#_" target="_blank"> BUY NOW </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardStyle3',

  props: {
    desc: {
      type: String,
      default:
        'Wellness CBD + CBG Oil Tincture 2:1 500mg 500 mg CBD (16.7 mg/ml)',
    },
    price: {
      type: Number,
      default: 39,
    },
    image: {
      type: String,
      default: 'webp/product-sents.webp',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
