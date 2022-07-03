<template>
  <div class="section">
    <div class="section container">
      <Heading-style-1 title="Blog Card Style 1" />
      <!-- { id, date, slug, title, excerpt } -->
      <div class="grid-column-3">
        <blog-card-style-1
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :date="post.node.date"
          :title="post.node.title"
          :description="post.node.excerpt"
          :slug="post.node.slug"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>
    <div class="section container">
      <Heading-style-1 title="Blog Card Style 2" />
      <div class="grid-column-4">
        <blog-card-style-2
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :date="post.node.date"
          :title="post.node.title"
          :description="post.node.excerpt"
          :slug="post.node.slug"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>

    <div class="section container">
      <Heading-style-1 title="Blog Card Style 3" />
      <div class="grid-column-2">
        <blog-card-style-3
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :date="post.node.date"
          :title="post.node.title"
          :description="post.node.excerpt"
          :slug="post.node.slug"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>

    <div class="section container">
      <Heading-style-1 title="Blog Card Style 4" />
      <div class="grid-column-4">
        <blog-card-style-4
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :title="post.node.title"
          :slug="post.node.slug"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>
    <div class="section container">
      <Heading-style-1 title="Blog Card Style 5" />
      <div class="grid-column-3">
        <blog-card-style-5
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :title="post.node.title"
          :slug="post.node.slug"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>
    <div class="section container">
      <Heading-style-1 title="Blog Card Style 7" />
      <div class="grid-column-2">
        <blog-card-style-7
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :title="post.node.title"
          :slug="post.node.slug"
          :tags="post.node.tags.edges"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>
    <div class="section container">
      <Heading-style-1 title="Blog Card Style 8" />
      <blog-card-style-8
        v-for="(post, idx) in posts && posts"
        :key="idx"
        :title="post.node.title"
        :slug="post.node.slug"
        :author="post.node.author.node.name"
        :tags="post.node.tags.edges"
        :image="
          post.node.featuredImage.node && post.node.featuredImage.node.sourceUrl
        "
        :image-alt="
          post.node.featuredImage.node && post.node.featuredImage.node.altText
        "
        :cat-image="
          post.node.categories.edges[0].node.categoryImage.catImage.sourceUrl
        "
        :cat-image-alt-text="
          post.node.categories.edges[0].node.categoryImage.catImage.altText
        "
      />
    </div>
    <div class="section container">
      <Heading-style-1 title="Blog Card Style 9" />
      <div class="grid-column-2">
        <blog-card-style-9
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :title="post.node.title"
          :slug="post.node.slug"
          :author="post.node.author.node.name"
          :tags="post.node.tags.edges"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>
    <div class="section container">
      <Heading-style-1 title="Blog Card Style 10" />
      <div class="grid-column-2">
        <blog-card-style-10
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :title="post.node.title"
          :slug="post.node.slug"
          :author="post.node.author.node.name"
          :tags="post.node.tags.edges"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>

    <div class="section container">
      <Heading-style-1 title="Blog Card Style 11" />
      <div class="grid-column-3">
        <blog-card-style-11
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :date="post.node.date"
          :title="post.node.title"
          :slug="post.node.slug"
          :author="post.node.author.node.name"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>
    <div class="section container">
      <Heading-style-1 title="Blog Card Style 12" />
      <div class="grid-column-3">
        <blog-card-style-12
          v-for="(post, idx) in posts && posts"
          :key="idx"
          :date="post.node.date"
          :title="post.node.title"
          :slug="post.node.slug"
          :tags="post.node.tags.edges"
          :author="post.node.author.node.name"
          :image="
            post.node.featuredImage.node &&
            post.node.featuredImage.node.sourceUrl
          "
          :image-alt="
            post.node.featuredImage.node && post.node.featuredImage.node.altText
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_POSTS } from '~/store/types'
export default {
  name: 'Views',
  async asyncData({ store }) {
    const posts = await store.dispatch(`views/${GET_POSTS}`)
    return { posts }
  },
}
</script>

<style></style>
