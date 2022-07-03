<template>
  <div class="accordion">
    <button
      class="accordion__button"
      :class="{ active: isCollapse }"
      @click="isCollapse = !isCollapse"
    >
      <h3 class="accordion__button__title">{{ question }}</h3>
      <span
        class="accordion__button__icon"
        :class="{ 'accordion__button__icon--rotate': isCollapse }"
        ><font-awesome-icon :icon="['fa', 'chevron-down']"
      /></span>
    </button>
    <div
      class="accordion__content"
      :style="isCollapse ? { maxHeight: '150px' } : { maxHeight: '0px' }"
    >
      <div class="accordion__content__text">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionStyle1',
  props: {
    question: {
      type: String,
      default: '',
      required: true,
    },
    answer: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      isCollapse: false,
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
