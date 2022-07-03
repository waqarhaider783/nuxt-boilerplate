<template>
  <div class="productPreview" :class="variant === 'popup' ? ' ' : ''">
    <div class="productPreview__wrapper">
      <div class="productPreview__left">
        <div class="productPreview__thumbnails">
          <picture v-for="(thumbnail, index) in thumbnails" :key="index">
            <img
              :src="thumbnail"
              alt="Product"
              @click="changePreviewImage(thumbnail)"
            />
          </picture>
        </div>
        <div class="productPreview__previewImage">
          <div class="productPreview__previewImage__wrapper">
            <div class="productPreview__icons">
              <span><font-awesome-icon :icon="['far', 'heart']" /></span>
              <span class="onlyMobile"><font-awesome-icon :icon="['fas', 'share-alt']" /></span>
            </div>
            <picture>
              <img :src="previewUrl" alt="Product" />
            </picture>
          </div>
        </div>
      </div>
      <div class="productPreview__right">
        <div class="productPreview__infoTop">
          <!-- <div class="productPreview__infoTop__flex">
            <span class="productPreview__category">B</span>
            <span class="productPreview__time mobile">2 Days ago</span>
          </div> -->

          <div class="productPreview__infoTop__row1">
            <span class="productPreview__category">B</span>
            <h2 class="productPreview__title">Nike Shoes</h2>
          </div>

          <!-- <span class="productPreview__category">B</span>
          <h2 class="productPreview__title">Nike Shoes</h2> -->

          <div class="productPreview__infoTop__row2">
            <div class="productPreview__user">
              <span class="productPreview__user__icon">
                <i><font-awesome-icon :icon="['fas', 'user']" /></i>
              </span>
              <h3 class="productPreview__user__name">Chester</h3>
            </div>
            <span class="productPreview__time desktop">2 Days ago</span>
          </div>

          <div class="productPreview__infoTop__row3">
            <span class="productPreview__tag white">laptop</span>
            <span class="productPreview__tag transparent">footwear</span>
          </div>
        </div>

        <div class="productPreview__infoMid">
          <p>
            We firmly believe that a company's core values are the foundation
            and heart of its business. At Innovation Department, we champion
            taking ownership, staying transparent, having grit, being adaptable,
          </p>
        </div>

        <div class="productPreview__infoBottom">
          <div class="productPreview__infoBottom__row1">
            <div class="tag__wrapper">
              <span class="productPreview__tag thin">swap</span>
              <span class="productPreview__tag thin">shoes</span>
            </div>
          </div>

          <div class="productPreview__infoBottom__row2">
            <label for="quantity">Quantity</label>
            <input id="quantity" v-model="quantity" type="number" />
          </div>

          <div class="productPreview__infoBottom__row3">
            <span>Swap with</span>
            <div class="tag__wrapper">
              <span class="productPreview__tag thin light">laptop</span>
              <span class="productPreview__tag thin light">footwear</span>
            </div>
          </div>
        </div>

        <div class="productPreview__cta">
          <anchor-style-6 title="Chat"></anchor-style-6>
          <anchor-style-7 title="Add to Favorite"></anchor-style-7>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPreviewStyle3',
  props: {
    variant: {
      type: String,
      default: '',
    },
    thumbnails: {
      type: Array,
      default() {
        return [
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        ]
      },
    },
    quantityAvailable: {
      type: Number,
      default: 10,
    },
  },

  data() {
    return {
      previewUrl: this.thumbnails[0],
      quantity: 0,
    }
  },

  methods: {
    changePreviewImage(url) {
      this.previewUrl = url
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
