<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__left">
        <figure class="services__image">
          <img :src="sourceUrl" />
        </figure>
      </div>
      <div class="services__right">
        <div class="services__top">
          <Heading-style-1
            :title="title"
            :sub-title="subTitle"
            :is-left="true"
          />
        </div>
        <div class="grid-column-3 services__cards">
          <service-card-style-15
            v-for="(card, index) in cards"
            :key="index"
            :title="card && card.cardStyle15ListItemHeadig"
            :text="card && card.cardStyle15ListItemDescription"
            :source-url="
              card &&
              card.cardStyle15ListItemImage &&
              card.cardStyle15ListItemImage.sourceUrl
            "
          />
          <!-- <service-card-style-15
            title="You order recieve"
            text="record podcasts as creatively as possible"
            source-url="services/service-icon-1.png"
            alt-text="Icon"
          />
          <service-card-style-15
            title="You order recieve"
            text="record podcasts as creatively as possible"
            source-url="services/service-icon-1.png"
            alt-text="Icon"
          /> -->
        </div>
        <nuxt-link class="services__button" :to="link">{{ btnText }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Service15',
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    btnText: { type: String, default: '' },
    link: { type: String, default: '' },
    sourceUrl: { type: String, default: '' },
    cards: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
