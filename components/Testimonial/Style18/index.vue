<template>
  <article class="testimonial">
    <div class="about">
      <figure>
        <img :src="testimonial.image" :alt="testimonial.altText" />
      </figure>
      <div class="info">
        <h3 class="heading">{{ testimonial.designation }}</h3>
        <p class="desc">{{ testimonial.description }}</p>
      </div>
    </div>
    <p class="description">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s,
    </p>
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
