<template>
  <div class="goldjam-blog-card">
    <div class="goldjam-inner">
      <div
        class="blog-image-wrap"
        :style="{
          backgroundImage: `url(${image})`,
        }"
      ></div>
      <div class="blog-detail">
        <nuxt-link class="blog-title" :to="slug">{{ title }}</nuxt-link>
        <ul class="blog-detail-info">
          <li class="author">{{ author }}</li>
          <li class="date">{{ $utilsFN.formatDate(date) }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    image: { type: String, default: '' },
    slug: { type: String, default: '' },
    author: { type: String, default: '' },
    tags: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
