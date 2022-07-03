<template>
  <div class="aboutus">
    <div
      v-for="({ heading, description, image }, index) in contents"
      :key="index"
      class="flex"
    >
      <figure>
        <img :src="image && image.sourceUrl" :alt="image && image.altText" />
      </figure>
      <span>
        <h1 class="section-heading heading">{{ heading }}</h1>
        <p>{{ description }}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutContent3',
  props: {
    contents: {
      type: { Array, Object },
      default() {
        return []
      },
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
