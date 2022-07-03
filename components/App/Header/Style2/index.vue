<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <div class="header__flex">
        <div class="header__logoBox">
          <nuxt-link  :to="{ path: '/' }">
            <img
              :src="
                logo &&
                logo.sourceUrl &&
                logo.mediaDetails &&
                logo.mediaDetails &&
                $imageFN.findCompatibleSizeImg(
                  logo.mediaDetails.sizes,
                  logo.sourceUrl
                )
              "
              :alt="logo && logo.altText"
              class="header__logo"
            />
          </nuxt-link>
        </div>

        <nav class="header__navigation">
          <span class="header__navigation__links">
            <nuxt-link to="#">Category</nuxt-link>
          </span>
          <span class="header__navigation__links" n
            ><nuxt-link to="#">Coupon</nuxt-link></span
          >
          <span class="header__navigation__links" n
            ><nuxt-link to="#">Guide</nuxt-link></span
          >
          <span class="header__navigation__links" n
            ><nuxt-link to="#">Blog</nuxt-link></span
          >
          <span class="header__navigation__links" n
            ><nuxt-link to="#">Contact Us</nuxt-link></span
          >
        </nav>

        <span class="header__icons"
          ><font-awesome-icon :icon="['fa', 'bars']"
        /></span>

        <div
          class="header__search"
          :class="{ 'header__search--active': searchActive }"
        >
          <div class="header__search__wrapper">
            <input
              type="text"
              placeholder="search"
              class="header__search__input"
              :class="{ 'header__search__input--active': searchActive }"
            />
            <span class="header__search__icon" @click="expandSearch"
              ><font-awesome-icon :icon="['fa', 'search']"
            /></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { GET_LOGO } from '~/store/types'

export default {
  name: 'HeaderStyle2',

  data() {
    return {
      logo: {},
      searchActive: false,
    }
  },

  async fetch() {
    this.logo = await this.$store.dispatch(`views/${GET_LOGO}`)
  },

  methods: {
    expandSearch() {
      this.searchActive = !this.searchActive
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
