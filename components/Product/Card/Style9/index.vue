<template>
  <div class="product-card">
    <div class="product-card-inner">
      <div ref="image" class="upper">
        <div class="image">
          <img src="~/assets/images/barterup/product.png" :alt="altText" />
        </div>
        <span class="status" :class="{ fullfilled: fullFilled }">swapped</span>
        <i class="bookmark" :class="{ active: save }" @click="save = !save">
          <font-awesome-icon :icon="['far', 'bookmark']" />
          <font-awesome-icon :icon="['fas', 'bookmark']" />
          <div class="bg"></div>
        </i>
      </div>
      <div ref="info" class="info">
        <nuxt-link :to="avatarProfile" class="avatar" :title="avatar">
          <img
            ref="avatar"
            src="~/assets/images/barterup/product.png"
            :alt="altText"
            height="60"
            width="60"
          />
        </nuxt-link>
        <p class="name">{{ name }}</p>
        <div class="details">
          <span class="status">{{ status }}</span>
          <span class="posted">{{ posted }}</span>
        </div>
        <p ref="description" class="description">
          {{ description }}
        </p>
        <span class="posted-mobile">{{ posted }}</span>
      </div>
    </div>
    <div class="actions">
      <div class="action-wrp" :class="{ active: like }" @click="like = !like">
        <i class="like-btn">
          <font-awesome-icon :icon="['far', 'heart']" />
          <font-awesome-icon :icon="['fas', 'heart']" />
        </i>
      </div>
      <div class="action-wrp">
        <i class="share">
          <font-awesome-icon :icon="['fas', 'share-alt']" />
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardStyle9',

  props: {
    name: {
      type: String,
      default: 'Axe Black',
    },
    img: {
      type: String,
      default: '~/assets/images/webp/product1.webp',
    },
    posted: {
      type: String,
      default: '2 days ago',
    },
    status: {
      type: String,
      default: 'Slightly Used',
    },
    altText: {
      type: String,
      default: 'Alt Text',
    },
    avatar: {
      type: String,
      default: 'Admin',
    },
    avatarProfile: {
      type: String,
      default: '#_',
    },
    avatarAltText: {
      type: String,
      default: 'Alt Text',
    },
    description: {
      type: String,
      default:
        "We firmly believe that a company's core values are the foundation and heart of its business. At Innovation Department, we champion taking ownership, staying transparent, having grit, being adaptable",
    },
  },

  data() {
    return {
      save: false,
      like: false,
      fullFilled: false,
    }
  },
  mounted() {
    this.setInitialStyles()
  },
  methods: {
    setInitialStyles() {
      const excerptHeight = this.$refs.description.offsetHeight
      const avatarHeight = this.$refs.avatar.offsetHeight / 2
      const infoBottomPadding = window.getComputedStyle(
        this.$refs.info
      ).paddingBottom

      this.$refs.image.setAttribute(
        'style',
        `margin-bottom: calc(${excerptHeight}px - ${avatarHeight}px - 1px)`
      )

      this.$refs.info.setAttribute(
        'style',
        `bottom: calc((${excerptHeight}px + ${infoBottomPadding}) * -1);`
      )
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
