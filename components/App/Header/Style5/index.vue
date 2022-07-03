<template>
  <header class="header">
    <div class="header__top container">
      <div class="header__top__grid">
        <!-- Sidebar Menu Icon & Text For Mobiles -->
        <div
          class="mobileMenu"
          :class="{ 'mobileMenu--opened': showMobileNav }"
          @click="showMobileNavbar()"
        >
          <span class="mobileMenu__icon">
            <font-awesome-icon
              :icon="showMobileNav ? ['fas', 'times'] : ['fas', 'bars']"
            />
          </span>
          <span class="mobileMenu__text">menu</span>
        </div>

        <!-- Logo -->
        <nuxt-link to="/" class="header__logo">
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
        </nuxt-link>

        <!-- Icons & Their Dropdowns -->
        <div class="header__icons">
          <ul class="header__icons__list">
            <li>
              <span class="header__icon" @click="toggleSearchBackdrop">
                <font-awesome-icon :icon="['fas', 'search']" />
              </span>
            </li>
            <li>
              <span class="header__icon accountIcon">
                <font-awesome-icon :icon="['fas', 'user']" />
              </span>

              <!-- Accounts/ Login Dropdown -->
              <widget-login-style-1 />
            </li>

            <li>
              <span class="header__icon cartIcon">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" />
                <span class="cartIcon__counter">0</span>
              </span>

              <!-- Card Dropdown -->
              <widget-cart-style-1 />
            </li>
          </ul>

          <!-- Search Input -->
          <div class="header__search">
            <div
              class="header__search__backdrop"
              :class="{ 'header__search__backdrop--show': showSearchBackdrop }"
            >
              <div class="header__search__wrap">
                <form action="" class="header__search__form">
                  <div class="header__search__group">
                    <input type="text" placeholder="Search..." />
                    <span
                      class="header__search__icon header__search__icon--times"
                      @click="toggleSearchBackdrop"
                    >
                      <font-awesome-icon :icon="['fas', 'times']" />
                    </span>
                    <span
                      class="header__search__icon header__search__icon--search"
                      @click="toggleSearchBackdrop"
                    >
                      <font-awesome-icon :icon="['fas', 'search']" />
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Links For Desktop -->
    <div class="header__tabs" :class="{ 'header__tabs--show': showMobileNav }">
      <nuxt-link v-for="(link, index) in links" :key="index" :to="link.url">{{
        link.title
      }}</nuxt-link>
    </div>
  </header>
</template>

<script>
import { GET_LOGO } from '~/store/types'

export default {
  name: 'HeaderStyle5',

  props: {
    links: {
      type: Array,
      default() {
        return [
          {
            title: 'Home',
            url: '#',
          },
          {
            title: 'Home',
            url: '#',
          },
          {
            title: 'Home',
            url: '#',
          },
          {
            title: 'Home',
            url: '#',
          },
          {
            title: 'Home',
            url: '#',
          },
          {
            title: 'Home',
            url: '#',
          },
          {
            title: 'Home',
            url: '#',
          },
          {
            title: 'Home',
            url: '#',
          },
        ]
      },
    },
  },

  data() {
    return {
      logo: {},
      showMobileNav: false,
      showSearchBackdrop: false,
    }
  },

  async fetch() {
    this.logo = await this.$store.dispatch(`views/${GET_LOGO}`)
  },

  methods: {
    showMobileNavbar() {
      this.showMobileNav = !this.showMobileNav
    },
    toggleSearchBackdrop() {
      this.showSearchBackdrop = !this.showSearchBackdrop
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
