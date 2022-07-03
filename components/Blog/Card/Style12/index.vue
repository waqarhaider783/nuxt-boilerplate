<template>
  <div class="goldjam-latest-blog-card">
    <div class="goldjam-inner">
      <div class="blog-image-wrap">
        <nuxt-link :to="slug"><img :src="image" :alt="imageAlt" /></nuxt-link>
      </div>
      <div class="blog-detail">
        <ul class="blog-detail-info">
          <li class="date">{{ $utilsFN.formatDate(date) }}</li>

          <li v-for="tag of tags && tags" :key="tag" class="tag">
            {{ tag.node.name }}&nbsp;
          </li>
        </ul>
        <nuxt-link class="blog-title" :to="slug">{{ title }}</nuxt-link
        ><span class="blog-author">{{ author }}</span
        ><nuxt-link class="blog-learn-more" :to="slug">Read More</nuxt-link>
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
