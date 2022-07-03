<template>
  <header class="header">
    <div class="header__topbar">
      <div class="wrapper">
        <div class="header__topbar__wrapper">
          <div class="header__topbar__dropdown">
            <div class="header__topbar__flag">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAABHNCSVQICAgIfAhkiAAAA5lJREFUSEuNVWlIVFEUPjcTMiWzlNIoNUKxRW3BLJfRoiJIsh+BbYyJGIShFkb9UYdQIVvEwEKtnIpoWiiS+lFEjmiLTqBGhCLk0pSh2Yzzxtnee7d7n/OmmTdvnO6v+84577vnfGdDMMdZeCYjF2HYDxglIwTJ1JR1sA6b1f6RyHU8Qmpo7un1BYHkFJtqjuwbmBi7RgBj5PQcx4NtxgbCzxi3cwAqaNG1S229wKcZc+sJTXVM25dOxVxROWwOYO2sywRjXM+36Mrc//EANzFmGmJSkaZa6w8c8xisZqvH+xiglW/uOS4KXeDUY/KhpIr/Aad2NosNeJb3fABjFYmgigoF8GmzmSbuqWjlC7xMkdcVFxENDR2aNL1xAn6bjMASeqSHwzib5mAWnDEPk0u0L/CYJZH6NycbmUmzwbjn+ql4g5UJpbYcy4HdYofQoBAwWph/b9Akt+iykdRrKS2Lg0Km+8vvT9MoEy8eDhGBhUJx8l57oBgMMya40fHE9QipoI3InWs5zz+W3e5eFbY85eIbdddV7YM0KQUHEhTQeOgc9OuHIPNSoXv1qJBYIe4/iZxTOt6X3lpBddvqC/TDUz+Fu/uxMBaozS2GF/2dMPpnHEanxp1qrKXgpII8jwhOE3h2p1LwNrJir1fiqMBGypEn9HgfP+BNB89rczZkCs2kvKfqezX4IUkK4hucJGkuz93B2z53aIse1Xp1rRQ8NjxK/23yB6Fv1nOhK+U43x2X2qc+WinoeJ43pjUUMlLeKefgZGVLdMLgusjVBvWHFykCuL9qGa14rg+cHygkcsZuHdh8+VikwcIsEp2xmAg4OXvXp/XdUVaFR5TvEmzJrClDJpMlCxD/Vs5zKtsTn9rbeqRSGLdiBO9G+nub3j8LJdMxaO3S6MmcJAVOXLEmvURT1z3rNWmwAEfsf3Xo6ay8zvIdynSvisC4DxASaKt+ebOr7vVdZx9gLdesyxLApd7LzZaYsKjvD/Nr9CvDlm0VHyGhd4xN/VpQcFcVqhv5Gi/KaXfSJeKaiiaGqSfFU0IN/E1FShWPcUDXYG/wb5NhtXtElGsyFQmWcyqKSjG5/sCFhPGYI/M8wBMY1HxLT74o89pENIIiTU2yv2Uhs4lcHvsEpwrFlcKMT2MDF0iyZFcdx5FRO2N3YpDkASqVW9SyC1p8Obh0ezKaNz+XFG0WJsuaLJSlLMuabVbHELk/Jtu/fa7t/xe7bjjob+T32wAAAABJRU5ErkJggg=="
                alt="Flag"
              />
            </div>
            <select>
              <option value="1">Karachi</option>
              <option value="2">Islamabad</option>
              <option value="3">Lahore</option>
            </select>
          </div>

          <div class="header__topbar__links">
            <ul>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">PW+</a></li>
              <li><a href="/">Sign In</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="header__middlebar">
      <div class="wrapper">
        <div class="header__middlebar__wrapper">
          <p>10% Discount On All Items | Use Code: SALE10</p>
        </div>
      </div>
    </div>

    <div class="header__navigation">
      <div class="wrapper">
        <div class="header__navigation__wrapper">
          <span class="header__navigation__icons" @click="toggleSideNav">
            <font-awesome-icon :icon="['fa', 'bars']" />
          </span>

          <a href="#">
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
              class="header__navigation__img"
            />
          </a>

          <div class="header__navigation__menu">
            <ul>
              <li><a href="/#_">Home</a></li>
              <li><a href="/#_">Shop</a></li>
              <li><a href="/#_">Best Sellers</a></li>
              <li><a href="/#_">Sale</a></li>
              <li><a href="/#_">Blog</a></li>
            </ul>
          </div>

          <div
            class="
              header__navigation__search header__navigation__search--desktop
            "
          >
            <div class="search-main search-main--desktop">
              <form class="search-box">
                <input type="text" placeholder="Search" class="search-input" />
                <button class="search-button" type="button">
                  <font-awesome-icon :icon="['fa', 'search']" />
                </button>
              </form>
            </div>
            <div class="add-to-cart">
              <span class="header__navigation__icons">
                <font-awesome-icon :icon="['fa', 'shopping-cart']" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav
      class="header__sideNav"
      :class="{ 'header__sideNav--open': mobileSideNavOpen }"
    >
      <div class="header__sideNav__closeBtn" @click="toggleSideNav">
        <font-awesome-icon :icon="['fa', 'times']" />
      </div>
      <div class="header__sideNav__wrapper">
        <nuxt-link to="#" class="header__sideNav__links">Home</nuxt-link>
        <nuxt-link to="#" class="header__sideNav__links">Shop</nuxt-link>
        <nuxt-link to="#" class="header__sideNav__links"
          >Best Sellers</nuxt-link
        >
        <nuxt-link to="#" class="header__sideNav__links">Sale</nuxt-link>
        <nuxt-link to="#" class="header__sideNav__links">Blog</nuxt-link>

        <div class="header__navigation__search">
          <div class="search-main">
            <form class="search-box">
              <input type="text" placeholder="Search" class="search-input" />
              <button class="search-button" type="button">
                <font-awesome-icon :icon="['fa', 'search']" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { GET_LOGO } from '~/store/types'

export default {
  name: 'HeaderStyle4',
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
