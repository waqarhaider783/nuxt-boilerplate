<template>
  <button class="button-wrp" :class="{ min: min }">
    {{ title }}
  </button>
</template>

<script>
export default {
  component: 'AnchorStyle9',
  props: {
    title: {
      type: String,
      default: '',
    },
    min: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" src="./index.scss" />
