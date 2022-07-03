<template>
  <div class="reviewCard">
    <div class="reviewCard__wrapper">
      <div class="reviewCard__block">
        <div class="reviewCard__card">
          <div class="reviewCard__imageTitle">
            <figure class="reviewCard__image">
              <img :src="img" :alt="imgAlt" />
            </figure>
            <h3 class="reviewCard__heading">{{ title }}</h3>
          </div>
          <div class="reviewCard__pros">
            <span class="reviewCard__prosSpacing">
              <h2 class="reviewCard__prosTitle">{{ titlePros }}</h2>
            </span>
            <ul class="reviewCard__proslist">
              <li
                v-for="({ descriptionCardStyle15 }, index) in listOneItems"
                :key="index"
              >
                {{ descriptionCardStyle15 }}
              </li>
            </ul>
          </div>
          <div class="reviewCard__cons">
            <span class="reviewCard__consSpacing">
              <h2 class="reviewCard__consTitle">{{ titleCons }}</h2>
            </span>
            <ul class="reviewCard__conslist">
              <li
                v-for="({ descriptionCardStyle15 }, index) in listTwoItems"
                :key="index"
              >
                {{ descriptionCardStyle15 }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard15',
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
    titlePros: {
      type: String,
      required: true,
    },
    titleCons: {
      type: String,
      required: true,
    },

    listOneItems: {
      type: Array,
      default() {
        return []
      },
    },

    listTwoItems: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
