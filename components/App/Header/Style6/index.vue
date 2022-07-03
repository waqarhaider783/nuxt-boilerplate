<template>
  <div>
    <header class="header" :class="{ 'header--mobileSidebarOpen': isOpen }">
      <div class="container">
        <div class="navbar">
          <div
            class="navbar__left"
            :class="{ 'navbar__left--mobileSidebarOpen': isOpen }"
          >
            <nuxt-link to="/">
              <figure>
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
                  class="navbar__logo"
                />
                  <!-- width="160"
                  height="29" -->
              </figure>
            </nuxt-link>
          </div>
          <div class="navbar__right">
            <nav class="navbar__nav">
              <nuxt-link to="/" class="navbar__links">Home</nuxt-link>
              <nuxt-link to="/products" class="navbar__links"
                >Products</nuxt-link
              >
              <!-- <nuxt-link to="/teams" class="navbar__links">Teams</nuxt-link> -->
            </nav>

            <span
              class="navbar__icons"
              :class="{ 'navbar__icons--mobileSidebarOpen': isOpen }"
            >
              <font-awesome-icon :icon="['fa', 'search']" />
            </span>
            <span
              class="navbar__icons navbar__icons--sidebarToggler"
              :class="{ 'navbar__icons--secondary': isOpen }"
              @click="$emit('toggle-nav')"
            >
              <font-awesome-icon
                :icon="isOpen ? ['fas', 'times'] : ['fas', 'bars']"
              />
            </span>
          </div>
        </div>
      </div>
    </header>
    <div
      class="mobileSidebar"
      :class="{ 'mobileSidebar--visible': isOpen }"
      @click="$emit('toggle-nav')"
    >
      <nav>
        <ul class="mobileSidebar__list">
          <li @click="$emit('toggle-nav')">
            <nuxt-link to="/" class="mobileSidebar__links">Home</nuxt-link>
          </li>
          <li @click="$emit('toggle-nav')">
            <nuxt-link to="/products" class="mobileSidebar__links"
              >product</nuxt-link
            >
          </li>
          <li @click="$emit('toggle-nav')">
            <nuxt-link to="/products" class="mobileSidebar__links"
              >Comparisions</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { GET_LOGO } from '~/store/types'

export default {
  name: 'Header',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      logo: {},
    }
  },

  async fetch() {
    this.logo = await this.$store.dispatch(`views/${GET_LOGO}`)
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
