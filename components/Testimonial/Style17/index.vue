<template>
  <div class="main-wrapper">
    <article class="testimonial">
      <section class="img-wrapper">
        <img :src="testimonial.image" :alt="testimonial.altText" />
      </section>
      <section class="desc">
        <h3 class="name">{{ testimonial.name }}</h3>
        <span class="designation">{{ testimonial.designation }}</span>
        <p class="description">
          {{ testimonial.description }}
        </p>
      </section>
    </article>
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
