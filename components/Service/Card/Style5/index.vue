<template>
  <div class="serviceCard">
    <div class="serviceCard__wrapper">
      <figure class="serviceCard__image">
        <img :src="sourceUrl" alt="" />
      </figure>
      <div class="serviceCard__description">
        <h2 class="serviceCard__title">{{ title }}</h2>
        <p class="serviceCard__text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard5',

  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    sourceUrl: {
      type: String,
      required: true,
    },
  },

  // computed: {
  //   getImage() {
  //     if (this.sourceUrl) {
  //       return require(`../../../../assets/images/${this.sourceUrl}`)
  //     }
  //     return ''
  //   },
  // },
}
</script>

<style lang="scss" scoped src="./index.scss" />
