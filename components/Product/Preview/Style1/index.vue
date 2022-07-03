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
          <div class="shipping-estimate">
            <p>
              Estimated Delivery Date:<strong>{{ shippingtime }}</strong>
            </p>
          </div>
          <div class="quantity">
            <label class="screen-reader-text"></label>
            <input
              id=""
              type="number"
              class="input-text"
              step="1"
              min="1"
              max=""
              name="quantity"
              value="1"
              title="Qty"
              size="4"
              placeholder=""
              inputmode="numeric"
            />
          </div>
          <button type="submit" class="single_add_to_cart_button">
            Add to cart
          </button>
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
  name: 'ProductPreviewStyle1',

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
      default: 'Rs 600',
    },
    price: {
      type: String,
      default: 'RS 400',
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
    shippingtime: {
      type: String,
      default: ' 17 Sep 2021 - 20 Sep 2021',
    },
    text: {
      type: String,
      default: 'Add to Wishlist',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
