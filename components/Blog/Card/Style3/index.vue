<template>
  <div class="blogSmallThumb">
    <nuxt-link :to="slug" class="flex card">
      <picture>
        <img :src="image" :alt="imageAlt" />
      </picture>
      <div class="desc">
        <p class="title">
          {{ title }}
        </p>
        <span class="button"> See Guide <i class="icon-right"></i> </span>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BlogCardStyle2',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    image: { type: String, default: '' },
    slug: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
