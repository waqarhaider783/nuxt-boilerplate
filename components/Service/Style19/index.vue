<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__cards">
        <div class="services__image">
          <service-card-style-19 :source-url="sourceUrl" />
        </div>
        <div class="services__heading">
          <HeadingStyle2 :title="title" :sub-title="subTitle" :is-left="true" />
          <p class="description">{{ description }}</p>
          <nuxt-link class="services__button" :to="link">{{
            btnText
          }}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services19',
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    btnText: { type: String, default: '' },
    link: { type: String, default: '' },
    description: { type: String, default: '' },
    sourceUrl: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
