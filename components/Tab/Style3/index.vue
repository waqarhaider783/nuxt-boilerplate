<template>
  <div class="tabs-list">
    <nav>
      <ul class="tabs">
        <li
          v-for="(tabName, index) in tabNames"
          :key="index"
          class="tabs__item"
          @click="$emit('on-change-Tab', index)"
        >
          <nuxt-link
            class="tabs__links"
            :class="{
              'tabs__links--light': light,
              'tabs__links-active': index === active,
            }"
            to="#"
            >{{ tabName }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Tabs2',
  props: {
    tabNames: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    active: {
      type: Number,
      required: true,
      default: 0,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss" src="./index.scss"></style>
