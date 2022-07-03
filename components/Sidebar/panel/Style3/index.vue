<template>
  <div class="sidebar-panel-style3">
    <slot></slot>
    <slot name="mainContent"></slot>
  </div>
</template>

<script>
export default {
  name: 'SidebarPanelStyle3'
}
</script>

<style lang="scss" scoped src="./index.scss" />
