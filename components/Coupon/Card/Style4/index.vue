<template>
  <div class="cpnsBoxTop">
    <div class="coupons">
      <div class="mainInfo">
        <figure v-if="coupon.image" class="logoAnchor">
          <nuxt-link :to="coupon.affiliateUrl ? coupon.affiliateUrl : ''">
            <img :src="coupon.image.sourceUrl" :alt="coupon.image.imageAlt" />
          </nuxt-link>
        </figure>
        <div class="detailTxt">
          <h4 class="offerTitle">
            {{ coupon.title }}
          </h4>
          <p class="offerDesr">{{ coupon.description }}</p>
          <div class="buttonsWrap2 sids">
            <nuxt-link :to="coupon.affiliateUrl ? coupon.affiliateUrl : ''"
              >Show Deal</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="expiry">
        <div class="views">
          <span class="x_user"
            ><font-awesome-icon :icon="['fa', 'user']"
          /></span>
          <span>{{ views }} Views</span>
        </div>
        <div class="verify">
          <span class="x_check_square"
            ><font-awesome-icon :icon="['far', 'check-square']" /></span
          ><span>{{ coupon.verified ? 'Verified' : 'Unverified' }}</span>
        </div>
        <div class="date">
          <span class="x_clock"
            ><font-awesome-icon :icon="['fa', 'clock']"
          /></span>
          <span>Exp: {{ $utilsFN.formatDate(coupon.date) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponsCard4',
  props: {
    views: { type: Number, default: 0 },
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
