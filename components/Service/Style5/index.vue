<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__top">
        <Heading-style-2 :title="title" :sub-title="subTitle" :is-left="true" />
      </div>
      <div class="grid-column-6 services__cards">
        <service-card-style-5
          v-for="(card, index) in cards"
          :key="index"
          :title="card && card.cardStyle5Heading"
          :text="card && card.cardStyle5SubHeading"
          :source-url="
            card && card.cardStyle5Image && card.cardStyle5Image.sourceUrl
          "
        />
        <!-- <service-card-style-5
          title="You order recieve"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-5
          title="You order recieve"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-5
          title="You order recieve"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-5
          title="You order recieve"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-5
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
