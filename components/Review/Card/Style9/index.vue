<template>
  <ul class="review">
    <li class="code">{{ code }}</li>
    <li class="title">{{ title }}</li>
    <li v-for="(item, idx) in itemList" :key="idx" class="weight">
      <p>{{ item.labelCardStyle9 }}</p>
      <span>
        {{ item.valueCardStyle9 }}
      </span>
      <svg
        v-if="item.resultCardStyle9"
        xmlns="http://www.w3.org/2000/svg"
        width="19.828"
        height="11.828"
        viewBox="0 0 19.828 11.828"
      >
        <path
          id="Path_1"
          data-name="Path 1"
          d="M18.5,9l-7.341,7.125L7.3,12.375,1.5,18"
          transform="translate(-0.086 -7.586)"
          fill="none"
          stroke="#1cdc6f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M25.5,9h4.666v4.666"
          transform="translate(-11.752 -7.586)"
          fill="none"
          stroke="#1cdc6f"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="19.828"
        height="11.828"
        viewBox="0 0 19.828 11.828"
      >
        <path
          id="Path_1"
          data-name="Path 1"
          d="M18.5,18l-7.341-7.125L7.3,14.625,1.5,9"
          transform="translate(-0.086 -7.586)"
          fill="none"
          stroke="#f22929"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M25.5,13.666h4.666V9"
          transform="translate(-11.752 -3.252)"
          fill="none"
          stroke="#f22929"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </li>
  </ul>
  <!-- <li class="quality">
      <p>Quality</p>
      {{ quality }}%
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19.828"
        height="11.828"
        viewBox="0 0 19.828 11.828"
      >
        <path
          id="Path_1"
          data-name="Path 1"
          d="M18.5,18l-7.341-7.125L7.3,14.625,1.5,9"
          transform="translate(-0.086 -7.586)"
          fill="none"
          stroke="#f22929"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M25.5,13.666h4.666V9"
          transform="translate(-11.752 -3.252)"
          fill="none"
          stroke="#f22929"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </li>
    <li class="price">
      <p>Price</p>
      {{ price }}%
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19.828"
        height="11.828"
        viewBox="0 0 19.828 11.828"
      >
        <path
          id="Path_1"
          data-name="Path 1"
          d="M18.5,18l-7.341-7.125L7.3,14.625,1.5,9"
          transform="translate(-0.086 -7.586)"
          fill="none"
          stroke="#f22929"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Path_2"
          data-name="Path 2"
          d="M25.5,13.666h4.666V9"
          transform="translate(-11.752 -3.252)"
          fill="none"
          stroke="#f22929"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </li>
    <li class="memory">
      <p>Memory</p>
      {{ memory
      }}<svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="2"
        viewBox="0 0 20 2"
      >
        <line
          id="Line_2"
          data-name="Line 2"
          x2="18"
          transform="translate(1 1)"
          fill="none"
          stroke="#ecb41b"
          stroke-linecap="round"
          stroke-width="2"
        />
      </svg>
    </li> -->
</template>

<script>
export default {
  name: 'ReviewCardStyle9',

  props: {
    code: {
      type: String,
      default: '',
    },
    title: {
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
