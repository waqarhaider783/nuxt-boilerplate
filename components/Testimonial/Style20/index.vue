<template>
  <div class="testimonial">
    <div class="main-wrapper">
      <p class="description">{{ testimonial.description }}</p>
      <figure>
        <img :src="testimonial.image" :alt="testimonial.altText" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
