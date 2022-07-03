<template>
  <div class="container">
    <!-- 1 -->
    <div class="section">
      <heading-style-1 title="Product Preview Style 1" />
      <product-preview-style-1 />
    </div>

    <!-- 2 -->
    <div class="section">
      <heading-style-1 title="Product Preview Style 2" />
      <product-preview-style-2 :options="options" />
    </div>

    <!-- 3 -->
    <div class="section">
      <heading-style-1 title="Product Preview Style 3" />
      <product-preview-style-3 />
    </div>

    <!-- 3 v2 -->
    <div class="section">
      <heading-style-1 title="Product Preview Style 3 (V2)" />
      <product-preview-style-3 variant="popup" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPreviews',

  data() {
    return {
      options: [
        {
          name: 'Small',
          value: '400',
        },
        {
          name: 'Medium',
          value: '650',
        },
        {
          name: 'Large',
          value: '800',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
