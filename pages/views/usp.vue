<template>
  <div class="section">
    <div class="container">
      <Heading-style-1 title="USP Card Style 1" />
      <div class="grid-column-3">
        <!-- v-for="(item, index) in card1" -->
        <usp-card-style-1
          v-for="(card, idx) in usp.uspCardStyle1.cardColumn"
          :key="idx"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_USP } from '~/store/types'
export default {
  name: 'Usp',
  async asyncData({ store }) {
    const usp = await store.dispatch(`views/${GET_USP}`)
    return { usp }
  },
  data() {
    return {
      card1: [
        {
          sourceUrl:
            'https://www.shopglowstudio.com/wp-content/uploads/2021/06/Free-Shipping.png',
          altText: 'Logo',
          title: 'Free Shipping',
          text: 'Nationwide for Orders Above Rs. 3,000',
        },
        {
          sourceUrl:
            'https://www.shopglowstudio.com/wp-content/uploads/2021/06/Easy-Return-Policy.png',
          altText: 'Logo',
          title: 'Easy Return Policy',
          text: '7 Day Return Policy',
        },
        {
          sourceUrl:
            'https://www.shopglowstudio.com/wp-content/uploads/2021/06/Same-Day-Delivery.png',
          altText: 'Logo',
          title: 'Same Day Delivery',
          text: 'For Karachi Only',
        },
      ],
    }
  },
}
</script>

<style></style>
