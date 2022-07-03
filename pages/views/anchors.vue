<template>
  <div class="test">
    <div class="container">
      <!-- 1 -->
      <Heading-style-1 title="Anchor Style 1" />
      <section class="section">
        <div class="grid-column-4">
          <anchor-style-1
            v-for="item in 4"
            :key="item"
            url-link="#Anchor1"
            title="Anchor 1"
          />
        </div>
      </section>

      <!-- 2 -->
      <Heading-style-1 title="Anchor Style 2" />
      <section class="section">
        <div class="grid-column-4">
          <anchor-style-2
            v-for="item in 4"
            :key="item"
            url-link="#Anchor2"
            title="Anchor 2"
          />
        </div>
      </section>

      <!-- 3 -->
      <Heading-style-1 title="Anchor Style 3" />
      <section class="section">
        <div class="grid-column-4">
          <anchor-style-3
            v-for="item in 4"
            :key="item"
            url-link="#Anchor3"
            title="Anchor 3"
          />
        </div>
      </section>

      <!-- 4 -->
      <Heading-style-1 title="Anchor Style 4" />
      <section class="section">
        <div class="grid-column-4">
          <anchor-style-4
            v-for="item in 4"
            :key="item"
            url-link="#Anchor4"
            title="Anchor 4"
          />
        </div>
      </section>

      <!-- 5 -->
      <Heading-style-1 title="Anchor Style 5" />
      <section class="section">
        <div class="grid-column-4">
          <anchor-style-5
            v-for="item in 4"
            :key="item"
            url-link="#Anchor5"
            title="Anchor 5"
          />
        </div>
      </section>

      <!-- 6 -->
      <Heading-style-1 title="Anchor Style 6" />
      <section class="section">
        <div class="grid-column-4">
          <anchor-style-6
            v-for="item in 4"
            :key="item"
            url-link="#Anchor6"
            title="Anchor 6"
          />
        </div>
      </section>

      <!-- 7 -->
      <Heading-style-1 title="Anchor Style 7" />
      <section class="section">
        <div class="grid-column-4">
          <anchor-style-7
            v-for="item in 4"
            :key="item"
            url-link="#Anchor7"
            title="Anchor 7"
          />
        </div>
      </section>

      <!-- 8 -->
      <section class="section">
        <Heading-style-1 title="Anchor Style 8" />
        <p style="font-weight: 600; text-align: center; line-height: 1.4em">
          To use button, save the logo in webp format & pass the image name in
          variant prop
        </p>
        <div class="grid-column-5">
          <anchor-style-8 variant="facebook" />
          <anchor-style-8 variant="phone" />
          <anchor-style-8 variant="google" />
          <anchor-style-8 variant="github" />
          <anchor-style-8 variant="instagram" />
        </div>
      </section>

      <!-- 9 -->
      <section class="section">
        <Heading-style-1 title="Anchor Style 9" />
        <div class="grid-column-5">
          <anchor-style-9 title="Anchor 9" />
          <anchor-style-9 title="Anchor 9" />
          <anchor-style-9 title="Anchor 9" />
          <anchor-style-9 title="Anchor 9" />
          <anchor-style-9 title="Anchor 9" />
        </div>
      </section>

      <!-- 10 -->
      <section class="section">
        <Heading-style-1 title="Anchor Style 10" />
        <div class="grid-column-5">
          <anchor-style-10 title="Anchor 10" />
          <anchor-style-10 title="Anchor 10" />
          <anchor-style-10 title="Anchor 10" />
          <anchor-style-10 title="Anchor 10" />
          <anchor-style-10 title="Anchor 10" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Anchors',
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
