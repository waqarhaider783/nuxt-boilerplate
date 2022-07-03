<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__top">
        <Heading-style-1 :title="title" :sub-title="subTitle" />
      </div>
      <div class="services__bottom">
        <div class="grid-column-2 services__cards">
          <service-card-style-6
            v-for="(card, index) in cards"
            :key="index"
            :title="card && card.serviceCardStyle6ListHeading"
            :text="card && card.serviceCardStyle6ListSubHeading"
          />
        </div>
        <div class="services__imageContainer">
          <figure class="services__image">
            <img :src="sourceUrl" :alt="altText" />
          </figure>
        </div>

        <div class="grid-column-2 services__cards">
          <service-card-style-6
            v-for="(card, index) in cards"
            :key="index"
            :title="card && card.serviceCardStyle6ListHeading"
            :text="card && card.serviceCardStyle6ListSubHeading"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services6',
  props: {
    sourceUrl: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    cards: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
