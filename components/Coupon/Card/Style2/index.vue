<template>
  <div class="trending-card">
    <div class="inner">
      <nuxt-link :to="coupon.affiliateUrl ? coupon.affiliateUrl : ''">
        <figure class="aspect-ratio">
          <img
            :src="coupon.image && coupon.image.sourceUrl"
            :alt="coupon.image && coupon.image.altText"
          />
        </figure>
        <div class="card-details">
          <h3 class="card-category">Static Category</h3>

          <h2 class="card-title">{{ coupon.title }}</h2>
          <div class="iconmain-wrap">
            <span class="iconbox">
              <span class="x_clock"
                ><font-awesome-icon :icon="['far', 'clock']"
              /></span>
              <span class="text"
                >Ends on {{ $utilsFN.formatDate(coupon.expiry) }}
              </span>
            </span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CouponsCard2',
  props: {
    couponData: {
      type: Object,
      default: () => {},
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
