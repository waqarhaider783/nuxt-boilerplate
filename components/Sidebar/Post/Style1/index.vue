<template>
  <div class="postSec">
    <ul>
      <li v-for="{ id, title, date, image, urlLink } in items" :key="id">
        <article class="postCard">
          <nuxt-link :to="urlLink" class="postCard__imgLink">
            <img class="postCard__img" :src="image" :alt="title" />
          </nuxt-link>
          <div class="postCard__content">
            <span class="postCard__text">{{ formatDate(date) }}</span>
            <h3 class="postCard__text postCard__text--secondary">
              <nuxt-link :to="urlLink">{{ title }}</nuxt-link>
            </h3>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarPostStyle1',
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },

  methods: {
    formatDate(date) {
      // weekday: 'long', => wednesday (if needed)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleString('en-US', options)
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
