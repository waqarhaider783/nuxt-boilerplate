<template>
  <nuxt-link
    v-if="coupon"
    :to="coupon.affiliateUrl ? coupon.affiliateUrl : ''"
    class="couponCard"
  >
    <div class="couponCard__inner-box">
      <div
        class="couponCard__image-container"
        :style="{ backgroundColor: `${bgColor}` }"
      >
        <picture>
          <img
            :src="coupon.image && coupon.image.sourceUrl"
            :alt="coupon.image && coupon.image.altText"
            width="300"
            height="150"
          />
        </picture>
      </div>
      <div class="couponCard__content">
        <!-- v category will be here -->
        <!-- <div class="couponCard__content__caption">{{ coupon.description }}</div> -->
        <p class="couponCard__content__title">{{ coupon.title }}</p>
        <div class="couponCard__content__used-count">{{ used }} used</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CouponsCard3',
  props: {
    used: { type: Number, default: 0 },

    couponData: {
      type: Object,
      default: () => {},
    },

    bgColor: {
      type: String,
      default: '',
    },
  },
  computed: {
    coupon() {
      return this.couponData?.node?.couponsCode?.addCouponDetails
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
