<template>
  <div class="serviceCard">
    <div class="serviceCard__wrapper">
      <figure v-if="sourceUrl" class="serviceCard__image">
        <img :src="sourceUrl" :alt="altText" />
      </figure>
      <h2 class="serviceCard__title">{{ title }}</h2>
      <p class="serviceCard__text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard2',

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
      default: '',
    },
    altText: {
      type: String,
      default: '',
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
