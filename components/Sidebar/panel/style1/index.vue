<template>
  <div class="sidebarPanel">
    <slot></slot>
    <slot name="mainContent"></slot>
  </div>
</template>

<script>
export default {
  name: 'SidebarPanelStyle1',
}
</script>

<style lang="scss" scoped src="./index.scss" />
