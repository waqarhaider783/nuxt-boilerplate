<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__cards">
        <div class="services__card" :class="{ reverse: isreverse }">
          <HeadingStyle1 :title="title" :sub-title="subTitle" :is-left="true" />
          <div class="services__image">
            <service-card-style-13 :source-url="sourceUrl" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services13',
  props: {
    isreverse: { type: Boolean, default: false },
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    sourceUrl: { type: String, default: ' ' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
