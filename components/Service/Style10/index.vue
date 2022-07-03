<template>
  <section class="services section">
    <div class="services__wrapper">
      <div class="services__top">
        <Heading-style-1 :title="title" :sub-title="subTitle" />
      </div>
      <div class="section padding-bottom-none">
        <sliders-style-3
          child-component="services-card-style-10"
          attr-key="service-data"
          :service-data="serviceData"
          v-bind="$attrs"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services19',
  props: {
    serviceData: {
      type: Array,
      required: true,
    },
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
