<template>
  <div class="review">
    <div class="review-wrapper">
      <p class="title">{{ title }}</p>
      <p class="desc">{{ desc }}</p>
      <ul>
        <li v-for="(list, index) in itemList" :key="index">
          <div class="content">
            <p class="item">{{ list.itemCardStyle8 }}</p>

            <span class="rating">
              <svg
                v-for="(rate, idx) in list.ratingNumberCardStyle8"
                :key="idx"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
              >
                <circle
                  id="Ellipse_3"
                  data-name="Ellipse 3"
                  cx="7.5"
                  cy="7.5"
                  r="7.5"
                  fill="#1905e1"
                />
              </svg>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewCardStyle8',
  props: {
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    itemList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
