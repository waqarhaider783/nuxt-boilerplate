<template>
  <div class="cart__dropdown">
    <div class="cart__wrap">
      <div class="cart__inner">
        <!-- For Empty Cart -->
        <div v-if="emptyCart" class="emptyCart">
          <span class="emptyCart__icon">
            <font-awesome-icon :icon="['fas', 'times']" />
          </span>
          <p>No products in the cart.</p>
        </div>

        <!-- For Non-Empty Cart -->
        <div v-else class="fullCart">
          <div class="fullCart__head">
            <span class="fullCart__subtotal"
              >Subtotal:<span class="fullCart__subtotal--primary"
                >&nbsp;Rs 5,000</span
              ></span
            >
          </div>

          <div class="fullCart__middle">
            <cart-card-style-1></cart-card-style-1>
            <cart-card-style-1></cart-card-style-1>
            <cart-card-style-1></cart-card-style-1>
          </div>

          <div class="fullCart__bottom">
            <button type="submit" class="fullCart__btn fullCart__btn--primary">
              Checkout
            </button>
            <button type="submit" class="fullCart__btn">View Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginWidget',
  data() {
    return {
      emptyCart: false,
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />