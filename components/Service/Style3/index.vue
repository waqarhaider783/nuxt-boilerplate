<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__top">
        <Heading-style-1 :title="title" :sub-title="subTitle" :is-left="true" />
        <nuxt-link class="services__button" :to="link">
          {{ btnText }}
        </nuxt-link>
      </div>
      <div class="grid-column-3 services__cards">
        <service-card-style-3
          v-for="(card, index) in cards"
          :key="index"
          :title="card && card.cardStyle3Heading"
          :text="card && card.cardStyle3SubDescription"
          :source-url="
            card && card.cardStyle3Image && card.cardStyle3Image.sourceUrl
          "
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    btnText: { type: String, default: '' },
    link: { type: String, default: '' },
    cards: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
