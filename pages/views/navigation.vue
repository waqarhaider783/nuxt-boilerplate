<template>
  <div class="section" style="background-color: var(--bodyColor)">
    <Heading-style-1 title="Navigation Styles" />

    <!-- 1 -->
    <section class="section">
      <Heading-style-1 title="Bottom Navigation Style 1 (Desktop Hidden)" />
      <p style="font-weight: bold; text-align: center">
        This Will Be Visible Only Below 981px Width
      </p>
      <div style="position: relative; height: 150px">
        <navigation-bottom-style-1 />
      </div>
    </section>

    <!-- 2 -->
    <section class="section container">
      <Heading-style-1 title="Bottom Navigation Style 1 (Desktop Hidden)" />
      <navigation-style-1 />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style></style>
