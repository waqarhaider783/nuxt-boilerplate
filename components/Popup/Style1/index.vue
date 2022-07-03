<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal-wrapper">
      <div class="modal" @click.stop>
        <div class="header" :class="{ hidden: !header }">
          <p class="title">{{ title }}</p>
        </div>
        <div class="close" @click="$emit('close-modal')">
          <font-awesome-icon :icon="['fas', 'times']" />
        </div>
        <component :is="childComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    childComponent: {
      type: [String, Object],
      required: true,
    },
    header: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'Default Title',
    },
  },
}
</script>
<style scoped lang="scss" src="./index.scss" />
