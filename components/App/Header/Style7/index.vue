<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left">
          <nuxt-link to="#_" class="header__logo">
            <picture>
              <img
                src="~/assets/images/barterup/barterup-logo.svg"
                alt="Logo"
              />
            </picture>
          </nuxt-link>

          <span class="header__icon">
            <font-awesome-icon :icon="['far', 'bell']" />
          </span>
        </div>
        <div
          class="header__search"
          :class="
            variant === 'search' ? 'showDesktopSearch' : 'hideDesktopSearch'
          "
        >
          <div class="header__search__wrapper">
            <input-search-style-1 placeholder="Search" />
          </div>

          <ul class="header__navigation">
            <li><a href="#_">Campaigns</a></li>
          </ul>

          <div v-if="isLoggedIn" class="header__cta">
            <!-- <button type="button" class="header__cta__btn">
              <span><font-awesome-icon :icon="['fas', 'plus']" /></span>
              <span class="header__cta__text">Add Listing</span>
            </button> -->

            <span class="header__cta__icon">
              <font-awesome-icon :icon="['far', 'comment-alt']" />
            </span>
            <span class="header__cta__icon">
              <font-awesome-icon :icon="['far', 'bell']" />
            </span>

            <div class="header__cta__avatar">
              <picture>
                <img src="~/assets/images/teams/one.png" alt="User" />
              </picture>
            </div>
          </div>
          <div v-else class="header__btn__wrapper">
            <anchor-style-6 title="Sign in" url-link="auth-screens" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderStyle7',
  props: {
    variant: {
      type: String,
      default: '',
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" src="./index.scss"></style>
