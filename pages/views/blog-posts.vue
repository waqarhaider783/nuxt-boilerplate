<template>
  <div class="section">
    <Heading-style-1 title="Blog Post Style 1" />
    <blog-post-style-1
      :title="blogPost && blogPost.title"
      :category="
        blogPost && blogPost.categories && blogPost.categories.edges[0].node
      "
      :source-url="
        blogPost &&
        blogPost.featuredImage &&
        blogPost.featuredImage.node.sourceUrl
      "
      :alt-text="
        blogPost &&
        blogPost.featuredImage &&
        blogPost.featuredImage.node.altText
      "
      :date="blogPost.date"
    />

    <div class="section container">
      <Heading-style-1 title="Blog Post Style 2" />
      <blog-post-style2
        :title="blogPost && blogPost.title"
        :category="
          blogPost && blogPost.categories && blogPost.categories.edges[0].node
        "
        :source-url="
          blogPost &&
          blogPost.featuredImage &&
          blogPost.featuredImage.node.sourceUrl
        "
        :alt-text="
          blogPost &&
          blogPost.featuredImage &&
          blogPost.featuredImage.node.altText
        "
        :date="blogPost.date"
      />
    </div>
    <div class="section container">
      <Heading-style-1 title="Blog Post Style 3" />
      <blog-post-style-3
        :title="blogPost && blogPost.title"
        :source-url="
          blogPost &&
          blogPost.featuredImage &&
          blogPost.featuredImage.node.sourceUrl
        "
        :alt-text="
          blogPost &&
          blogPost.featuredImage &&
          blogPost.featuredImage.node.altText
        "
      />
    </div>
    <div class="section container">
      <Heading-style-1 title="Blog Post Style 4" />
      <blog-post-style-4
        :title="blogPost && blogPost.title"
        :source-url="
          blogPost &&
          blogPost.featuredImage &&
          blogPost.featuredImage.node.sourceUrl
        "
        :alt-text="
          blogPost &&
          blogPost.featuredImage &&
          blogPost.featuredImage.node.altText
        "
        :date="blogPost.date"
      />
    </div>

    <div class="section container">
      <Heading-style-1 title="Blog Post Style 5" />
      <blog-post-style-5
        :title="blogPost && blogPost.title"
        :author="
          blogPost &&
          blogPost.author &&
          blogPost.author.node &&
          blogPost.author.node.name
        "
        :source-url="
          blogPost &&
          blogPost.featuredImage &&
          blogPost.featuredImage.node.sourceUrl
        "
        :alt-text="
          blogPost &&
          blogPost.featuredImage &&
          blogPost.featuredImage.node.altText
        "
        :cat-name="
          blogPost &&
          blogPost.categories &&
          blogPost.categories.edges[0].node &&
          blogPost.categories.edges[0].node.name
        "
        :cat-source-url="
          blogPost &&
          blogPost.categories &&
          blogPost.categories.edges[0].node &&
          blogPost.categories.edges[0].node.categoryImage &&
          blogPost.categories.edges[0].node.categoryImage.catImage &&
          blogPost.categories.edges[0].node.categoryImage.catImage.sourceUrl
        "
        :cat-alt-text="
          blogPost &&
          blogPost.categories &&
          blogPost.categories.edges[0].node &&
          blogPost.categories.edges[0].node.categoryImage &&
          blogPost.categories.edges[0].node.categoryImage.catImage &&
          blogPost.categories.edges[0].node.categoryImage.catImage.altText
        "
        :date="blogPost.date"
      />
    </div>
  </div>
</template>

<script>
import { GET_BLOG_POSTS } from '~/store/types'
export default {
  name: 'Views',
  async asyncData({ store }) {
    const blogPost = await store.dispatch(`views/${GET_BLOG_POSTS}`)
    return { blogPost }
  },
}
</script>

<style lang="scss" />
