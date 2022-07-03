<template>
  <header class="header">
    <div class="header__wrapper wrapper">
      <div class="header__main">
        <nuxt-link :to="{ path: '/' }">
          <figure class="header__logo">
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
            />
          </figure>
        </nuxt-link>
        <div class="header__sub">
          <ul class="header__navList">
            <li>
              <nuxt-link :to="{ path: '/' }">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/blogs/' }">Blogs</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/about-us/' }">About Us</nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{ path: '/contact-us/' }">Contact Us</nuxt-link>
            </li>
          </ul>
        </div>
        <span class="header__icons header__icons--bars" @click="toggleSideNav"
          ><font-awesome-icon :icon="['fa', 'bars']"
        /></span>
      </div>
    </div>

    <nav
      class="header__navigation"
      :class="{ 'header__navigation--open': mobileSideNavOpen }"
    >
      <div class="header__navigation__closeBtn" @click="toggleSideNav">
        <font-awesome-icon :icon="['fa', 'times']" />
      </div>
      <div class="header__navigation__wrapper">
        <nuxt-link :to="{ path: '/' }" class="header__navigation__links"
          >Home</nuxt-link
        >
        <nuxt-link :to="{ path: '/blogs/' }" class="header__navigation__links"
          >Blogs</nuxt-link
        >
        <nuxt-link
          :to="{ path: '/about-us/' }"
          class="header__navigation__links"
          >About Us</nuxt-link
        >
        <nuxt-link
          :to="{ path: '/contact-us/' }"
          class="header__navigation__links"
          >Contact Us</nuxt-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
import { GET_LOGO } from '~/store/types'

export default {
  name: 'HeaderStyle3',

  data() {
    return {
      logo: {},
      mobileSideNavOpen: false,
    }
  },

  async fetch() {
    this.logo = await this.$store.dispatch(`views/${GET_LOGO}`)
  },

  methods: {
    toggleSideNav() {
      this.mobileSideNavOpen = !this.mobileSideNavOpen
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
