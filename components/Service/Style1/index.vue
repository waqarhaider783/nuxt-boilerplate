<template>
  <section class="services section">
    <div class="services__wrapper">
      <Heading-style-1 :title="title" :sub-title="subTitle" />
      <div class="section grid-column-3">
        <service-card-style-1
          v-for="(card, index) in cards"
          :key="index"
          :title="card && card.cardStyle1Heading"
          :text="card && card.cardStyle1SubHeading"
          :source-url="card && card.image && card.image.sourceUrl"
        />
        <!-- <service-card-style-1
          title="Work Best"
          text="record podcasts as creatively as possible"
          source-url="services/open-lightbulb.png"
          alt-text="Icon"
        />
        <service-card-style-1
          title="Work Best"
          text="record podcasts as creatively as possible"
          source-url="services/open-lightbulb.png"
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
    cards: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
