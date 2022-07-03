<template>
  <div>
    <div class="cs-blog-detail">
      <img :src="sourceUrl" :alt="altText" />
    </div>

    <div class="wrapper">
      <div class="cs-blog-detail-info">
        <span class="category">{{ category && category.name }}</span>
        <h1 class="title">
          {{ title }}
        </h1>
        <span class="date">{{ $utilsFN.formatDate(date) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', required: true },
    sourceUrl: { type: String, default: '', required: true },
    altText: { type: String, default: '' },
    category: {
      type: Object,
      default() {
        return {}
      },
      required: true,
    },
    date: { type: String, default: '', required: true },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
