<template>
  <div class="aboutContent">
    <h2>{{ heading }}</h2>
    <p v-for="({paragraphStyle2}, index) in description" :key="index">{{paragraphStyle2}}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutContent2',
  props: {
    heading: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
