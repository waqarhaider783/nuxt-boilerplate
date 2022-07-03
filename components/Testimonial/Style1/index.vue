<template>
  <div v-if="testimonial" class="pet-testimonial-slider">
    <heading-style-2 :title="testimonial.title" />
    <div class="pet-testimonial-box">
      <img :src="require('~/assets/images/pet/testimonial-qutation.png')" />
      <p>
        {{ testimonial.message }}
      </p>
      <div class="user-info">
        <figure class="image">
          <img
            :src="testimonial.avatar && testimonial.avatar.sourceUrl"
            :alt="testimonial.avatar && testimonial.avatar.altText"
          />
        </figure>
        <div class="detail">
          <div class="name">{{ testimonial.name }}</div>
          <div class="role">{{ testimonial.designation }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonial: { type: Object, default: () => {} },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
