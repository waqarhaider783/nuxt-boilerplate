<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__cards">
        <div class="services__image">
          <service-card-style-14 :source-url="sourceUrl" />
        </div>
        <div class="services__detail">
          <HeadingStyle2 :title="title" :sub-title="subTitle" :is-left="true" />
          <p class="description">{{ description }}</p>
          <ul class="services__list">
            <li
              v-for="({ cardStyle14ListItem }, index) in listItem"
              :key="index"
            >
              {{ cardStyle14ListItem }}
            </li>
          </ul>
          <nuxt-link class="services__btn" :to="link">{{ btnText }}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services14',
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    btnText: { type: String, default: '' },
    link: { type: String, default: '' },
    description: { type: String, default: '' },
    sourceUrl: { type: String, default: '' },
    listItem: {
      type: Array,
      default() {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
