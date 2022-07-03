<template>
  <div class="serviceCard">
    <div class="serviceCard__wrapper">
      <div class="serviceCard__detail">
        <figure class="serviceCard__image">
          <img :src="sourceUrl" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesCard14',

  props: {
    sourceUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
