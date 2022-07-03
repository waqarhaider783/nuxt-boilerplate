<template>
  <article class="testimonial">
    <div class="info">
      <div class="about">
        <div class="about-user">
          <h3>{{ testimonial.name }}</h3>
          <span>{{ testimonial.designation }}</span>
          <div class="rating">
            <font-awesome-icon
              v-for="(rating, index) in testimonial && testimonial.rating"
              :key="index"
              :icon="['fas', 'star']"
              class="rating--rated"
            />
            <font-awesome-icon
              v-for="(rating, index) in testimonial && 5 - testimonial.rating"
              :key="index"
              :icon="['fas', 'star']"
            />
          </div>
        </div>
        <img src="~/assets/images/quotes.svg" alt="quotes" />
      </div>
      <figure class="img-wrapper">
        <img :src="testimonial.image" :alt="testimonial.altText" />
      </figure>
    </div>
    <p class="desc">{{ testimonial.description }}</p>
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
