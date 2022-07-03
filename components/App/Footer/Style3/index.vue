<template>
  <div class="gm-footer">
    <div class="flex gm-footer__top wrapper">
      <div class="gm-footer__top__info flex rowbar">
        <img
          :src="about.logoStyle3 && about.logoStyle3.sourceUrl"
          :alt="about.logoStyle3 && about.logoStyle3.altText"
        />
        <p>
          {{ about.descriptionStyle3 }}
        </p>
        <p class="copy">{{ about.copyRightStyle3 }}</p>
      </div>
      <div v-if="links" class="gm-footer__top__links rowbar">
        <h2>{{ links.titleStyle3 }}</h2>
        <div class="flex rowbar">
          <ul class="custom-links">
            <li v-for="(link, idx) of links.links.slice(0, 4)" :key="idx">
              <nuxt-link :to="link.url">
                {{ link.item }}
              </nuxt-link>
            </li>
          </ul>
          <ul class="custom-links">
            <li v-for="(link, idx) of links.links.slice(4, 8)" :key="idx">
              <nuxt-link :to="link.url">
                {{ link.item }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <p class="copy-mobile">{{ about.copyRightStyle3 }}</p>
      </div>
      <div v-if="social" class="gm-footer__top__connect">
        <h2>{{ social.headingStyle3 }}</h2>
        <p>{{ social.subHeadingStyle3 }}</p>
        <div class="gm-footer__top__connect--input">
          <input placeholder="EMAIL ADDRESS" />
          <div class="gm-footer__top__connect--input__submit">
            <font-awesome-icon :icon="['fab', 'telegram-plane']" />
          </div>
        </div>
        <ul
          v-if="social.socialMediaHandleStyle3"
          class="gm-footer__top__connect__social-links"
        >
          <li
            v-for="(handle, idx) in social.socialMediaHandleStyle3"
            :key="idx"
          >
            <nuxt-link :to="handle.urlStyle3 && handle.urlStyle3">
              <font-awesome-icon
                :icon="['fab', handle.titleStyle3 && handle.titleStyle3]"
              />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterStyle3',
  props: {
    about: {
      type: Object,
      default: () => {},
    },
    links: {
      type: Object,
      default: () => {},
    },
    social: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
