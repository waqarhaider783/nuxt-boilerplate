<template>
  <div class="container">
    <div class="section">
      <Heading-style-1 title="Accordion Style1" />
      <accordion-style1
        v-for="({ question, answer }, index) in accordionSection1 &&
        accordionSection1.accordion"
        :key="index"
        :question="question"
        :answer="answer"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Accordion Style2" />
      <accordion-style2
        :title="accordionStyle2 && accordionStyle2.title"
        :question="accordionStyle2 && accordionStyle2.questionStyle2"
        :answers-style2="accordionStyle2 && accordionStyle2.answersStyle2"
        :ans="
          accordionStyle2 &&
          accordionStyle2.answersStyle2 &&
          accordionStyle2.answersStyle2.answers
        "
      />
    </div>
  </div>
</template>

<script>
import { GET_ACCORDIONS } from '~/store/types'
export default {
  name: 'Views',
  async asyncData({ store }) {
    const { accordionSection1, accordionStyle2 } = await store.dispatch(
      `views/${GET_ACCORDIONS}`
    )
    return { accordionSection1, accordionStyle2 }
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
