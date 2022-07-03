<template>
  <div class="blogWrapper">
    <div class="linkSec">
      <nuxt-link to="{slug}">
        <picture class="prdImg">
          <img :src="image" :alt="imageAlt" />
        </picture>
      </nuxt-link>
      <div class="prdDtl">
        <nuxt-link :to="slug" class="prdTitl"> {{ title }} </nuxt-link>
        <p class="prdDesc">{{ description }}</p>
        <span class="blg_date">{{ $utilsFN.formatDate(date) }}</span>
        <nuxt-link :to="slug" class="lrnMore"> learn More... </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCardStyle2',
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
