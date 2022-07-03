<template>
  <div class="aboutSubscribe">
    <div class="subscribe">
      <h4>{{ newsletter.title }}</h4>
      <p>
        {{ newsletter.description }}
      </p>
      <div class="subForm">
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
    <div class="about">
      <h4>{{ about.title }}</h4>
      <p>
        {{ about.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe4',
  props: {
    newsletter: {
      type: Object,
      default() {
        return {
          title: { type: String, default: '' },
          description: { type: String, default: '' },
        }
      },
    },
    about: {
      type: Object,
      default() {
        return {
          title: { type: String, default: '' },
          description: { type: String, default: '' },
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
