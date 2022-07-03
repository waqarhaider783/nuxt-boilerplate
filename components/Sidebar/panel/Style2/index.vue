<template>
  <div class="sidebar-panel-style2">
    <slot></slot>
    <slot name="mainContent"></slot>
  </div>
</template>

<script>
export default {
  name: 'SidebarPanelStyle1'
}
</script>

<style lang="scss" scoped src="./index.scss" />
