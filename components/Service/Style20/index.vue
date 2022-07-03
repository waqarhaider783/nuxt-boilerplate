<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__cards">
        <div class="services__card" :class="{ reverse: isreverse }">
          <div class="services__heading">
            <HeadingStyle1 :title="title" :is-left="true" />
            <p class="description">{{ description }}</p>
            <nuxt-link class="services__btn" :to="link">{{
              btnText
            }}</nuxt-link>
          </div>
          <div class="services__image">
            <service-card-style-20 :source-url="sourceUrl" alt-text="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services20',
  props: {
    isreverse: { type: Boolean, default: false },
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    sourceUrl: { type: String, default: '' },
    btnText: { type: String, default: '' },
    link: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
