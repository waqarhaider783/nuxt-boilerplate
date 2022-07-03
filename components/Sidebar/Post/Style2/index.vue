<template>
  <div class="postSec">
    <ul>
      <li v-for="{ id, title, image, urlLink } in items" :key="id">
        <article class="postCard">
          <nuxt-link :to="urlLink" class="postCard__imgLink">
            <img class="postCard__img" :src="image" :alt="title" />
            <span class="postCard__count">1</span>
          </nuxt-link>
          <div class="postCard__content">
            <h3 class="postCard__text">
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
  name: 'SidebarPostStyle2',
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
