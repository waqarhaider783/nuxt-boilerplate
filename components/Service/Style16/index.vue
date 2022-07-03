<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__top">
        <Heading-style-2 :title="title" :sub-title="subTitle" />
      </div>
      <div class="grid-column-3 services__cards">
        <service-card-style-16
          v-for="(card, index) in cards"
          :key="index"
          :title="card && card.cardStyle1Heading"
          :text="card && card.cardStyle1SubHeading"
          :source-url="card && card.image && card.image.sourceUrl"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services16',
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    cards: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
