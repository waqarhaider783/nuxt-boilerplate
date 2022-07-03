<template>
  <div class="team">
    <div class="trending-card">
      <div class="inner">
        <nuxt-link to="#" class="cids">
          <figure class="aspect-ratio">
            <img :src="require(`~/assets/images/teams/${image}`)" alt="team" />
          </figure>
        </nuxt-link>
      </div>
    </div>
    <div class="details">
      <h1 class="name">{{ name }}</h1>
      <h3 class="designation">{{ designation }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'John Dyson',
    },
    designation: {
      type: String,
      default: 'Product Designer',
    },
    image: {
      type: String,
      default: 'five.svg',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
