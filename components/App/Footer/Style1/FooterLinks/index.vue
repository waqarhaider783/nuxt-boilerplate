<template>
  <div class="footerLinks">
    <h5>{{ title }}</h5>
    <ul>
      <li v-for="(data, idx) of footerData" :key="idx">
        <nuxt-link :to="data.itemLinkStyle1">{{ data.itemStyle1 }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    footerData: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style lang="scss" scoped src="./index.scss"></style>
