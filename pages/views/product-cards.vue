<template>
  <div class="main gray">
    <div class="container">
      <!-- 1 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 1" />
        <div class="grid-column-4">
          <product-card-style-1 v-for="card in 4" :key="card" />
        </div>
      </div>

      <!-- 2 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 2" />
        <div class="grid-column-4">
          <product-card-style-2 v-for="card in 4" :key="card" />
        </div>
      </div>

      <!-- 3 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 3" />
        <div class="grid-column-4">
          <product-card-style-3 v-for="card in 4" :key="card" />
        </div>
      </div>

      <!-- 4 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 4" />
        <div class="grid-column-4">
          <product-card-style-4 v-for="card in 4" :key="card" />
        </div>
      </div>

      <!-- 5 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 5" />
        <div class="grid-column-4">
          <product-card-style-5 v-for="card in 4" :key="card" />
        </div>
      </div>

      <!-- 6 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 6" />
        <div class="grid-column-4">
          <product-card-style-6 />
          <product-card-style-6
            img="products/product-img2.jpg"
            title="PURE WHEY PROTEIN™ 2"
          />
          <product-card-style-6
            img="products/product-img3.jpg"
            title="PURE WHEY PROTEIN™ 3"
          />
          <product-card-style-6
            img="products/product-img4.jpg"
            title="PURE WHEY PROTEIN™ 4"
          />
        </div>
      </div>

      <!-- 7 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 7" />
        <div class="grid-column-4">
          <product-card-style-7 v-for="card in 4" :key="card" :img="card + 4" />
        </div>
      </div>

      <!-- 8 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 8" />
        <div class="grid-column-4">
          <product-card-style-8 v-for="card in 2" :key="card" />
          <product-card-style-8 v-for="card in 2" :key="card" variations />
        </div>
      </div>

      <!-- 9 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 9" />
        <div class="grid-column-4 cards-2">
          <product-card-style-9 v-for="card in 4" :key="card" />
        </div>
      </div>

      <!-- 10 -->
      <div class="section">
        <heading-style-1 title="Product Card Style 10" />
        <div class="grid-column-4 cards-2">
          <product-card-style-10 v-for="card in [1, 2, 3, 4]" :key="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { GET_PRODUCT_CARDS } from '~/store/types'
export default {
  name: 'ProductCards',

  // async asyncData({ store }) {
  //   const productCards = await store.dispatch(`views/${GET_PRODUCT_CARDS}`)
  //   return { productCards }
  // },
}
</script>

<style lang="scss" scoped src="./index.scss" />
