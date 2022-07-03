<template>
  <div>
    <footer class="pet-footer">
      <div class="pet-quickLinks">
        <div class="wrapper">
          <div class="flex rowbar">
            <div class="content-footer">
              <nuxt-link class="footer-logo" to="#">
                <img
                  :src="data.imageStyle1 && data.imageStyle1.sourceUrl"
                  :alt="data.imageStyle1 && data.imageStyle1.altText"
                />
              </nuxt-link>
              <p>
                {{ data.descriptionStyle1 }}
              </p>
              <div class="copyright-text">
                {{ data.copyrightStyle1 }}
              </div>
            </div>
            <app-footer-style1-footer-links
              v-for="(link, idx) in links && links"
              :key="idx"
              :footer-data="link.menuItemsStyle1"
              :title="link.titleStyle1"
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      image: { type: String, default: '' },
      imageAlt: { type: String, default: '' },
      type: Object,
      default: () => {},
    },
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
