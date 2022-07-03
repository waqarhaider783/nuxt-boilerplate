<template>
  <div>
    <div
      v-if="!isSidebar"
      class="Flx vape-heading"
      :class="{ left: isLeft, white: isWhite }"
    >
      <h2 class="title">{{ title }}</h2>
      <nuxt-link
        v-if="slug"
        class="shlnk"
        :to="{ path: `/${slug}` }"
        title="{linkTitle}"
      >
        View All
      </nuxt-link>
      <p class="subTitle">{{ subTitle }}</p>
    </div>

    <div v-else class="vape-sidebar-heading">
      <h4 class="title">{{ title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadingStyle1',
  props: {
    isLeft: {
      type: Boolean,
      default: false,
    },
    isSidebar: {
      type: Boolean,
      default: false,
    },
    isWhite: { type: Boolean, default: false },
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
