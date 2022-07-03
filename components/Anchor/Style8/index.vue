<template>
  <button class="button-wrp" :class="variant">
    <div class="logo">
      <img
        :src="getImage(variant && variant)"
        :alt="variant"
        height="30"
        width="30"
      />
    </div>
    <p class="btn-text">
      {{ title ? title : 'signup with ' + variant }}
    </p>
  </button>
</template>

<script>
export default {
  component: 'achorStyle8',
  props: {
    variant: {
      type: String,
      default: 'undefined',
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    getImage(img) {
      try {
        return require(`~/assets/images/barterup/${img}.webp`)
      } catch (error) {
        return require(`~/assets/images/barterup/undefined.webp`)
      }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
