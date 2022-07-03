<template>
  <div class="cartCard__collaterals">
    <div class="cartCard">
      <h2 class="cartCard__title">Cart totals</h2>

      <table cellspacing="0" class="cartCard__table">
        <tbody>
          <tr class="cartCard__table__row">
            <th class="cartCard__table__heading">Subtotal:</th>
            <td class="cartCard__table__data">
              <bdi
                ><span
                  ><strong>Rs&nbsp;<span>7,921</span></strong></span
                ></bdi
              >
            </td>
          </tr>

          <tr class="cartCard__table__row">
            <th class="cartCard__table__heading">Shipping:</th>
            <td class="cartCard__table__data cartCard__table__data--flex">
              <span>Free Shipping</span>
              <span>Shipping to <strong>Sindh.</strong></span>
              <span>Change Address</span>
            </td>
          </tr>

          <tr class="cartCard__table__row">
            <th class="cartCard__table__heading">Total:</th>
            <td class="cartCard__table__data">
              <bdi
                ><span class="cartCard__table__totalPrice"
                  ><strong>Rs&nbsp;<span>7,921</span></strong></span
                ></bdi
              >
            </td>
          </tr>
        </tbody>
      </table>

      <div class="cartCard__btn">
        <nuxt-link to="#">Proceed to checkout</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard3',

  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped src="./index.scss"/>