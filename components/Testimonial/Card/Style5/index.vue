<template>
  <div class="testimonialCard">
    <div class="testimonialCard__wrapper">
      <figure class="testimonialCard__image">
        <img
          :src="testimonial && testimonial.sourceUrl"
          :alt="testimonial && testimonial.altText"
        />
      </figure>

      <blockquote>
        <p class="testimonialCard__quote">
          {{ testimonial && testimonial.quote }}
        </p>
      </blockquote>

      <div class="seperator"></div>

      <div class="testimonialCard__title">
        {{ testimonial && testimonial.author }}
      </div>
      <div class="testimonialCard__subTitle">
        {{ testimonial && testimonial.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard5',
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
