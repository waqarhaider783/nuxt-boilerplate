<template>
  <div class="announcement" :class="`announcement--${type}`">
    <p class="announcement__text">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Announcement2',
  props: {
    message: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'info',
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"/>