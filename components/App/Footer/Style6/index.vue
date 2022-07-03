<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__left">
          <nuxt-link to="#">
            <figure v-if="image" class="footer__logo">
              <img
                :src="image.sourceUrl && image.sourceUrl"
                :alt="image.altText && image.altText"
              />
              />
            </figure></nuxt-link
          >
          <div class="footer__text">
            <p>
              {{ description }}
            </p>

            <p>{{ copyright }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    copyright: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: Object, default: () => {} },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
