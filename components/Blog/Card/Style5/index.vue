<template>
  <div class="blogCardV5">
    <nuxt-link :to="slug">
      <div class="image">
        <picture>
          <img :src="image" :alt="imageAlt" />
        </picture>
      </div>
      <div class="description">
        <h4>{{ title }}</h4>
        <p>
          {{ description }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BlogCardStyle3',
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    slug: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
