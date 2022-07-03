<template>
  <div class="searchC">
    <form class="searchC__wrapper" @submit="(e) => submitSearch(e)">
      <input
        v-model="searchQuery"
        type="text"
        name="search"
        class="searchC__input"
        :placeholder="placeholder"
      />
      <button type="submit" class="searchC__icon">
        <font-awesome-icon :icon="['fa', 'search']" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchStyle1',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  methods: {
    submitSearch(e) {
      e.preventDefault()
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
