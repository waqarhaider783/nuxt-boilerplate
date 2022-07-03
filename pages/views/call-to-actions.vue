<template>
  <div>
    <div class="container mobile-full">
      <div class="section">
        <Heading-style-1 title="Call To Action Style2" />
        <call-to-action-style2 />
      </div>
    </div>
    <div class="container">
      <div class="section">
        <Heading-style-1 title="Call To Action Style1" />
        <call-to-action-style1
          :title="callToActionStyle1 && callToActionStyle1.title"
          :description="callToActionStyle1 && callToActionStyle1.description"
          :btn-text="callToActionStyle1 && callToActionStyle1.buttonTitle"
          :btn-url="callToActionStyle1 && callToActionStyle1.buttonUrl"
          :source-url="
            callToActionStyle1 &&
            callToActionStyle1.image &&
            callToActionStyle1.image.sourceUrl
          "
          :alt-text="
            callToActionStyle1 &&
            callToActionStyle1.image &&
            callToActionStyle1.image.altText
          "
        />
      </div>
    </div>
    <div class="container">
      <div class="section">
        <Heading-style-1 title="Call To Action Style1 Reverse" />
        <call-to-action-style1
          :title="callToActionStyle1 && callToActionStyle1.title"
          :description="callToActionStyle1 && callToActionStyle1.description"
          :btn-text="callToActionStyle1 && callToActionStyle1.buttonTitle"
          :btn-url="callToActionStyle1 && callToActionStyle1.buttonUrl"
          :source-url="
            callToActionStyle1 &&
            callToActionStyle1.image &&
            callToActionStyle1.image.sourceUrl
          "
          :alt-text="
            callToActionStyle1 &&
            callToActionStyle1.image &&
            callToActionStyle1.image.altText
          "
          :reverse="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_CTA } from '~/store/types'
export default {
  name: 'CallToActions',
  props: {
    data: {
      type: Object,
      default: () => {},
      span1: {
        type: String,
        default: 'download the',
      },
      heading: {
        type: String,
        default: 'barterrup',
      },
      span2: {
        type: String,
        default: 'media kit',
      },
    },
  },
  async asyncData({ store }) {
    const [{ callToActionStyle1 }] = await Promise.all([
      store.dispatch(`views/${GET_CTA}`),
    ])

    return { callToActionStyle1 }
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
