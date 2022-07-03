<template>
  <div class="blogCardV4">
    <nuxt-link :to="slug">
      <div class="image">
        <picture> <img :src="image" :alt="imageAlt" /> </picture>
      </div>
      <div class="description">
        <p>{{ title }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BlogCardStyle4',
  props: {
    title: { type: String, default: '' },
    image: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    slug: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
