<template>
  <div class="catAndStr">
    <ul>
      <li v-for="{ id, slug, title } in items" :key="id">
        <nuxt-link :to="slug" class="anchor">{{ title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarCaregoryStyle2',
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
