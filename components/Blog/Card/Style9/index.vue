<template>
  <div>
    <div class="standard-post column-2">
      <div class="inner">
        <div class="post-image">
          <nuxt-link class="image" :to="slug">
            <img :src="image" :alt="imageAlt"
          /></nuxt-link>
        </div>
        <div class="post-details">
          <nuxt-link :to="slug">
            <div class="category-details">
              <div class="category-tags">
                <span v-for="tag of tags && tags" :key="tag"
                  >{{ tag.node.name }}&nbsp;</span
                >
              </div>
            </div>
            <div class="post-title">
              <h2>{{ title }}</h2>
            </div></nuxt-link
          ><span class="btm-line"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
