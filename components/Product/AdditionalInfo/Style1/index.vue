<template>
  <div class="additional-information">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="additional-information__wrapper"
    >
      <div class="name_attribute">
        {{ item.name }}
      </div>
      <div class="value_attribute">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },

  data() {
    return {
      itemSelected: {
        name: '',
        value: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
