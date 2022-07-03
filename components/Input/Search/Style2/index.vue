<template>
  <div class="searchC">
    <div class="searchC__wrapper">
      <input
        type="text"
        :name="name"
        :placeholder="placeholder"
        class="searchC__input"
        @input="(e) => changeEmit(e)"
      />
      <span class="searchC__icon">
        <font-awesome-icon :icon="['fa', 'search']" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchStyle2',
  props: {
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    changeEmit(e) {
      this.$emit('on-change', e)
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
