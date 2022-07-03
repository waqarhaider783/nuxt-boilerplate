<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__top">
        <Heading-style-1 :title="title" :sub-title="subTitle" :is-left="true" />
      </div>
      <div class="grid-column-4 services__cards">
        <service-card-style-4
          v-for="(card, index) in cards"
          :key="index"
          :title="card && card.cardStyle4Heading"
          :text="card && card.cardStyle4SubHeading"
          :source-url="
            card && card.cardStyle4Image && card.cardStyle4Image.sourceUrl
          "
        />
        <!-- <service-card-style-4
          title="You order recieve"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-4
          title="You order recieve"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-4
          title="You order recieve"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        /> -->
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
