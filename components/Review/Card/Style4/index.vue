<template>
  <div class="reviewCard">
    <div class="reviewCard__wrapper">
      <div class="reviewCard__imageCard">
        <figure class="reviewCard__image">
          <img :src="img" :alt="imgAlt" />
        </figure>
        <div class="reviewCard__details">
          <div class="reviewCard__titleName">
            <h2 class="reviewCard__title">{{ title }}</h2>
            <p class="reviewCard__name">{{ name }}</p>
          </div>
          <p class="reviewCard__price">{{ price }}</p>
          <p class="reviewCard__description">{{ text }}</p>
          <div class="reviewCard__tip">
            <h3>{{ tipTitle }}</h3>
            <p>{{ tipText }}</p>
          </div>
          <div class="reviewCard__button">
            <nuxt-link :to="link" class="reviewCard__btn" :title="btnText">
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
  name: 'ReviewCard4',
  props: {
    img: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    tipTitle: {
      type: String,
      required: true,
    },
    tipText: {
      type: String,
      required: true,
    },
    btnText: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
  },

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
