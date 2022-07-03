<template>
  <div class="filter">
    <div class="wrp">
      <input-select-style-1
        name="select1"
        label="Select 1"
        :options="[
          'Barterrup',
          'Convolytica',
          'Coupon Boa',
          'Mux',
          'Super Saver Mama',
        ]"
        placeholder=""
        :required="true"
        tooltip-text="This is custom tooltip."
        @on-change="inputChangeHandler"
      />
    </div>
    <div class="wrp">
      <p class="heading">Radius (meter)</p>
      <widget-range-slider-style-2
        title="Radius (meter)"
        :min-range="Number(0)"
        :max-range="Number(200)"
        :step-size="Number(2)"
        :value="Number(20)"
      />
    </div>
    <div class="wrp">
      <p class="heading">Recommendations</p>
      <tag-style-1 :tags="tags" />
    </div>
    <div class="wrp">
      <p class="heading">Interests</p>
      <tag-style-1 :tags="list" />
    </div>
    <div class="apply-btn">
      <anchor-style-9 title="apply" url-link="#_" />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      tags: [
        'all',
        'phone exchange',
        'food donate',
        'sofa exchange',
        'mobile trade',
        'mobile donate',
        'all',
        'phone exchange',
        'food donate',
      ],
      list: ['JavaScript', 'react', 'node', 'CSS', 'TypeScript', 'HTML'],
    }
  },
  methods: {
    inputChangeHandler(e) {
      const { name, value } = e.target
      this[name] = value
    },
  },
}
</script>

<style lang="scss" src="./index.scss" />
