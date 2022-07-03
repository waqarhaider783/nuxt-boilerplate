<template>
  <div class="serviceCard">
    <div class="serviceCard__wrapper">
      <div class="serviceCard__detail">
        <figure class="serviceCard__image">
          <img :src="sourceUrl" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard20',

  props: {
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
