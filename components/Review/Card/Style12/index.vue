<template>
  <div class="graph__graphics">
    <span class="circular-percentage-svg">
      <svg viewBox="0 0 36 36" class="circular-chart orange">
        <path
          class="circular-chart__bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <path
          data-v-86fc3396=""
          d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
          class="circular-chart__bg-stroke"
        ></path>
        <path
          class="circular-chart__circle"
          :stroke-dasharray="`${value}, 100`"
          d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
          :class="{ [className]: changeColorBaseOnValue }"
        ></path>
        <text
          x="18"
          y="20.35"
          class="circular-chart__percentage"
          :class="{ [changeColorBaseOnValue]: changeColorBaseOnValue }"
        >
          {{ value }}
        </text>
        <text x="18" y="25.35" class="circular-chart__max-percentage">
          of 100
        </text>
      </svg>
    </span>
    <span class="vertical-bars-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="220"
        height="176"
        viewBox="0 0 243 176"
      >
        <g transform="translate(-0.481 -0.308)">
          <rect
            class="bar"
            width="30"
            height="125"
            rx="15"
            transform="translate(0.481 0.308)"
            :class="{ [grade]: grade === 'A' }"
          />
          <rect
            class="bar"
            width="31"
            height="107"
            rx="15"
            transform="translate(53.481 17.308)"
            :class="{ [grade]: grade === 'B' }"
          />
          <rect
            class="bar"
            width="32"
            height="88"
            rx="15"
            transform="translate(106.481 36.308)"
            :class="{ [grade]: grade === 'C' }"
          />
          <rect
            class="bar"
            width="34"
            height="68"
            rx="15"
            transform="translate(158.481 56.308)"
            :class="{ [grade]: grade === 'D' }"
          />
          <rect
            class="bar"
            width="31"
            height="49"
            rx="15"
            transform="translate(212.481 75.308)"
            :class="{ [grade]: grade === 'E' }"
          />
          <text
            class="bar"
            :class="{ [grade]: grade === 'A' }"
            transform="translate(16.481 164.308)"
          >
            <tspan x="-11.039" y="0">A</tspan>
          </text>
          <text
            class="bar"
            :class="{ [grade]: grade === 'B' }"
            transform="translate(67.481 166.308)"
          >
            <tspan x="-11.422" y="0">B</tspan>
          </text>
          <text
            class="bar"
            :class="{ [grade]: grade === 'C' }"
            transform="translate(122.481 166.308)"
          >
            <tspan x="-10.833" y="0">C</tspan>
          </text>
          <text
            class="bar"
            :class="{ [grade]: grade === 'D' }"
            transform="translate(174.481 165.308)"
          >
            <tspan x="-12.214" y="0">D</tspan>
          </text>
          <text
            class="bar"
            :class="{ [grade]: grade === 'E' }"
            transform="translate(227.481 165.308)"
          >
            <tspan x="-9.241" y="0">E</tspan>
          </text>
        </g>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ReviewCardStyle2',

  props: {
    value: {
      type: Number,
      default: 0,
    },
    grade: {
      type: String,
      default: '',
    },
    // details: {
    //   type: Object,
    //   default() {
    //     return {}
    //   },
    // },
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

      if (+value > 60) return 'D'

      if (+value < 60) return 'E'
      return 'A'
    },
  },

  methods: {
    success(alphabet) {
      return alphabet === this.grade
    },
    roundOf(value) {
      return Math.ceil(value / 10) * 10
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
