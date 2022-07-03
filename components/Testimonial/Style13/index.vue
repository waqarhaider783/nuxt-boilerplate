<template>
  <article v-if="testimonial" class="testimonial">
    <div class="img-wrapper">
      <img src="~/assets/images/open-lightbulb.svg" alt="Light Bulb" />
    </div>
    <h3 class="name">{{ testimonial.name }}</h3>
    <p class="description">{{ testimonial.description }}</p>
    <a class="project" :href="testimonial.project">View Project</a>
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
