<template>
  <div class="subscribe_style">
    <div class="container">
      <div class="subscribeTxt rowbar">
        <div class="image">
          <span class="x_contact">
            <font-awesome-icon :icon="['far', 'envelope']" />
          </span>
        </div>
        <div class="text">
          <h4>{{ heading }}</h4>
          <p>
            {{ description }}
          </p>
        </div>
      </div>
      <form class="subscribeForm rowbar">
        <div class="inputWrap">
          <input
            id="input-email"
            type="text"
            name="email"
            value=""
            placeholder="EMAIL ADDRESS"
            required=""
          />
        </div>
        <div class="inputWrap button">
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe2',
  props: {
    heading: { default: '', type: String },
    description: { default: '', type: String },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
