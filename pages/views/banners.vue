<template>
  <div>
    <div class="section">
      <Heading-style-1 title="Banner Style 1" />
      <banner-style-1
        :title="bannerStyle1 && bannerStyle1.bannerHeading"
        :sub-title="bannerStyle1 && bannerStyle1.bannerDescription"
        :source-url="
          bannerStyle1 &&
          bannerStyle1.bannerImage &&
          bannerStyle1.bannerImage.sourceUrl
        "
        :alt-text="
          bannerStyle1 &&
          bannerStyle1.bannerImage &&
          bannerStyle1.bannerImage.altText
        "
        :btn-text-one="bannerStyle1 && bannerStyle1.buttonTxtOne"
        :btn-link-one="bannerStyle1 && bannerStyle1.buttonLinkOne"
        :btn-text-two="bannerStyle1 && bannerStyle1.buttonTxtTwo"
        :btn-link-two="bannerStyle1 && bannerStyle1.buttonLinkTwo"
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Banner Style 2" />
      <banner-style-2
        :banner-data="bannerStyle2 && bannerStyle2.bannerStyle2"
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Banner Style 3" />
      <banner-style-3
        :title="bannerStyle3 && bannerStyle3.heading"
        :sub-title="bannerStyle3 && bannerStyle3.subHeading"
        :source-url="
          bannerStyle3 && bannerStyle3.image && bannerStyle3.image.sourceUrl
        "
        :alt-text="
          bannerStyle3 && bannerStyle3.image && bannerStyle3.image.altText
        "
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Banner Style 4" />
      <banner-style-4
        :source-url="
          bannerStyle4 && bannerStyle4.image && bannerStyle4.image.sourceUrl
        "
        :alt-text="
          bannerStyle4 && bannerStyle4.image && bannerStyle4.image.altText
        "
        :contents="bannerStyle4 && bannerStyle4.contentBox"
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Banner Style 5" />
      <banner-style-5
        :title="bannerStyle5 && bannerStyle5.headingStyle5"
        :sub-title="bannerStyle5 && bannerStyle5.subHeadingStyle5"
        :description="bannerStyle5 && bannerStyle5.descriptionStyle5"
        :source-url="
          bannerStyle5 &&
          bannerStyle5.imageStyle5 &&
          bannerStyle5.imageStyle5.sourceUrl
        "
        :alt-text="
          bannerStyle5 &&
          bannerStyle5.imageStyle5 &&
          bannerStyle5.imageStyle5.altText
        "
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Banner Style 6" />
      <banner-style-6
        :title="bannerStyle6 && bannerStyle6.headingStyle6"
        :sub-title="bannerStyle6 && bannerStyle6.subHeadingStyle6"
        :source-url="
          bannerStyle6 &&
          bannerStyle6.imageStyle6 &&
          bannerStyle6.imageStyle6.sourceUrl
        "
        :alt-text="
          bannerStyle6 &&
          bannerStyle6.imageStyle6 &&
          bannerStyle6.imageStyle6.altText
        "
      />
    </div>

    <div class="container section">
      <Heading-style-1 title="Banner Style 7" />
      <div class="grid-column-2">
        <banner-style-7
          v-for="(item, index) in bannerStyle7 && bannerStyle7.images"
          :key="index"
          :source-url="item && item.image && item.image.sourceUrl"
          :alt-text="item && item.image && item.image.altText"
          :url-link="item && item.linkStyle7"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_BANNER } from '~/store/types'
export default {
  name: 'BannerStyles',

  async asyncData({ store }) {
    const [
      {
        bannerStyle1,
        bannerStyle2,
        bannerStyle3,
        bannerStyle4,
        bannerStyle5,
        bannerStyle6,
        bannerStyle7,
      },
    ] = await Promise.all([store.dispatch(`views/${GET_BANNER}`)])

    return {
      bannerStyle1,
      bannerStyle2,
      bannerStyle3,
      bannerStyle4,
      bannerStyle5,
      bannerStyle6,
      bannerStyle7,
    }
  },
}
</script>

<style></style>
