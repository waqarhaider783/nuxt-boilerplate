<template>
  <div class="announcement">
    <p class="announcement__text">
      <span>
        ●&nbsp;&nbsp;&nbsp;&nbsp;{{ message }}&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Announcement1',
  props: {
    message: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"/>