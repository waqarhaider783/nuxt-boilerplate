<template>
  <div
    class="narrow-column"
    :class="{ small: isSmall, medium: isMedium, large: isLarge, half: isHalf }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
    isMedium: {
      type: Boolean,
      default: false,
    },
    isLarge: {
      type: Boolean,
      default: false,
    },
    isHalf: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
