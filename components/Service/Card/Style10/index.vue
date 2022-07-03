<template>
  <div class="serviceCard">
    <div class="serviceCard__wrapper">
      <div class="serviceCard__detail">
        <figure class="serviceCard__image">
          <img :src="serviceData.cardStyle5Image.sourceUrl" alt="" />
        </figure>
        <div class="serviceCard__description">
          <h2 class="serviceCard__title">
            {{ serviceData.cardStyle5Heading }}
          </h2>
          <p class="serviceCard__text">
            {{ serviceData.cardStyle5SubHeading }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard10',

  props: {
    serviceData: {
      type: [Array, Object],
      required: true,
    },
  },

  // computed: {
  //   getImage() {
  //     if (this.serviceData.sourceUrl) {
  //       return require(`../../../../assets/images/${this.serviceData.sourceUrl}`)
  //     }
  //     return ''
  //   },
  // },
}
</script>

<style lang="scss" scoped src="./index.scss" />
