<template>
  <div class="aboutCard" :class="{ reverse: isReverse }">
    <div class="aboutCard__division">
      <div class="aboutCard__contentSection">
        <div class="aboutCard__content">
          <h2>{{ heading }}</h2>
          <p v-for="({ paragraphStyle1 }, index) in description" :key="index">
            {{ paragraphStyle1 }}
          </p>
        </div>
      </div>
      <div class="aboutCard__image">
        <img :src="sourceUrl" :alt="altText" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutCard1',
  props: {
    heading: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },
    altText: {
      type: String,
      default: '',
      required: true,
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
