<template>
  <div class="socialSec">
    <ul class="socialSec__list">
      <li
        v-for="{ id, prefix, icon, urlLink, bgColor } in items"
        :key="id"
        class="socialSec__listItem"
      >
        <nuxt-link
          :to="urlLink"
          :style="{ backgroundColor: bgColor }"
          class="socialSec__link"
          :class="{
            'socialSec__link--thin': variant === 'thin',
            'socialSec__link--circle': variant === 'circle',
          }"
        >
          <font-awesome-icon :icon="[prefix, icon]" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarSocialStyle1',
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },

    variant: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
