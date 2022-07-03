<template>
  <div class="testimonialCard">
    <div class="testimonialCard__wrapper">
      <div>
        <blockquote class="testimonialCard__quote">
          <p>{{ testimonial && testimonial.quote }}</p>
        </blockquote>
      </div>
      <div class="testimonialCard__author">
        <figure class="testimonialCard__author__image">
          <img :src="testimonial && testimonial.sourceUrl" :alt="testimonial && testimonial.altText" />
        </figure>

        <div class="testimonialCard__author__rating">
          <font-awesome-icon
            v-for="(rating, index) in testimonial && testimonial.rating"
            :key="index"
            :icon="['fas', 'star']"
            class="testimonialCard__author__rating--rated"
          />
          <font-awesome-icon
            v-for="(rating, index) in testimonial && 5 - testimonial.rating"
            :key="index"
            :icon="['fas', 'star']"
          />
        </div>

        <div class="testimonialCard__author__name">
          {{ testimonial && testimonial.author }}
        </div>
        <div class="testimonialCard__author__title">
          {{ testimonial && testimonial.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard1',
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
