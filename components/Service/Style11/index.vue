<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__top">
        <Heading-style-1 :title="title" :sub-title="subTitle" />
      </div>
      <div class="grid-column-3 services__cards">
        <service-card-style-11
          v-for="(card, index) in cards"
          :key="index"
          :title="card && card.cardStyle1Heading"
          :text="card && card.cardStyle1SubHeading"
          :source-url="card && card.image && card.image.sourceUrl"
        />
        <!-- <service-card-style-11
          title="Customer Engagement"
          text="record podcasts as creatively as possible record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-11
          title="Customer Engagement"
          text="record podcasts as creatively as possible record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services11',
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    cards: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
