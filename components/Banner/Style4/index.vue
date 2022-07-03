<template>
  <div class="goldjam-product-banner-main">
    <div class="product-banner-image-wrap" :style="backgroundImage">
      <img
        :src="sourceUrl"
        :alt="altText"
      />
    </div>
    <div class="flex productContent">
      <div class="flex container">
        <div class="flex rwobar product-main-box">
          <div
            v-for="(item, index) in contents"
            :key="index"
            class="individual-product"
          >
            <div class="content">
              <div class="content-inner">
                <div class="title">{{ item.heading }}</div>
                <div class="sub-title">
                  {{ item.description }}
                </div>
                <nuxt-link :to="`${item.btnUrl}/`">{{ item.btnTxt }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerStyle4',
  props: {
    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },

    altText: {
      type: String,
      default: '',
    },

    contents: {
      type: { Array, Object },
      default() {
        return []
      },
      required: true,
    },
  },

  computed: {
    backgroundImage() {
      const image = this.sourceUrl
      return { backgroundImage: `url(${image})` }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
