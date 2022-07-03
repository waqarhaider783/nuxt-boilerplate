<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <div class="footer__left">
        <h3 class="footer__heading">Need Help</h3>
        <div class="footer__left__inner">
          <p class="footer__text">
            {{ data.descriptionStyle1 }}
          </p>
          <form class="footer__input">
            <label for="footerInput" style="display: none"></label>
            <input
              id="footerInput"
              type="email"
              placeholder="Your Email Address"
            />
            <button type="submit">
              <font-awesome-icon :icon="['far', 'paper-plane']" />
            </button>
          </form>
        </div>
      </div>
      <div class="footer__right">
        <div
          v-for="(link, index) in links && links"
          :key="index"
          class="footer__column"
        >
          <h3 class="footer__heading">{{ link.titleStyle1 }}</h3>
          <ul>
            <li
              v-for="(
                { itemStyle1, itemLinkStyle1 }, idx
              ) in link.menuItemsStyle1"
              :key="idx"
            >
              <nuxt-link :to="itemLinkStyle1" class="footer__link">
                {{ itemStyle1 }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    data: {
      type: [Object],
      default() {
        return {}
      },
    },
    links: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
