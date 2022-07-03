<template>
  <div class="game-heading">
      <h2 class="game-heading__title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  props:{
    title: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>