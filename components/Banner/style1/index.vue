<template>
  <div class="pet-banner-container">
    <div class="banner-image" :style="backgroundImage">
      <div class="content-box">
        <div class="container">
          <div class="text-content">
            <h2>{{ title }}</h2>
            <h1>{{ subTitle }}</h1>
            <div class="cta-buttons">
              <router-link v-if="btnTextOne" :to="btnLinkOne">{{
                btnTextOne
              }}</router-link>
              <router-link v-if="btnTextTwo" :to="btnLinkTwo">{{
                btnTextTwo
              }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerStyle1',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },

    subTitle: {
      type: String,
      default: '',
    },

    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },

    altText: {
      type: String,
      default: '',
    },

    btnTextOne: {
      type: String,
      default: '',
    },

    btnLinkOne: {
      type: String,
      default: '#_',
    },

    btnTextTwo: {
      type: String,
      default: '',
    },

    btnLinkTwo: {
      type: String,
      default: '#_',
    },
  },

  computed: {
    backgroundImage() {
      const image = this.sourceUrl;
      return { backgroundImage: `url(${image})` }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
