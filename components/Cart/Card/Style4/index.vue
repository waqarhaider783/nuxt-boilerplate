<template>
  <div class="cartCard__collaterals">
    <div class="cartCard">
      <h2 class="cartCard__title">Your orders</h2>

      <table cellspacing="0" class="cartCard__table">
        <tbody>
          <tr class="cartCard__table__row">
            <th class="cartCard__table__heading">
              Cerave Hydrating Mineral Sunscreen 30 Sheer Tint × 1
            </th>
            <td class="cartCard__table__data">
              <bdi
                ><span>Rs&nbsp;<span>7,921</span></span></bdi
              >
            </td>
          </tr>

          <tr class="cartCard__table__row">
            <th class="cartCard__table__heading">Subtotal</th>
            <td class="cartCard__table__data">
              <bdi
                ><span>Rs&nbsp;<span>7,921</span></span></bdi
              >
            </td>
          </tr>

          <tr class="cartCard__table__row">
            <th class="cartCard__table__heading">Shipping</th>
            <td class="cartCard__table__data cartCard__table__data--flex">
              <span>Flat Rate:&nbsp;</span>
              <bdi>
                <span>₨&nbsp;<span>150</span></span>
              </bdi>
            </td>
          </tr>

          <tr class="cartCard__table__row">
            <th class="cartCard__table__heading">Total</th>
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

      <div class="cartCard__accordion">
        <ul class="cartCard__accordion__list">
          <li
            v-for="(paymentMethod, index) in paymentMethods"
            :key="index"
            class="cartCard__accordion__item"
          >
            <!-- <div class="cartCard__accordion__group"> -->
            <input
              :id="`Radio${index + 1}:`"
              type="radio"
              name="paymentMode "
              class="cartCard__radio"
              @change="(e) => toggleRadio(e)"
            />
            <label for="index + 1">Direct Bank Transfer </label>
            <!-- </div> -->

            <div class="cartCard__accordion__paymentMode">
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="cartCard__btn">
        <nuxt-link to="#">Proceed to checkout</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard4',

  props: {
    paymentMethods: {
      type: Array,
      default() {
        return [
          {
            title: 'Cash on delivery',
            description: 'Pay with cash upon delivery.',
          },
          {
            title: 'Direct Bank Transfer',
            description:
              'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.',
          },
        ]
      },
    },
  },

  methods: {
    toggleRadio(e) {
      // console.log(e.target.id, e.target.checked)
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
