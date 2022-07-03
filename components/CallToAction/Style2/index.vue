<template>
  <nuxt-link to="#_" class="call-to-action">
    <div class="call-to-action-inner">
      <div class="info">
        <span class="span1">download the</span>
        <h2 class="heading">barterrup</h2>
        <span class="span2">media kit</span>
      </div>
      <div class="vector">
        <img
          src="~/assets/images/barterup/cta-vector.svg"
          height="292"
          width="490"
          alt="cta-vector"
        />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  component: 'CTAStyle2',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
