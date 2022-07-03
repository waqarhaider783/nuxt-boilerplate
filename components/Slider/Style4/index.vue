<template>
  <div>
    <swiper class="swiper" :options="swiperOptions">
      <swiper-slide
        v-for="(image, index) in images"
        :key="index"
        class="swiper__slide"
      >
        <picture>
          <img :src="image && image.sourceUrl" :alt="image && image.altText" />
        </picture>
      </swiper-slide>

      <div
        v-if="images && images.length > 1 && pagination"
        slot="pagination"
        class="swiper-pagination swiper-pagination-white"
      ></div>

      <div
        v-if="images && images.length > 1 && navigation"
        slot="button-prev"
        class="swiper-button-prev swiper-button-white"
      ></div>

      <div
        v-if="images && images.length > 1 && navigation"
        slot="button-next"
        class="swiper-button-next swiper-button-white"
      ></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SliderStyle4',

  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    images: {
      type: [Array, Object],
      required: true,
    },
    navigation: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Boolean,
      default: false,
    },
    loop: {
      type: Boolean,
      default: false,
    },
    mousewheel: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: this.loop,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        mousewheel: this.mousewheel,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
