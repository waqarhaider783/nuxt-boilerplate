<template>
  <div>
    <div class="pet-blog-detail-top">
      <figure class="image">
        <img :src="sourceUrl" :alt="altText" />
      </figure>
      <div class="content">
        <h2>{{ title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sourceUrl: { type: String, default: '', required: true },
    altText: { type: String, default: '' },
    title: { type: String, default: '', required: true },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
