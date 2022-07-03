<template>
  <article class="testimonial section">
    <section>
      <h3 class="name">{{ testimonial.name }}</h3>
      <span class="designation">{{ testimonial.designation }}</span>
    </section>
    <div class="product-wrp">
      <div class="img-wrapper">
        <img :src="testimonial.image" :alt="testimonial.altText" />
        <p class="hover">
          {{ testimonial.description }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
// </div>
export default {
  props: {
    testimonial: {
      type: Object,
      default: () => {},
    },
  },
  // computed: {
  //   defaultImage() {
  //     try {
  //       return require(`~/assets/images/${this.image}`)
  //     } catch (error) {
  //       return this.image
  //     }
  //   },
  // },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
