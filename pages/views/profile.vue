<template>
  <div class="container">
    <div class="section">
      <Heading-style-1 title="profile-style-1" />
      <profile-style-1 />
    </div>
    <div class="section">
      <Heading-style-1 title="profile-style-2" />
      <profile-style-2 />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<style lang="scss" scoped src="./index.scss">
.main {
  background: var(--gray-200) !important;
}
</style>
