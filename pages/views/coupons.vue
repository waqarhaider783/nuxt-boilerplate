<template>
  <div class="container">
    <div class="section">
      <div v-if="coupons" class="padding-tb">
        <Heading-style-1 title="Coupon Style1 Default" />
        <div
          v-for="(coupon, idx) in coupons"
          :key="idx"
          class="grid-column-1 padding-tb"
        >
          <coupon-card-style1 :coupon-data="coupon" />
        </div>
      </div>
      <div class="padding-tb">
        <Heading-style-1 title="Coupon Style2 " />
        <div v-if="coupons" class="grid-column-4">
          <div v-for="(coupon, idx) in coupons" :key="idx">
            <coupon-card-style2 class="padding-tb" :coupon-data="coupon" />
          </div>
        </div>
      </div>
      <div class="padding-tb">
        <Heading-style-1 title="Coupon Style3 " />
        <div v-if="coupons" class="grid-column-4">
          <div v-for="(coupon, idx) in coupons" :key="idx">
            <coupon-card-style3 class="padding-tb" :coupon-data="coupon" />
          </div>
        </div>
      </div>
      <div class="section">
        <Heading-style-1 title="Coupon Style4" />
        <div v-if="coupons" class="grid-column-2">
          <div v-for="(coupon, idx) in coupons" :key="idx">
            <coupon-card-style4 :coupon-data="coupon" />
          </div>
        </div>
      </div>

      <div class="padding-tb">
        <Heading-style-1 title="Coupon Style5" />
        <div class="padding-tb">
          <coupon-card-style-5 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_COUPONS } from '~/store/types'
export default {
  async asyncData({ store }) {
    const coupons = await store.dispatch(`views/${GET_COUPONS}`)
    return { coupons }
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
