<template>
  <div class="single_product">
    <div class="product-gallery">
      <figure class="product-gallery_wrapper">
        <nuxt-link to="#_">
          <img
            :src="require('~/assets/images/webp/product1.webp')"
            :alt="name"
          />
        </nuxt-link>
      </figure>
    </div>

    <div class="summary entry-summary">
      <div class="inner">
        <h2 class="product-title">{{ name }}</h2>
        <p class="price">
          {{ price }}
          <del>
            <span class="price-amount">{{ amount }}</span>
          </del>
        </p>
        <div class="short-description">
          <p>{{ description }}</p>
        </div>
        <p class="in-stock">
          {{ stock }}
        </p>
        <form class="cart">
          <table v-if="options && options.length > 0" class="variations">
            <tbody>
              <tr>
                <td class="label">
                  <label for="label">{{ varValue }} </label>
                </td>
                <td class="value">
                  <select
                    id="selectOption"
                    class="attribute"
                    name="selectOption"
                    data_show_option_none="yes"
                    @change="(e) => selectOption(e)"
                  >
                    <option selected disabled hidden>Choose an Option</option>
                    <option
                      v-for="({ name: optionName, value }, index) in options"
                      :key="index"
                      :name="index"
                      :value="value"
                    >
                      {{ optionName }}
                    </option>
                  </select>
                  <span
                    v-if="selectedIndex > 0"
                    class="reset-varations"
                    @click="resetSelection()"
                    >Clear
                  </span>
                  <!-- v-on:click="isHidden = true" -->
                </td>
              </tr>
            </tbody>
          </table>

          <div class="single_variation_wrap">
            <div v-if="selectedIndex !== 0" class="single_variation">
              <p class="variation-description">
                {{ selectedOption.name }}
              </p>
              <p class="variation-price">
                {{ selectedOption.value }}
              </p>
            </div>
            <div class="variation-add-to-cart-disabled">
              <div class="shipping-estimate">
                <p>
                  Estimated Delivery Date:<strong>{{ shippingtime }}</strong>
                </p>
              </div>
              <div class="quantity-button">
                <div class="quantity">
                  <input
                    type="number"
                    class="input-text"
                    step="1"
                    min="1"
                    max=""
                    name="quantity"
                    :value="count"
                    title="Qty"
                    size="4"
                    placeholder=""
                    inputmode="numeric"
                  />

                  <div class="counter">
                    <span class="counter__btn" @click="increment"></span>
                    <span
                      class="counter__btn counter__btn--decrement"
                      @click="decrement"
                    ></span>
                  </div>
                </div>
                <button
                  type="submit"
                  :disabled="disableAddToCart"
                  class="single_add_to_cart_button"
                  :class="{
                    'single_add_to_cart_button--disabled': disableAddToCart,
                  }"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </form>
        <div class="wishlist">
          <nuxt-link to="#_" class="single_add_to_wishlist" rel="nofollow">
            <font-awesome-icon
              :icon="['far', 'heart']"
              class="productCard__likeIcon"
            />
            <span class="wishlist-text">Add to Wishlist</span>
          </nuxt-link>
        </div>
        <div class="product_meta">
          <span class="posted_in">
            Categories:
            <nuxt-link to="#_" rel="tag ">Daily Deals</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPreviewStyle2',

  props: {
    name: {
      type: String,
      default: 'Razer Naga Expert MMO',
    },
    img: {
      type: String,
      default: '~/assets/images/webp/product1.webp',
    },
    amount: {
      type: String,
      default: 'Rs 600-1000',
    },
    price: {
      type: String,
      default: 'RS 400 - 800',
    },
    description: {
      type: String,
      default:
        'Intensely hydrating & brightens skin• 100% hydrogel formula enriched with vitamin B3• Non-comedogenic (won’t clog pores)• Suitable for sensitive skin• Dermatologist tested Neutrogena Fairness Boost Hydrogel Recovery Mask, brightens the skin, boosts radiance and smoothens its texture. Made from a unique 100% hydrogel formula, Neutrogena Fairness',
    },

    stock: {
      type: String,
      default: '17 in stock',
    },
    varValue: {
      type: String,
      default: 'Shade:',
    },

    shippingtime: {
      type: String,
      default: ' 17 Sep 2021 - 20 Sep 2021',
    },

    text: {
      type: String,
      default: 'Add to Wishlist',
    },

    options: {
      type: Array,
      default() {
        return []
      },
    },
  },

  data() {
    return {
      selectedOption: {
        name: '',
        value: '',
      },
      selectedIndex: 0,
      count: 1,
    }
  },

  computed: {
    disableAddToCart() {
      if (this.options && this.options.length > 0 && this.selectedIndex === 0) {
        return true
      } else {
        return false
      }
    },
  },

  methods: {
    selectOption(e) {
      const value = e.target.value
      this.selectedIndex = e.target.selectedIndex
      const name = e.target.options[this.selectedIndex].label
      this.selectedOption = { name, value }
    },
    resetSelection() {
      const mySelect = document.getElementById('selectOption')
      mySelect.selectedIndex = 0
      this.selectedIndex = 0
    },
    increment() {
      this.count += 1
    },
    decrement() {
      this.count -= 1
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
