<template>
  <!-- :class="{ vertical: isVertical }" -->
  <div v-if="coupon" class="couponCard">
    <figure class="couponCard__figure">
      <img
        :src="coupon.image && coupon.image.sourceUrl"
        :alt="coupon.image && coupon.image.altText"
      />
    </figure>
    <div class="couponCard__main">
      <div class="couponCard__textWrapper">
        <h4 class="couponCard__title">
          {{ coupon.title }}
        </h4>
        <p class="couponCard__text">
          {{ coupon.description }}
        </p>
      </div>
      <div class="couponCard__ctaWrapper">
        <div class="couponCard__expiry">
          <div class="couponCard__expiry__item">
            <span class="couponCard__expiry__icon"
              ><font-awesome-icon :icon="['fa', 'check']"
            /></span>
            <span class="couponCard__expiry__text">{{
              coupon.verified ? 'Verified' : 'Unverified'
            }}</span>
          </div>
          <div class="couponCard__expiry__item">
            <span class="couponCard__expiry__icon"
              ><font-awesome-icon :icon="['far', 'clock']"
            /></span>
            <span class="couponCard__expiry__text">{{
              $utilsFN.formatDate(coupon.expiry)
            }}</span>
          </div>
        </div>
        <div class="couponCard__btnWrapper">
          <coupon-button-style1 v-if="coupon.deal" :slug="coupon.deal" />
          <coupon-button-style2
            v-if="coupon.couponCode"
            :code="coupon.couponCode"
            :slug="coupon.affiliateUrl"
          />
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponsCard1',
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
