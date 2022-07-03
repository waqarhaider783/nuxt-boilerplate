<template>
  <div class="product-card">
    <div class="product-card-inner">
      <div ref="image" class="upper">
        <div class="image">
          <img
            src="~/assets/images/barterup/product.png"
            width="410"
            height="310"
            :alt="altText"
          />
        </div>
        <span class="status" :class="{ fullfilled2: fullFilled2 }"
          >swapped</span
        >
        <i class="bookmark" :class="{ active: save2 }" @click="save2 = !save2">
          <font-awesome-icon :icon="['far', 'bookmark']" />
          <font-awesome-icon :icon="['fas', 'bookmark']" />
          <div class="bg"></div>
        </i>
      </div>
      <div ref="info" class="info">
        <p class="name">{{ name }}</p>
        <div class="actions">
          <div
            class="action-wrp"
            :class="{ active: like2 }"
            @click="like2 = !like2"
          >
            <i class="like-btn">
              <font-awesome-icon :icon="['far', 'heart']" />
              <font-awesome-icon :icon="['fas', 'heart']" />
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardStyle10',

  props: {
    name: {
      type: String,
      default: 'Axe Black',
    },
    img: {
      type: String,
      default: '~/assets/images/webp/product1.webp',
    },
    altText: {
      type: String,
      default: 'Alt Text',
    },
    status: {
      type: String,
      default: 'Slightly Used',
    },
  },

  data() {
    return {
      save2: false,
      like2: false,
      fullFilled2: false,
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
