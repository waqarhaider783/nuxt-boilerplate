<template>
  <div class="pet-blog-card">
    <div class="card-wrap">
      <nuxt-link :to="{ slug }" class="image">
        <img :src="image" :alt="imageAlt" />
      </nuxt-link>
      <div class="content-wrap">
        <div class="date">{{ $utilsFN.formatDate(date) }}</div>
        <h3 class="title">{{ title }}</h3>
        <p class="description">{{ description }}</p>
        <nuxt-link :to="slug" class="blog-btn"> Read More </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCardStyle1',
  props: {
    date: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    image: { type: String, default: '' },
    slug: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
