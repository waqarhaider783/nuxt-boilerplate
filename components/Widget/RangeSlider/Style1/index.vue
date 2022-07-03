<template>
  <div class="rangeSlider">
    <div class="price-input">
      <div class="field">
        <input v-model="localRangeMinValue" type="number" class="input-min" />
      </div>
      <div class="separator">to</div>
      <div class="field">
        <input v-model="localRangeMaxValue" type="number" class="input-max" />
      </div>
    </div>
    <div class="slider">
      <div
        class="progress"
        :style="{ left: `${progressLeft}%`, right: `${progressRight}%` }"
      ></div>
    </div>
    <div class="range-input">
      <input
        v-model="localRangeMinValue"
        type="range"
        class="range-min"
        :min="minRange"
        :max="maxRange"
        :step="stepSize"
      />
      <input
        v-model="localRangeMaxValue"
        type="range"
        class="range-max"
        :min="minRange"
        :max="maxRange"
        :step="stepSize"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeSlider1',

  props: {
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
    rangeMinValue: {
      type: Number,
      required: true,
    },
    rangeMaxValue: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      localRangeMinValue: this.rangeMinValue,
      localRangeMaxValue: this.rangeMaxValue,
      progressLeft: (this.rangeMinValue / this.maxRange) * 100,
      progressRight: 100 - (this.rangeMaxValue / this.maxRange) * 100,
    }
  },

  watch: {
    localRangeMinValue() {
      if (Number(this.localRangeMinValue) > Number(this.localRangeMaxValue)) {
        this.localRangeMinValue = this.localRangeMaxValue
      }

      if (Number(this.localRangeMinValue) > Number(this.maxRange)) {
        this.localRangeMinValue = this.maxRange
      }

      this.setProgressPosition()
    },

    localRangeMaxValue() {
      if (Number(this.localRangeMaxValue) < Number(this.localRangeMinValue)) {
        this.localRangeMaxValue = this.localRangeMinValue
      }

      if (Number(this.localRangeMaxValue) > Number(this.maxRange)) {
        this.localRangeMaxValue = this.maxRange
      }

      this.setProgressPosition()
    },
  },

  methods: {
    setProgressPosition() {
      this.progressLeft = (this.localRangeMinValue / this.maxRange) * 100
      this.progressRight = 100 - (this.localRangeMaxValue / this.maxRange) * 100
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
