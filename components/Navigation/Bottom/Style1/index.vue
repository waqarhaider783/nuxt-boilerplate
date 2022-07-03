<template>
  <nav class="bottomNavigation">
    <ul class="bottomNavigation__list container">
      <li class="bottomNavigation__item">
        <nuxt-link to="#_" class="bottomNavigation__link">
          <font-awesome-icon :icon="['fas', 'home']" />
        </nuxt-link>
      </li>

      <li class="bottomNavigation__item">
        <nuxt-link to="#_" class="bottomNavigation__link">
          <font-awesome-icon :icon="['far', 'comment-alt']" />
        </nuxt-link>
      </li>

      <li class="bottomNavigation__item bottomNavigation__item--middle">
        <div>
          <nuxt-link to="#_" class="bottomNavigation__link">
            <font-awesome-icon :icon="['fas', 'plus']" />
          </nuxt-link>
        </div>
      </li>

      <li class="bottomNavigation__item">
        <nuxt-link to="#_" class="bottomNavigation__link">
          <font-awesome-icon :icon="['far', 'user-circle']" />
        </nuxt-link>
      </li>

      <li class="bottomNavigation__item">
        <nuxt-link to="#_" class="bottomNavigation__link">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped src="./index.scss" />
