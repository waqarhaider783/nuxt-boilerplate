<template>
  <div class="container">
    <div class="section">
      <Heading-style-1 title="about-content-style-1" />
      <about-content-style-1
        :heading="aboutContentStyle1 && aboutContentStyle1.titleStyle1"
        :description="
          aboutContentStyle1 && aboutContentStyle1.descriptionStyle1
        "
      />
    </div>

    <div class="section">
      <Heading-style-1 title="about-card-style-1" />
      <about-card-style-1
        :heading="aboutCardStyle1 && aboutCardStyle1.title"
        :description="aboutCardStyle1 && aboutCardStyle1.cardDescription"
        :source-url="
          aboutCardStyle1 &&
          aboutCardStyle1.image &&
          aboutCardStyle1.image.sourceUrl
        "
        :alt-text="
          aboutCardStyle1 &&
          aboutCardStyle1.image &&
          aboutCardStyle1.image.altText
        "
      />
    </div>

    <div class="section">
      <Heading-style-1 title="about-content-style-1" />
      <about-content-style-1
        :heading="aboutContentStyle1 && aboutContentStyle1.titleStyle1"
        :description="
          aboutContentStyle1 && aboutContentStyle1.descriptionStyle1
        "
      />
    </div>

    <div class="section">
      <Heading-style-1 title="about-card-style-1 (Reverse)" />
      <about-card-style-1
        :heading="aboutCardStyle1 && aboutCardStyle1.title"
        :description="aboutCardStyle1 && aboutCardStyle1.cardDescription"
        :source-url="
          aboutCardStyle1 &&
          aboutCardStyle1.image &&
          aboutCardStyle1.image.sourceUrl
        "
        :alt-text="
          aboutCardStyle1 &&
          aboutCardStyle1.image &&
          aboutCardStyle1.image.altText
        "
        is-reverse="true"
      />
    </div>

    <div class="section">
      <Heading-style-1 title="about-content-style-2" />
      <about-content-style-2
        :heading="aboutContentStyle2 && aboutContentStyle2.titleStyle2"
        :description="
          aboutContentStyle2 && aboutContentStyle2.descriptionStyle2
        "
      />
    </div>

    <div class="section">
      <Heading-style-1 title="about-content-style-3" />
      <about-content-style-3
        :contents="aboutContentStyle3 && aboutContentStyle3.aboutUs"
      />
    </div>
  </div>
</template>

<script>
import { GET_ABOUT_US } from '~/store/types'
export default {
  name: 'About',

  async asyncData({ store }) {
    const [
      {
        aboutCardStyle1,
        aboutContentStyle1,
        aboutContentStyle2,
        aboutContentStyle3,
      },
    ] = await Promise.all([store.dispatch(`views/${GET_ABOUT_US}`)])

    return {
      aboutCardStyle1,
      aboutContentStyle1,
      aboutContentStyle2,
      aboutContentStyle3,
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
