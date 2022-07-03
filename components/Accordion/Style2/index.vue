<!-- TOC stand for => Table of Content -->
<template>
  <div class="accordion">
    <div class="accordion__header">
      <h1 class="accordion__title">{{ title }}</h1>
      <button type="button" class="accordion__button" @click="collaspToc">
        {{ isCollaspTOC ? 'Show' : 'Hide' }}
      </button>
    </div>

    <div
      class="accordion__list"
      :class="{ 'accordion__list--hide': isCollaspTOC }"
    >
      <ol>
        <li>
          {{ question }}
          <ol>
            <li v-for="(ans, idx) in answersStyle2 && answersStyle2" :key="idx">
              {{ ans.answers }}
            </li>
            <!-- <li>{{ answer }}</li> -->
            <!-- <li>Content Name Here</li>
            <li>Content Name Here</li>
            <li>Content Name Here</li>
            <li>Content Name Here</li>
            <li>Content Name Here</li> -->
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionStyle2',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    answersStyle2: {
      type: Array,
      default: () => [],
    },
    answers: {
      type: String,
      default: '',
    },
    question: {
      type: String,
      default: '',
      required: true,
    },
  },

  data() {
    return {
      isCollaspTOC: false,
    }
  },

  methods: {
    collaspToc() {
      this.isCollaspTOC = !this.isCollaspTOC
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
