<template>
  <article class="testimonial">
    <h3 class="heading">Here's what our fans are saying about us</h3>
    <div class="main-wrapper">
      <section class="info">
        <div class="img-wrapper">
          <img :src="testimonial.image" :alt="testimonial.altText" />
        </div>
      </section>
      <section class="desc">
        <h3 class="name">{{ testimonial.name }}</h3>
        <p class="description">{{ testimonial.description }}</p>
      </section>
    </div>
  </article>
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
