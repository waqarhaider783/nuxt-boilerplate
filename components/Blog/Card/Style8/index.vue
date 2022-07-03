<template>
  <div>
    <div class="standard-post blog-detail-post column-1">
      <div class="inner">
        <div class="post-details">
          <div>
            <div class="post-title">
              <h2>{{ title }}</h2>
            </div>
            <div class="category-details">
              <div class="category-title">
                <nuxt-link class="catlink" to="/">Home & Garden </nuxt-link>
                <div class="auther">{{ author }}</div>
                <div class="date">{{ $utilsFN.formatDate(date) }}</div>
              </div>
              <span class="cat-icon"
                ><img :src="catImage" :alt="catImageAltText" />
              </span>
            </div>
          </div>
        </div>
        <div class="post-image">
          <nuxt-link class="image" :to="slug">
            <img :src="image" :alt="imageAlt" />
          </nuxt-link>
        </div>
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
    catImage: { type: String, default: '' },
    catImageAltText: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
