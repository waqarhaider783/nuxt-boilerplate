<template>
  <div class="subscription">
    <h2 class="subscription__heading">
      {{ heading }}
    </h2>
    <p class="subscription__text">
      {{ description }}
    </p>
    <div class="emailInputBox">
      <input
        type="email"
        name="email"
        placeholder="Enter your valid email"
        class="emailInputBox__input"
      />
      <button class="emailInputBox__button">Subscribe</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscription',
  props: {
    heading: { default: '', type: String },
    description: { default: '', type: String },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
