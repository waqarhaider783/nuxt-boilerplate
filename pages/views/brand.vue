<template>
  <div>
    <div class="container">
      <div class="section">
        <Heading-style-1 title="Brand Style 1" />
        <brand-style-1 />
      </div>
    </div>
    <div class="container">
      <div class="section">
        <Heading-style-1 title="Brand Style 2" />
        <brand-style-2
          :source-url="
            brandStyle2 &&
            brandStyle2.brandImageStyle2 &&
            brandStyle2.brandImageStyle2.sourceUrl
          "
          :alt-text="
            brandStyle2 &&
            brandStyle2.brandImageStyle2 &&
            brandStyle2.brandImageStyle2.altText
          "
          :description="brandStyle2 && brandStyle2.paragraphStyle2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_BRANDS } from '~/store/types'
export default {
  name: 'Brand',

  async asyncData({ store }) {
    const [{ brandStyle2 }] = await Promise.all([
      store.dispatch(`views/${GET_BRANDS}`),
    ])

    return { brandStyle2 }
  },
}
</script>

<style></style>
