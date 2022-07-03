<template>
  <div class="review">
    <div class="main-wrapper">
      <div class="product">
        <figure v-if="productImg">
          <img :src="productImg" :alt="productAlt" />
        </figure>

        <div class="rating">
          <p>Rating <br /></p>

          <div class="stars">
            <p>{{ rating }}</p>
            <span>
              <font-awesome-icon
                v-for="(r, i) in rating"
                :key="i"
                :icon="['fas', 'star']"
                class="rating--rated"
              />
              <font-awesome-icon
                v-for="(r, i) in 5 - rating"
                :key="i"
                :icon="['fas', 'star']"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="product-detail">
        <section>
          <span v-if="isVerified" class="verified">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.182"
              height="17.333"
              viewBox="0 0 14.182 17.333"
            >
              <path
                id="Icon_material-verified-user"
                data-name="Icon material-verified-user"
                d="M11.591,1.5,4.5,4.652V9.379a9.8,9.8,0,0,0,7.091,9.455,9.8,9.8,0,0,0,7.091-9.455V4.652ZM10.015,14.106,6.864,10.955,7.975,9.844l2.041,2.033,5.192-5.192L16.318,7.8Z"
                transform="translate(-4.5 -1.5)"
                fill="#52d6dc"
              />
            </svg>
            Verified
          </span>
          <span class="tooltip">{{ tooltip }}</span>
        </section>
        <h3 class="heading">{{ title }}</h3>
        <p class="description">{{ desc }}</p>
        <nuxt-link :to="btnLink">
          {{ btnText }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCardStyle7',
  props: {
    productImg: {
      type: String,
      required: true,
    },
    productAlt: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    tooltip: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    btnLink: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
