<template>
  <div class="reviews-container">
    <figure class="product-img">
      <img :src="img" :alt="imgAlt" />
    </figure>
    <div class="product-detail">
      <h3 class="title">{{ title }}</h3>
      <p class="desc">
        {{ desc }}
      </p>
    </div>

    <div class="pros-cons">
      <p class="title">{{ prosCons[0].headingCardStyle13 }}</p>
      <ul>
        <li
          v-for="(item, index) in prosCons[0] &&
          prosCons[0].listItemsCardStyle13"
          :key="index"
        >
          {{ item.itemsCardStyle13 }}
        </li>
      </ul>
    </div>
    <div class="pros-cons">
      <p class="title cons">
        {{ prosCons[1].headingCardStyle13 }}
      </p>
      <ul>
        <li
          v-for="(item, index) in prosCons[1] &&
          prosCons[1].listItemsCardStyle13"
          :key="index"
        >
          {{ item.itemsCardStyle13 }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewStyle13',
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
    desc: {
      type: String,
      default: '',
    },
    prosCons: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
