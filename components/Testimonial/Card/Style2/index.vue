<template>
  <div class="testimonialCard">
    <div class="testimonialCard__wrapper">
      <figure class="testimonialCard__image">
        <img
          :src="testimonial && testimonial.sourceUrl"
          :alt="testimonial && testimonial.altText"
        />
      </figure>

      <div class="testimonialCard__title">
        {{ testimonial && testimonial.author }}
      </div>
      <div class="testimonialCard__subTitle">
        {{ testimonial && testimonial.title }}
      </div>

      <blockquote>
        <p class="testimonialCard__quote">
          {{ testimonial && testimonial.quote }}
        </p>
      </blockquote>

      <div class="testimonialCard__footer">
        <a
          v-for="(social, index) in testimonial && testimonial.socialLinks"
          :key="index"
          :href="social.link"
          target="_blank"
          class="testimonialCard__socialLink"
        >
          <font-awesome-icon :icon="['fab', `${social.name}`]" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard2',
  props: {
    testimonial: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
