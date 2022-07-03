<template>
  <div class="reviewCard">
    <div class="reviewCard__wrapper">
      <div class="reviewCard__box">
        <div class="reviewCard__card">
          <div class="reviewCard__imageBlock">
            <figure class="reviewCard__image">
              <img :src="img" :alt="imgAlt" />
            </figure>
          </div>
          <div class="reviewCard__detail">
            <div class="reviewCard__verifyText">
              <span class="reviewCard__verify">
                <svg
                  v-if="isVerified"
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
                    fill="#02bb8c"
                  />
                </svg>
              </span>
              <span v-if="isVerified" class="reviewCard__textOne">
                Verified
              </span>
              <span class="reviewCard__textTwo"> {{ textTwo }} </span>
            </div>
            <div class="reviewCard__titleDesc">
              <h2 class="reviewCard__title">{{ title }}</h2>
              <p class="reviewCard__desc">{{ description }}</p>
            </div>
            <div class="reviewCard__icons">
              <div class="reviewCard__userIconText">
                <span class="reviewCard__user">
                  <font-awesome-icon
                    :icon="['fas', 'user']"
                    class="reviewCard__userIcon"
                  />
                </span>
                <span class="reviewCard__userText"> {{ textThree }}</span>
              </div>
              <div class="reviewCard__toggleIconText">
                <span class="reviewCard__toggle">
                  <font-awesome-icon
                    :icon="['fas', 'toggle-off']"
                    class="reviewCard__toggleIcon"
                  />
                </span>
                <span class="reviewCard__toggleText">{{ textFour }}</span>
              </div>
              <div class="reviewCard__clockIconText">
                <span class="reviewCard__clock">
                  <font-awesome-icon
                    :icon="['fas', 'clock']"
                    class="reviewCard__clockIcon"
                  />
                </span>
                <span class="reviewCard__clockText">{{ textFive }}</span>
              </div>
            </div>
          </div>
          <div class="reviewCard__ratingButton">
            <h2 class="reviewCard__ratingTitle">Rating</h2>
            <div class="reviewCard__rating">
              <h2 class="reviewCard__ratingNumber">{{ rating }}</h2>
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
            <nuxt-link
              :to="link"
              class="reviewCard__activateButton"
              :title="btnText"
            >
              {{ btnText }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard6',
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
    description: {
      type: String,
      default: '',
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    textTwo: {
      type: String,
      default: '',
    },
    textThree: {
      type: String,
      default: '',
    },
    textFour: {
      type: String,
      default: '',
    },
    textFive: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },

    link: {
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
