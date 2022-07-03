<template>
  <div class="reviewCard">
    <div class="reviewCard__wrapper">
      <div class="reviewCard__title">
        <h2>{{ title }}</h2>
      </div>
      <div class="reviewCard__block">
        <div class="reviewCard__card">
          <div class="reviewCard__imageButton">
            <figure class="reviewCard__image">
              <img :src="img" :alt="imgAlt" />
            </figure>
            <div class="reviewCard__price">
              <p class="reviewCard__priceOne">{{ priceOne }}</p>
              <p class="reviewCard__priceTwo">{{ priceTwo }}</p>
            </div>

            <nuxt-link :to="link" class="reviewCard__button" :title="btnText">
              {{ btnText }}
            </nuxt-link>
          </div>
          <div class="reviewCard__detail">
            <div class="reviewCard__top">
              <span class="reviewCard__topTitle">
                <h2>PROS</h2>
              </span>
              <ul class="reviewCard__Pros">
                <li v-for="({ itemsCardStyle5 }, index) in pros" :key="index">
                  {{ itemsCardStyle5 }}
                </li>
              </ul>
            </div>
            <div class="reviewCard__middle">
              <span class="reviewCard__middleTitle">
                <h2>CONS</h2>
              </span>
              <ul class="reviewCard__Cons">
                <li v-for="({ itemsCardStyle5 }, index) in cons" :key="index">
                  {{ itemsCardStyle5 }}
                </li>
              </ul>
            </div>
            <div class="reviewCard__bottom">
              <div class="reviewCard__rating">
                <font-awesome-icon
                  v-for="(rate, index) in rating"
                  :key="index"
                  :icon="['fas', 'star']"
                  class="reviewCard__rating--rated"
                />
                <font-awesome-icon
                  v-for="(rate, index) in 5 - rating"
                  :key="index"
                  :icon="['fas', 'star']"
                />
              </div>
              <div class="reviewCard__ratingNumTitle">
                <h2 class="reviewCard__ratingNumber">{{ rating }}</h2>
                <h3 class="reviewCard__ratingTitle">OUR RATING</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="reviewCard__detailDescription">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard5',
  props: {
    img: {
      type: String,
      default: '',
    },
    imgAlt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    priceOne: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    priceTwo: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      required: true,
    },
    btnText: {
      type: String,
      default: '',
    },
    pros: {
      type: Array,
      default() {
        return []
      },
    },
    cons: {
      type: Array,
      default() {
        return []
      },
    },
    text: {
      type: String,
      default: '',
    },
  },
  // data() {
  //   return { rating: 4 }
  // },
  // computed: {
  //   getImage() {
  //     if (this.sourceUrl) {
  //       return require(`../../../../assets/images/${this.sourceUrl}`)
  //     }
  //     return ''
  //   },
  // },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
