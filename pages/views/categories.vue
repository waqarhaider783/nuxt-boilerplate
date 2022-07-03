<template>
  <div class="section" style="background-color: var(--bodyColor)">
    <div class="container">
      <!-- 1 -->
      <div class="section">
        <Heading-style-1 title="Category Style 1" />
        <div class="grid-column-5">
          <category-style-1
            v-for="(category, index) in categories"
            :key="index"
            :title="category && category.node && category.node.name"
            :source-url="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.sourceUrl
            "
            :alt-text="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.altText
            "
            :link-to="category && category.node && category.node.slug"
          />
        </div>
      </div>

      <!-- 2 -->
      <div class="section">
        <Heading-style-1 title="Category Style 2" />
        <div class="grid-column-5">
          <category-style-2
            v-for="(category, index) in categories"
            :key="index"
            :title="category && category.node && category.node.name"
            :source-url="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.sourceUrl
            "
            :alt-text="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.altText
            "
            :link-to="category && category.node && category.node.slug"
          />
        </div>
      </div>

      <!-- 3 -->
      <div class="section">
        <Heading-style-1 title="Category Style 3" />
        <div class="grid-column-1">
          <category-style3 heading="All Categories" :categories="categories" />
        </div>
      </div>

      <!-- 4 -->
      <div class="section">
        <Heading-style-1 title="Category Style 4" />
        <div class="grid-column-5">
          <category-style-4
            v-for="(category, index) in categories"
            :key="index"
            :title="category && category.node && category.node.name"
            :source-url="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.sourceUrl
            "
            :alt-text="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.altText
            "
            :link-to="category && category.node && category.node.slug"
          />
        </div>
      </div>

      <!-- 5 -->
      <div class="section">
        <Heading-style-1 title="Category Style 5" />
        <div class="grid-column-5">
          <category-style-5
            v-for="(category, index) in categories"
            :key="index"
            :title="category && category.node && category.node.name"
            :source-url="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.sourceUrl
            "
            :alt-text="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.altText
            "
            :link-to="category && category.node && category.node.slug"
          />
        </div>
      </div>

      <!-- 6 -->
      <div class="section">
        <Heading-style-1 title="Category Style 6" />
        <div class="grid-column-5">
          <category-style-6
            v-for="(category, index) in categories"
            :key="index"
            :title="category && category.node && category.node.name"
            :link-to="category && category.node && category.node.slug"
          />
        </div>
      </div>

      <!-- 7 -->
      <div class="section">
        <Heading-style-1 title="Category Style 7" />
        <div class="grid-column-5">
          <category-style-7
            v-for="(category, index) in categories"
            :key="index"
            :title="category && category.node && category.node.name"
            :source-url="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.sourceUrl
            "
            :alt-text="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.altText
            "
            :link-to="category && category.node && category.node.slug"
            :is-hot="true"
            :status="
              category &&
              category.node &&
              category.node.Status &&
              category.node.Status.currentStatus
            "
          />
        </div>
      </div>

      <!-- 8 -->
      <div class="section">
        <Heading-style-1 title="Category Style 8" />

        <div class="grid-column-4">
          <category-style-8
            v-for="(category, index) in categories"
            :key="index"
            :title="category && category.node && category.node.name"
            :source-url="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.sourceUrl
            "
            :alt-text="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.altText
            "
            :link-to="category && category.node && category.node.slug"
          />
        </div>
      </div>

      <!-- 9 -->
      <div class="section">
        <Heading-style-1 title="Category Style 9" />
        <div class="grid-column-4">
          <category-style-9
            v-for="(category, index) in categories"
            :key="index"
            :source-url="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.sourceUrl
            "
            :alt-text="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.altText
            "
            :link-to="category && category.node && category.node.slug"
          />
        </div>
      </div>

      <!-- 10 -->
      <div class="section">
        <Heading-style-1 title="Category Style 10" />
        <div class="flex-slider">
          <category-style-10
            v-for="(category, index) in categories"
            :key="index"
            :title="category && category.node && category.node.name"
            :source-url="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.sourceUrl
            "
            :alt-text="
              category &&
              category.node &&
              category.node.categoryImage &&
              category.node.categoryImage.catImage &&
              category.node.categoryImage.catImage.altText
            "
            :link-to="category && category.node && category.node.slug"
          />
        </div>
      </div>

      <!-- 11 -->
      <div class="section">
        <Heading-style-1 title="Category Style 11" />
        <div class="grid-column-4">
          <category-style-11 />
          <category-style-11 />
          <category-style-11 />
          <category-style-11 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_CATEGORIES } from '~/store/types'
export default {
  name: 'Categories',

  async asyncData({ store }) {
    const [categories] = await Promise.all([
      store.dispatch(`views/${GET_CATEGORIES}`),
    ])

    return { categories }
  },

  data() {
    return {
      list: [
        { title: 'Credit cards', url: '/' },
        { title: 'Investing', url: '/' },
        { title: 'Insurance', url: '/' },
        { title: 'Student Loans', url: '/' },
        { title: 'Content Writin', url: '/' },
      ],
      style7: [
        {
          status: 'New Arrivals',
          // sourceUrl: '~/assets/images/goldjam/goldjam-category6.png',
          altText: 'Logo',
          title: 'Skin Care',
          isHot: true,
          linkTo: '#',
        },
        {
          status: 'New Arrivals',
          // sourceUrl: '~/assets/images/goldjam/goldjam-category6.png',
          altText: 'Logo',
          title: 'Skin Care',
          isHot: false,
          linkTo: '#',
        },
        {
          status: 'New Arrivals',
          // sourceUrl: '~/assets/images/goldjam/goldjam-category6.png',
          altText: 'Logo',
          title: 'Skin Care',
          isHot: true,
          linkTo: '#',
        },
        {
          status: 'New Arrivals',
          // sourceUrl: '~/assets/images/goldjam/goldjam-category6.png',
          altText: 'Logo',
          title: 'Skin Care',
          isHot: false,
          linkTo: '#',
        },
        {
          status: 'New Arrivals',
          // sourceUrl: '~/assets/images/goldjam/goldjam-category6.png',
          altText: 'Logo',
          title: 'Skin Care',
          isHot: true,
          linkTo: '#',
        },
      ],
      style8: [
        {
          altText: 'Logo',
          title: 'B-Complex',
          linkTo: '#',
          image:
            'https://components-views.netlify.app/_nuxt/img/spotlight-image.784969c.png',
        },
        {
          altText: 'Logo',
          title: 'B-Complex',
          linkTo: '#',
        },
        {
          altText: 'Logo',
          title: 'B-Complex',
          linkTo: '#',
        },
        {
          altText: 'Logo',
          title: 'B-Complex',
          linkTo: '#',
        },
      ],
    }
  },
}
</script>

<style></style>
