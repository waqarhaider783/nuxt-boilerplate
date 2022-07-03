<template>
  <div class="brand">
    <figure class="brand__image">
      <img :src="sourceUrl" :alt="altText" />
    </figure>
    <div
      class="brand__description"
      :class="{ 'brand__description--expand': showDescription }"
    >
      <p>{{ description }}</p>
      <span
        class="brand__description__btn"
        @click="showDescription = !showDescription"
        >&plus; See More</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },
    altText: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      showDescription: false,
    }
  },
}
</script>
<style lang="scss" scoped src="./index.scss"></style>
