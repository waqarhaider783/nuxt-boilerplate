<template>
  <div class="review">
    <h3 class="title">{{ title }}</h3>
    <p class="subtitle">{{ subTitle }}</p>
    <ul>
      <li v-for="(item, idx) in itemList" :key="idx">
        <p class="heading">{{ item.labelCardStyle10 }}</p>
        <span class="value">{{ item.valueCardStyle10 }}</span>
      </li>
    </ul>
    <p class="subDesc">{{ productTitle }}</p>
    <p class="description">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'ReviewStyle10',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    itemList: {
      type: Array,
      default: () => [],
    },
    productTitle: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
