<template>
  <div class="reviewCard">
    <div class="reviewCard__wrapper">
      <div class="reviewCard__explore">
        <div class="reviewCard__title">
          <h2 class="reviewCard__headingTitle">{{ headTitle }}</h2>
        </div>
        <div class="reviewCard__card">
          <div class="reviewCard__left">
            <div class="reviewCard__first">
              <figure class="reviewCard__image">
                <img :src="sourceUrlOne" :alt="sourceUrlOneAlt" />
              </figure>
              <h2 class="reviewCard__ratingNumber">{{ rating }}</h2>
              <div v-if="rating" class="reviewCard__rating">
                <font-awesome-icon
                  v-for="(rate, index) in rating && rating"
                  :key="index"
                  :icon="['fas', 'star']"
                  class="reviewCard__rating--rated"
                />
                <font-awesome-icon
                  v-for="(rate, index) in rating && 5 - rating"
                  :key="index"
                  :icon="['fas', 'star']"
                />
              </div>
            </div>
            <div class="reviewCard__second">
              <div class="reviewCard__heading">
                <h2 class="reviewCard__titlePrice">
                  {{ discount && discount }}
                </h2>
                <h2 class="reviewCard__titleName">
                  {{ title && title }}
                </h2>
              </div>
              <ul v-if="listItem" class="reviewCard__list">
                <li
                  v-for="({ itemCardStyle2 }, index) in listItem && listItem"
                  :key="index"
                  class="reviewCard__listItems"
                >
                  {{ itemCardStyle2 && itemCardStyle2 }}
                </li>
              </ul>
            </div>
          </div>
          <div class="reviewCard__third">
            <nuxt-link :to="link" class="reviewCard__btn" :title="btnText">
              {{ btnText }}
            </nuxt-link>
            <figure class="reviewCard__imageTwo">
              <img :src="sourceUrlTwo" :alt="sourceUrlTwoAlt" />
            </figure>
            <p class="reviewCard__detail">{{ details }}</p>
          </div>
          <div class="reviewCard__fourth">
            <figure class="reviewCard__imageThird">
              <img :src="sourceUrlThree" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCardStyle2',

  props: {
    headTitle: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },

    sourceUrlOne: {
      type: String,
      required: true,
    },
    sourceUrlOneAlt: {
      type: String,
      required: true,
    },
    sourceUrlTwo: {
      type: String,
      required: true,
    },
    sourceUrlTwoAlt: {
      type: String,
      required: true,
    },
    sourceUrlThree: {
      type: String,
      required: true,
    },
    sourceUrlThreeAlt: {
      type: String,
      required: true,
    },
    listItem: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
