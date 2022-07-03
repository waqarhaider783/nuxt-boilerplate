<template>
  <div>
    <swiper class="swiper" :class="bg && 'bg'" :options="swiperOptions">
      <swiper-slide
        v-for="(item, index) in $attrs[attrKey]"
        :key="index"
        class="swiper__slide"
      >
        <component :is="childComponent" :[attrKey]="item"></component>
      </swiper-slide>

      <div
        v-if="$attrs[attrKey] && $attrs[attrKey].length > 3"
        slot="pagination"
        class="swiper-pagination swiper-pagination-white"
      ></div>

      <div
        v-if="$attrs[attrKey] && $attrs[attrKey].length > 3"
        slot="button-prev"
        class="swiper-button-prev swiper-button-white"
      ></div>

      <div
        v-if="$attrs[attrKey] && $attrs[attrKey].length > 3"
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
  name: 'SliderStyle1',

  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    childComponent: {
      type: [String, Object],
      required: true,
    },
    attrKey: {
      type: String,
      required: true,
    },

    // couponData: {
    //   type: Array,
    //   default() {
    //     return []
    //   },
    // },
  },

  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 769px
          769: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
