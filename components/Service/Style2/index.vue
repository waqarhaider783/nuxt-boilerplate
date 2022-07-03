<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__top">
        <Heading-style-1 :title="title" :sub-title="subTitle" :is-left="true" />
        <div class="services__top__cards">
          <service-card-style-2
            v-for="(card, index) in cards"
            :key="index"
            :title="card && card.cardStyle2Heading"
            :text="card && card.cardStyle2SubDescription"
            :source-url="card && card.image && card.image.sourceUrl"
          />
          <!-- <service-card-style-2
            title="Work Best"
            text="record podcasts as creatively as possible"
          /> -->
        </div>
      </div>
      <!-- <div class="grid-column-4">
        <service-card-style-2
          title="Work Best"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-2
          title="Work Best"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-2
          title="Work Best"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
        <service-card-style-2
          title="Work Best"
          text="record podcasts as creatively as possible"
          source-url="services/service-icon-1.png"
          alt-text="Icon"
        />
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services2',
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    cards: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
