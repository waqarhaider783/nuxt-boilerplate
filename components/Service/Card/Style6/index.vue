<template>
  <div class="serviceCard">
    <div class="serviceCard__wrapper">
      <div class="serviceCard__detail">
        <div class="serviceCard__description">
          <h2 class="serviceCard__title">{{ title }}</h2>
          <p class="serviceCard__text">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard6',

  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
