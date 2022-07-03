<template>
  <section class="section">
    <Heading-style-1 :title="title" :sub-title="subTitle" />
    <div class="section padding-bottom-none">
      <sliders-style-1
        child-component="services-card-style-12"
        :service-data="serviceData"
        attr-key="service-data"
        v-bind="$attrs"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services12',
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
