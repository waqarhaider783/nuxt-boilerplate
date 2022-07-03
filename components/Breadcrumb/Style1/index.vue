<template>
  <div class="bread_crumbs_wrap">
    <ol
      v-if="pageHistory.length > 0"
      class="bread_crumbs"
      typeof="BreadcrumbList"
    >
      <li
        v-for="(page, index) in pageHistory"
        :key="index"
        property="itemListElement"
        typeof="ListItem"
      >
        <NLink property="item" typeof="WebPage" to="#">
          <span property="name">{{ page }}</span>
        </NLink>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageHistory: [],
    }
  },

  mounted() {
    this.pageHistory = this.$route.path.trim().split('/').slice(1, 1)
  },
}
</script>
<style lang="scss" scoped src="./index.scss"></style>
