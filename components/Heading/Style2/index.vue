<template>
  <div>
    <div
      v-if="!isSidebar"
      class="flex pet-heading"
      :class="{ left: isLeft, white: isWhite }"
    >
      <p v-if="subTitle" class="sub-title">{{ subTitle }}</p>
      <h2 class="title" v-html="title"></h2>
      <svg-pet-under-line />


    </div>
    <div v-else class="pet-sidebar-heading">
      <h4 class="title">{{title}}</h4>
      <svg-pet-under-line />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLeft: { type: Boolean, default: false },
    isWhite: { type: Boolean, default: false },
    isSidebar: { type: Boolean, default: false },
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>