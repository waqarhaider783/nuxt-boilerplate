<template>
  <div class="standard-post blog-detail-post column-1">
    <div class="inner">
      <div class="post-details">
        <div>
          <div class="post-title">
            <h2>{{ title }}</h2>
          </div>
          <div class="category-details">
            <div class="category-title">
              <Link to="#_" class="catlink">
                {{ catName }}
              </Link>
              <div class="author">{{ author }}</div>
              <div class="date">
                {{ $utilsFN.formatDate(date) }}
              </div>
            </div>
            <span class="cat-icon">
              <img :src="catSourceUrl" :alt="catAltText" />
            </span>
          </div>
        </div>
      </div>
      <div class="post-image">
        <nuxt-link to="/vape-guide/detail" class="image">
          <img :src="sourceUrl" :alt="altText" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '', required: true },
    author: { type: String, default: '', required: true },
    sourceUrl: { type: String, default: '', required: true },
    altText: { type: String, default: '' },
    catName: { type: String, default: '', required: true },
    catSourceUrl: { type: String, default: '', required: true },
    catAltText: { type: String, default: '' },
    date: { type: String, default: '', required: true },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
