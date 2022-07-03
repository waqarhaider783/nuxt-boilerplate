<template>
  <div class="aboutContent">
    <h1>{{ heading }}</h1>
    <p v-for="({paragraphContentstyle1}, index) in description" :key="index">{{ paragraphContentstyle1 }}</p>
  </div>
</template>

<script>
export default {
  name: 'AboutContent1',
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
