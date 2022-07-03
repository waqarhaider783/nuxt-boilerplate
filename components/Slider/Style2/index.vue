<template>
  <div class="slider__images">

      <figure class="slider__images__mainImg">
        <img id="main" :src="url" alt="" width="330" height="330" />
      </figure>
      <div class="slider__images__thumbs">
        <img 
          v-for="(image, index) in images" :key="index"
          :src="image"
          width="100"
          height="100"
          @mouseover="(e) => changeImageUrl(image)"
          @mouseleave="mouseLeave()"
        />
      </div>
  </div>
</template>

<script>
export default {
  name: 'SliderStyle2',
  
  props:{
     images: {
      type: Array,
      default() {
        return []
      },
      required: true,
    },
  },
  data() {
    return {
      url: this.images?.length && this.images[0],
    }
  },

  methods: {
    mouseLeave() {
      this.url = this.images[0]
    },
    changeImageUrl(image) {
      this.url = image
    },

    // srcUrl(imgObj) {
    //   const { mediaDetails, sourceUrl } = imgObj
    //   return this?.$imageFN?.findCompatibleSizeImg(
    //     mediaDetails?.sizes,
    //     sourceUrl
    //   )
    // },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" /></style>
