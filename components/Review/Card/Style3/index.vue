<template>
  <div class="reviewCard">
    <div class="reviewCard__wrapper">
      <div class="reviews__heading">
        <HeadingStyle1 :title="title" :is-left="true" />
      </div>
      <div class="reviewCard__explore">
        <div class="reviewCard__imageCard">
          <figure class="reviewCard__image">
            <img :src="img" :alt="imgAlt" />
          </figure>
          <div class="reviewCard__details">
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
              <h2 class="reviewCard__ratingNumber">{{ rating }}</h2>
            </div>
            <div class="reviewCard__description">
              <div class="reviewCard__buttons">
                <nuxt-link :to="btnLinkOne" class="reviewCard__btnOne">
                  {{ btnTextOne }}
                </nuxt-link>
                <nuxt-link :to="btnLinkTwo" class="reviewCard__btnTwo">
                  {{ btnTextTwo }}
                </nuxt-link>
              </div>
              <div class="reviewCard__listDes">
                <ul class="reviewCard__list">
                  <li
                    v-for="({ likeItemBoxStyle3 }, index) in listOneItems"
                    :key="index"
                  >
                    {{ likeItemBoxStyle3 }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="reviewCard__background">
          <div class="reviewCard__bottom">
            <div class="reviewCard__left">
              <h2 class="reviewCard__leftTitle">{{ listTwoTitle }}</h2>
              <ul class="reviewCard__listLeft">
                <li
                  v-for="({ itemStyle3 }, index) in listTwoItems"
                  :key="index"
                >
                  {{ itemStyle3 }}
                </li>
              </ul>
            </div>
            <div class="reviewCard__right">
              <h2 class="reviewCard__rightTitle">{{ listThreeTitle }}</h2>
              <ul class="reviewCard__listRight">
                <li v-for="(item, index) in listThreeItems" :key="index">
                  {{ item.dontLikeItemBoxStyle3 }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCardStyle3',
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
    btnTextOne: {
      type: String,
      default: '',
    },
    btnLinkOne: {
      type: String,
      default: '',
    },
    btnTextTwo: {
      type: String,
      default: '',
    },

    btnLinkTwo: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
      // required: true,
    },
    listTwoTitle: {
      type: String,
      default: '',
    },
    listThreeTitle: {
      type: String,
      default: '',
    },
    listOneItems: {
      type: Array,
      default: () => [],
    },
    listTwoItems: {
      type: Array,
      default: () => [],
    },
    listThreeItems: {
      type: Array,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
