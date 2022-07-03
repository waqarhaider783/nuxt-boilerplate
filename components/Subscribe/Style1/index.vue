<template>
  <div class="subscribe">
    <div class="container">
      <div class="subscribe__inner">
        <h4>{{ heading }}</h4>
        <p>{{ description }}</p>
        <div class="subscribeForm">
          <form class="flex rowbar">
            <div class="inputWrap oneThird">
              <input
                id="input-name"
                type="text"
                name="fullname"
                value=""
                placeholder="FULL NAME"
                required=""
              />
            </div>
            <div class="inputWrap oneThird">
              <input
                id="input-email"
                type="text"
                name="email"
                value=""
                placeholder="EMAIL ADDRESS"
                required=""
              />
            </div>
            <div class="inputWrap oneThird">
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subscribe1',
  props: {
    heading: { default: '', type: String },
    description: { default: '', type: String },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
