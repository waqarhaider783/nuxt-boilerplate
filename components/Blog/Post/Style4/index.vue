<template>
  <div class="vnp-blog-detail">
    <img :src="sourceUrl" :alt="altText" />
    <div class="vnp-header-content">
      <div class="wrapper">
        <h5>{{ $utilsFN.formatDate(date) }}</h5>
        <h2 class="review-title">{{ title }}</h2>
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
    date: { type: String, default: '', required: true },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
