<template>
  <article class="testimonial">
    <h2 class="tagline">"{{ testimonial.tagline }}"</h2>
    <div class="info">
      <div class="img-wrapper">
        <img :src="testimonial.image" :alt="testimonial.altText" />
      </div>
      <section>
        <h3 class="name">{{ testimonial.name }}</h3>
        <span class="desingation">{{ testimonial.designation }}</span>
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
