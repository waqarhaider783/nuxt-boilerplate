<template>
    <div class="mainBanner">
      <div class="mainBanner__content" :style="backgroundImage"> 
        <div class="container ">
          <h3 class="mainBanner__subtitle">{{subTitle}}</h3>
          <h1 class="mainBanner__title">{{title}}</h1>
          <!-- <p class="mainBanner__slogen">You've come to right place</p> -->
          <!-- <app-button :icon="['fa', 'arrow-right']"  @click="routeToProduct">Sleep On It</app-button> -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'BannerStyle6',
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
  },

  computed: {
    backgroundImage() {
      const image = this.sourceUrl
      return { backgroundImage: `url(${image})` }
    },
  },
  
  methods:{
    routeToProduct(){
      this.$router.push('/products')
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss" /></style>
