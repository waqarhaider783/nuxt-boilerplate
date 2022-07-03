<template>
  <div class="reviewCard">
    <div class="reviewCard__wrapper">
      <span class="reviewCard__text">{{ innerText }}</span>
      <span class="circular-percentage-svg">
        <svg viewBox="0 0 36 36" class="circular-chart orange">
          <path
            class="circular-chart__bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          ></path>
          <path
            data-v-86fc3396=""
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            class="circular-chart__bg-stroke"
          ></path>
          <path
            class="circular-chart__circle"
            :stroke-dasharray="`${value}, 100`"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            :class="{ [className]: changeColorBaseOnValue }"
          ></path>
        </svg>
      </span>
    </div>
    <div class="reviewCard__title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCardStyle1',

  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    innerText: {
      type: String,
      required: true,
    },
  },

  computed: {
    className() {
      return `circle-${[this.changeColorBaseOnValue]}`
    },

    changeColorBaseOnValue() {
      const value = this.value
      if (+value >= 90) return 'A'

      if (+value >= 80) return 'B'

      if (+value >= 70) return 'C'

      if (+value >= 60) return 'D'

      if (+value < 60) return 'E'
      return 'A'
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
