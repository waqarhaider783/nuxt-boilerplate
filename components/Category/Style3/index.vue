<template>
  <section class="sectionStyle" @click="isCollapsed = !isCollapsed">
    <span class="sectionStyle__title">
      <font-awesome-icon
        :icon="['fa', 'chevron-down']"
        class="sectionStyle__icon"
        :class="{ 'sectionStyle__icon--rotate': isCollapsed }"
      />
      <h1>{{ heading }}</h1>
    </span>
    <ul class="grid-column-4 list" :class="{ 'list--hide': isCollapsed }">
      <li v-for="(category, index) in categories" :key="index">
        <nuxt-link :to="category && category.node && category.node.slug">
          {{ category && category.node && category.node.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'CategoryStyle3',
  props: {
    categories: {
      type: Array,
      default() {
        return []
      },
      required: true,
    },
    heading: {
      type: String,
      default: '',
      required: true,
    },
  },

  data() {
    return {
      isCollapsed: false,
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
>
