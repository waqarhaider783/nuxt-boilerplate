<template>
  <footer class="shapingnutrition-footer">
    <div class="wrapper">
      <div v-if="columns" class="flex">
        <div class="column-12 offsetdiv"></div>
        <div class="flex shapingnutrition-quickLinks">
          <div v-for="(column, idx) in columns" :key="idx" class="footerLinks">
            <h5 class="title font-weight--light alignment--left">
              {{ column.titleStyle5 }}
            </h5>
            <ul>
              <li
                v-for="(item, index) in column.menuItemsStyle5 &&
                column.menuItemsStyle5"
                :key="index"
              >
                <a :href="item.urlStyle5 && item.urlStyle5">
                  {{ item.nameStyle5 }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bottom" class="shapingnutrition-copyright">
      <div class="wrapper">
        <div class="flex copyright-main">
          <nuxt-link v-if="bottom.footerLogoStyle5" class="footer-logo" to="/"
            ><img
              :src="bottom.footerLogoStyle5.sourceUrl"
              :alt="bottom.footerLogoStyle5.altText"
          /></nuxt-link>
          <div
            v-if="bottom.footerPaymetLogo && paymentMethod"
            class="cards-accepts"
          >
            <img
              :src="bottom.footerPaymetLogo.sourceUrl"
              :alt="bottom.footerPaymetLogo.altText"
            />
          </div>
          <div class="copyright-text">{{ bottom.copyrightStyle5 }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    bottom: {
      type: Object,
      default: () => {},
    },
    paymentMethod: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
