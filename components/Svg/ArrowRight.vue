<template>
  <div
    class="arrow-right"
    style="display: flex; align-items: center"
    :class="{ rounded }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8.151"
      height="14.255"
      viewBox="0 0 8.151 14.255"
      v
    >
      <path
        id="Icon_ionic-ios-arrow-forward"
        data-name="Icon ionic-ios-arrow-forward"
        d="M16.94,13.321l-5.394-5.39a1.014,1.014,0,0,1,0-1.439,1.027,1.027,0,0,1,1.443,0L19.1,12.6a1.017,1.017,0,0,1,.03,1.4l-6.137,6.15a1.019,1.019,0,1,1-1.443-1.439Z"
        transform="translate(-11.246 -6.196)"
        fill="#9f9f9f"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ArrowRight',
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.rounded {
  padding: 17px 20px !important;
  border-radius: 27px !important;
  border: 2px solid #9f9f9f !important;
}
</style>
