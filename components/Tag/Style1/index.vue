<template>
  <div class="tags">
    <button v-for="(item, idx) in tags" :key="idx">
      <nuxt-link to="#_" class="tag"> {{ item }}</nuxt-link>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
