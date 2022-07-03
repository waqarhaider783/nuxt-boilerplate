<template>
  <div class="post-details">
    <nuxt-link :to="slug">
      <div class="category-details">
        <div class="none" :class="{ isLatest: 'block' }">
          <span class="cat-icon">
            <img :src="image" :alt="altText" />
          </span>
          <div class="category-title">
            <span>Some thing</span>
          </div>
        </div>
        <div class="category-tags none" :class="{ isLatest: 'none' }">
          <span> boy </span>
          <span> boy </span>
          <span> boy </span>
        </div>
      </div>
      <div class="post-title">
        <h2>bros</h2>
      </div>
    </nuxt-link>
    <span class="btm-line"></span>
  </div>
</template>

<script>
export default {
  name: 'BlogCardStyle3',
  props: {
    isLatest: {
      type: Boolean,
      default: true,
    },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    slug: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss">
.none {
  display: none;
}
.block {
  display: block;
}
</style>

<!-- <div class="standard-post">
      <div class="category-details">
        <span class="cat-icon">
          <img
            :src="require('~/assets/images/blog/education_blog1.jpg')"
            alt="Education Blog"
          />
        </span>
        <div class="category-title">
          <span> online shopping </span>
        </div>
      </div>
    </div> -->
