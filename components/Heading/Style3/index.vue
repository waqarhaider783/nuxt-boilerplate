<template>
  <div>
    <div
      v-if="!isSidebar"
      class="flex goldjam-heading"
      :class="{ left: isLeft, white: isWhite }"
    >
      <p v-if="subTitle" class="sub-title">{{ subTitle }}</p>
      <h2 class="title">
        {{title}}
        <span class="line">
        <svg-goldjam-under-line />

      </span>
      </h2>
      
    </div>
    <div v-else class="goldjam-sidebar-heading">
      <h4 class="title">{{title}}</h4>
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