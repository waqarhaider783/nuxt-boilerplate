<template>
  <div class="team">
    <figure>
      <img
        :src="require(`~/assets/images/teams/${image}`)"
        height="300"
        width="300"
        alt="fifth team"
      />
    </figure>
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
      default: 'eight.png',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
