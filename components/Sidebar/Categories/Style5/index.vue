<template>
  <div class="catAndStr">
    <ul>
      <li v-for="{ id, slug, title, image } in items" :key="id">
        <nuxt-link :to="slug" class="anchor">
          <div class="anchor__image">
            <img
              :src="[
                image
                  ? image
                  : 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
              ]"
              alt="User"
              width="36"
              height="36"
            />
          </div>
          <div class="anchor__text">{{ title }}</div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SidebarCaregoryStyle5',
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
