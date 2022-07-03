<template>
  <input
    :id="id"
    :name="name"
    :checked="checked"
    :disabled="disabled"
    type="checkbox"
    class="checkboxC"
    @input="(e) => changeEmit(e)"
  />
</template>

<script>
export default {
  name: 'CheckboxStyle1',
  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
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
