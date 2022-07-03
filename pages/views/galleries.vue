<template>
  <div class="container">
    <div class="section">
      <Heading-style-1 title="Gallery Style1" />
      <gallery-style1
        :images="gallery && gallery.galleryImages"
        :title="gallery && gallery.title"
      />
    </div>
  </div>
</template>

<script>
import { GET_GALLERY } from '~/store/types'
export default {
  name: 'Views',
  async asyncData({ store }) {
    const gallery = await store.dispatch(`views/${GET_GALLERY}`)
    return { gallery }
  },
  // data() {
  //   return {
  //     title: 'GOT INSTA, GOT INSPIRED',
  //     images: [
  //       'instagram-image-1.jpg',
  //       'instagram-image-2.jpg',
  //       'instagram-image-3.jpg',
  //       'instagram-image-4.jpg',
  //       'instagram-image-5.jpg',
  //       'instagram-image-6.jpg',
  //       'instagram-image-7.jpg',
  //       'instagram-image-8.jpg',
  //       'instagram-image-9.jpg',
  //       'instagram-image-10.jpg',
  //     ],
  //   }
  // },
}
</script>

<style lang="scss" scoped src="./index.scss" />
