<template>
  <div class="testimonialCard">
    <div class="testimonialCard__wrapper">
      <blockquote class="testimonialCard__quote">
        <p>{{ testimonial && testimonial.quote }}</p>
      </blockquote>

      <div class="testimonialCard__author">
        <figure class="testimonialCard__image">
          <img
            :src="testimonial && testimonial.sourceUrl"
            :alt="testimonial && testimonial.altText"
          />
        </figure>

        <div class="testimonialCard__authorDetails">
          <div class="testimonialCard__title">
            {{ testimonial && testimonial.author }}
          </div>
          <div class="testimonialCard__subTitle">
            {{ testimonial && testimonial.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard6',
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
