<template>
  <section class="testimonial">
    <h3 class="heading">What our customers say</h3>
    <p class="description">{{ testimonial.description }}</p>
    <span class="designation">{{ testimonial.designation }}</span>
    <img
      class="background"
      :src="testimonial.image"
      :alt="testimonial.altText"
    />
  </section>
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
