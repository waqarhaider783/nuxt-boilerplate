<template>
  <div class="newsLetter">
    <div class="flexWrapper">
      <h4>{{ heading }}</h4>
      <p>
        {{ description }}
      </p>
      <div class="subscribeBox">
        <form>
          <input
            type="email"
            placeholder="Enter your valid email"
            required=""
          />
          <button type="submit">Subscribe</button>
        </form>
        <p class="successful">
          Congratulations! You’ll be the first to receive our latest Vouchers &
          Deals.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe3',
  props: {
    heading: { default: '', type: String },
    description: { default: '', type: String },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
