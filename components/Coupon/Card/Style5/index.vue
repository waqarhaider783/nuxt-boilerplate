<template>
  <div class="couponCard__collaterals">
    <div class="couponCard">
      <p class="couponCard__text">
        If you have a coupon code, please apply it below.
      </p>

      <form class="couponCard__form">
        <input
          type="text"
          name="couponCode"
          class="glowInput"
          placeholder="Coupon Code"
        />
        <div class="couponCard__btn">
          <nuxt-link :to="slug">Proceed to checkout</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponCard5',
  props: {
    slug: { type: String, default: '#' },
    coupon: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
