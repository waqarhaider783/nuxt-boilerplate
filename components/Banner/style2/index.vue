<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      v-for="({image}, index) in bannerData"
      :key="index"
      :style="{backgroundImage: `url(${image.sourceUrl})`}"
    />
    <div
    v-if="bannerData.length > 1"
      slot="pagination"
      class="swiper-pagination swiper-pagination-white"
    ></div>
    <div
    v-if="bannerData.length > 1"
      slot="button-prev"
      class="swiper-button-prev swiper-button-white"
    ></div>
    <div
    v-if="bannerData.length > 1"
      slot="button-next"
      class="swiper-button-next swiper-button-white"
    ></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'BannerStyle2',
  title: 'Fade effect',
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    bannerData: {
      type: { Array, Object },
      default() {
        return {}
      },
    },
  },

  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  height: 300px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 36.4px;
    background-color: var(--whiteTextColor);
  }
}

.swiper {
  height: 360px;

  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
}
</style>
