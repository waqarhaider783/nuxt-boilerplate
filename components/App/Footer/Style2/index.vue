<template>
  <footer class="footer-cb">
    <div class="wrapper">
      <div class="logo">
        <nuxt-link to="#">
          <img :src="image" :alt="imageAlt" />
        </nuxt-link>
      </div>
      <div class="staticFooter">
        <ul>
          <li v-for="(link, idx) of menu && menu" :key="idx">
            <nuxt-link :to="link.urlStyle2">{{ link.itemStyle2 }}</nuxt-link>
          </li>
        </ul>
      </div>

      <ul class="socialIcons">
        <li v-for="(link, idx) in social && social" :key="idx">
          <nuxt-link :to="link.urlStyle2 && link.urlStyle2">
            <font-awesome-icon :icon="['fab', link.itemStyle2]" />
          </nuxt-link>
        </li>
      </ul>
      <div class="copyRight-cb">
        <p>{{ copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterStyle2',
  props: {
    image: { type: String, default: '' },
    imageAlt: { type: String, default: '' },
    copyright: { type: String, default: '' },
    menu: { type: Array, default: () => [] },
    social: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
