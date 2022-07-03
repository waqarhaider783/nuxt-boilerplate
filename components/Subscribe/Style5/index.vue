<template>
  <div class="section">
    <div class="wrapper">
      <Heading-style-1
        :is-sidebar="false"
        :is-left="false"
        :title="heading"
        :sub-title="description"
        slug=""
      />
      <div class="shapingnutrition-subscribe">
        <form class="sn-subscribe-form">
          <div class="inputWrap">
            <input
              id="input-email"
              type="text"
              name="email"
              placeholder="Email Address"
              required=""
            />
          </div>
          <div class="inputWrap button">
            <button type="submit">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe5',
  props: {
    heading: { default: '', type: String },
    description: { default: '', type: String },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
