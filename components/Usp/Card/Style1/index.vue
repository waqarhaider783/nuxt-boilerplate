<template>
  <div v-if="card" class="UspCard">
    <figure class="UspCard__image">
      <img :src="card.image.sourceUrl" :alt="card.image.altText" />
    </figure>

    <h3 class="UspCard__title">{{ card.title }}</h3>

    <div class="UspCard__text">
      {{ card.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UspCardStyle1',
  props: {
    card: { default: () => {}, type: Object },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
