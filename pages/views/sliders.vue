<template>
  <div>
    <!-- 1 -->
    <div class="section">
      <Heading-style-1 title="Slider Style 1" />
      <slider-style-1
        child-component="coupon-card-style-3"
        :coupon-data="couponsData"
        attr-key="coupon-data"
        v-bind="$attrs"
      />
    </div>

    <!-- 2 -->
    <div class="section">
      <div class="wrapper">
        <Heading-style-1 title="Slider Style 2" />
        <slider-style-2 :images="structureImages && structureImages" />
      </div>
    </div>

    <!-- 3 -->
    <div class="section">
      <Heading-style-1 title="Slider Style 3" />
      <slider-style-3
        child-component="coupon-card-style-3"
        :coupon-data="couponsData"
        attr-key="coupon-data"
        v-bind="$attrs"
      />
    </div>

    <!-- 4 (v1) -->
    <div class="section">
      <Heading-style-1 title="Slider Style 4 (v1)" />
      <slider-style-4 :images="images" :loop="true" />
    </div>

    <!-- 4 (v2) -->
    <div class="section">
      <Heading-style-1 title="Slider Style 4 (v2)" />
      <slider-style-4
        :images="images"
        :navigation="true"
        :pagination="true"
        :loop="true"
      />
    </div>

    <!-- 4 (v3) -->
    <div class="section">
      <Heading-style-1 title="Slider Style 4 (v3)" />
      <slider-style-4 :images="images" :navigation="true" />
    </div>

    <!-- 4 (v4) -->
    <div class="section">
      <Heading-style-1 title="Slider Style 4 (v4)" />
      <slider-style-4 :images="images" :pagination="true" />
    </div>
  </div>
</template>

<script>
import { GET_SLIDERS, GET_COUPONS } from '~/store/types'
export default {
  name: 'Views',

  async asyncData({ store }) {
    const [sliders, couponsData] = await Promise.all([
      store.dispatch(`views/${GET_SLIDERS}`),
      store.dispatch(`views/${GET_COUPONS}`),
    ])
    return { sliders, couponsData }
  },

  data() {
    return {
      images: [
        {
          sourceUrl:
            'https://image.freepik.com/free-vector/abstract-dotted-banner-background_1035-18160.jpg',
          altText: '1',
        },
        {
          sourceUrl:
            'https://image.freepik.com/free-vector/red-black-halftone-pattern-banner-background_1035-17987.jpg',
          altText: '2',
        },
        {
          sourceUrl:
            'https://image.freepik.com/free-vector/abstract-red-particles-digital-technology-background_1017-23148.jpg',
          altText: '3',
        },
        {
          sourceUrl:
            'https://as1.ftcdn.net/v2/jpg/02/68/48/86/1000_F_268488616_wcoB2JnGbOD2u3bpn2GPmu0KJQ4Ah66T.jpg',
          altText: '4',
        },
        {
          sourceUrl:
            'https://png.pngtree.com/background/20210706/original/pngtree-poster-simple-abstrac-geometry-purple-background-picture-image_32660.jpg',
          altText: '5',
        },
      ],
    }
  },

  computed: {
    structureImages() {
      const sliderTwoData = this.sliders.sliderStyle2.slideStyle2
      const sliderTwoImages = sliderTwoData.map(
        (data) => data.imageStyle.sourceUrl
      )
      return sliderTwoImages
    },
  },
}
</script>

<style></style>
