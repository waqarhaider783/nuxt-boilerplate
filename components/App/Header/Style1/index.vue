<template>
  <header class="header">
    <div class="header__top" :style="{ backgroundImage: `url('${backgroundImage}')` }">
      <div class="header__wrapper wrapper">
        <div class="header__flex">
          <span class="header__icons header__icons--bars" @click="toggleSideNav"
            ><font-awesome-icon :icon="['fa', 'bars']"
          /></span>

          <div class="header__logoBox">
            <nuxt-link :to="{ path: '/' }">
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

          <span
            class="header__icons header__icons--search"
            @click="toggleSearch"
            ><font-awesome-icon :icon="['fa', 'search']"
          /></span>

          <div
            class="search__panel"
            :class="{ 'search__panel--active': searchPanelActive }"
          >
            <div class="search__field">
              <div class="search__input">
                <span class="search__icon">
                  <font-awesome-icon :icon="['fa', 'search']" />
                </span>
                <input type="text" placeholder="eg Home Depot or iPad" />
              </div>
              <button type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav
      class="header__navigation"
      :class="{ 'header__navigation--open': mobileSideNavOpen }"
    >
      <div class="header__navigation__closeBtn" @click="toggleSideNav">
        <font-awesome-icon :icon="['fa', 'times']" />
      </div>
      <div class="header__navigation__wrapper wrapper">
        <nuxt-link to="#" class="header__navigation__links"
          >Top Stores</nuxt-link
        >
        <nuxt-link to="#" class="header__navigation__links"
          >Vape Reviews</nuxt-link
        >
        <nuxt-link to="#" class="header__navigation__links"
          >Vape Guides</nuxt-link
        >
        <nuxt-link to="#" class="header__navigation__links"
          >Vape Deals</nuxt-link
        >
        <nuxt-link to="#" class="header__navigation__links"
          >Best Products</nuxt-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
import { GET_LOGO, GET_HEADERS } from '~/store/types'

export default {
  name: 'HeaderStyle1',

  data() {
    return {
      logo: {},
      backgroundImage: '',
      mobileSideNavOpen: false,
      searchPanelActive: false,
    }
  },

  async fetch() {
    const [myLogo, headers] = await Promise.all([
     this.$store.dispatch(`views/${GET_LOGO}`),
     this.$store.dispatch(`views/${GET_HEADERS}`),
    ])

    this.logo = myLogo
    this.backgroundImage = headers?.headerStyle1?.headerBgImg?.sourceUrl
  },

  methods: {
    toggleSideNav() {
      this.mobileSideNavOpen = !this.mobileSideNavOpen
    },

    toggleSearch() {
      this.searchPanelActive = !this.searchPanelActive
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
