<template>
  <div class="rangeSlider">
    <!-- <h3 v-if="title" class="title">{{ title }}</h3> -->

    <div class="price-input">
      <div class="field">
        <input v-model="localValue" type="number" class="input-min" />
      </div>
    </div>

    <div class="slider">
      <div class="progress" :style="{ right: `${progressRight}%` }"></div>
    </div>

    <div class="range-input">
      <input
        v-model="localValue"
        type="range"
        class="range-min"
        :min="minRange"
        :max="maxRange"
        :step="stepSize"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeSlider2',

  props: {
    title: {
      type: String,
      default: '',
    },
    minRange: {
      type: Number,
      required: true,
    },
    maxRange: {
      type: Number,
      required: true,
    },
    stepSize: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      localValue: this.value,
      progressRight: 100 - (this.value / this.maxRange) * 100,
    }
  },

  watch: {
    localValue() {
      this.setProgressPosition()
    },
  },

  methods: {
    setProgressPosition() {
      this.progressRight = 100 - (this.localValue / this.maxRange) * 100
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
