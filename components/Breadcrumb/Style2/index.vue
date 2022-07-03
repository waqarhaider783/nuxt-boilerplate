<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumb">
      <li>
        <a data-breadcrumb="" href=""><h3>Cloud</h3></a>
      </li>
      <svg-arrow-right rounded />
      <li>
        <a data-breadcrumb="" href=""><h3>Studio</h3></a>
        <div class="arrow-down" @click="dropdowns.showOne = !dropdowns.showOne">
          <svg-arrow-down />
        </div>
      </li>
      <svg-arrow-right rounded />
      <li>
        <a data-breadcrumb="" href=""><h3>Projects</h3></a>
        <div class="arrow-down" @click="dropdowns.showTwo = !dropdowns.showTwo">
          <svg-arrow-down />
        </div>
      </li>
      <svg-arrow-right rounded />
      <li>
        <a data-breadcrumb="" href=""><h3>Daily Blog</h3></a>
        <div
          class="arrow-down"
          @click="dropdowns.showThree = !dropdowns.showThree"
        >
          <svg-arrow-down />
        </div>
      </li>
    </ul>
    <div class="breadcrumb-content">
      <ul data-breadcrumb-content="" :class="{ active: dropdowns.showOne }">
        <li v-for="i in 5" :key="i"><a href="">Studio Items</a></li>
      </ul>
      <ul data-breadcrumb-content="" :class="{ active: dropdowns.showTwo }">
        <li v-for="i in 5" :key="i"><a href="">Projects</a></li>
      </ul>
      <ul data-breadcrumb-content="" :class="{ active: dropdowns.showThree }">
        <li v-for="i in 5" :key="i"><a href="">Blogs</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      dropdowns: {
        showOne: false,
        showTwo: false,
        showThree: false,
      },
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },

  beforeDestroy() {
    document.removeEventListener('click', this.close)
  },

  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdowns = Object.fromEntries(
          Object.entries(this.dropdowns).map(([key, value]) => [key, false])
        )
      }
    },
  },
}
</script>

<style lang="scss" src="./index.scss" scoped></style>
