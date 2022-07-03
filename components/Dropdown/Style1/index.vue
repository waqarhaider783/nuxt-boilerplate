<template>
  <div>
    <div class="dropdown">
      <button @click="() => (expandDropdown = !expandDropdown)">
        View Products
      </button>
      <ul v-if="expandDropdown" class="dropdown__content">
        <li><nuxt-link to="#home">Sort by average rating</nuxt-link></li>
        <li><nuxt-link to="#about">Sort by Price: Low to high</nuxt-link></li>
        <li><nuxt-link to="#home">Sort by latest</nuxt-link></li>
        <li><nuxt-link to="#contact">Sort by Price: High to low</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandDropdown: false,
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
