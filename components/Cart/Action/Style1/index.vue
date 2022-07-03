<template>
  <div class="cartAction">
    <label for="couponCode">Coupon:</label>
    <input type="text" class="glowInput" placeholder="Placeholder Text" />
    <span class="cartAction__ctaIcon"
      ><font-awesome-icon :icon="['fa', 'chevron-down']"
    /></span>
  </div>
</template>

<script>
export default {
  name: 'CartAction1',
}
</script>

<style lang="scss" scoped src="./index.scss">
</style>