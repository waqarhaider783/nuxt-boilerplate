<template>
  <div id="app">
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s',
      meta: [{}],
    }
  },
}
</script>

<style lang="scss" scoped src="./default.scss"></style>
