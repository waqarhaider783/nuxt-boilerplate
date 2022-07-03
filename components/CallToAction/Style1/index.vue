<template>
  <div class="section">
    <div class="wrapper">
      <div class="callToAction" :class="{ reverse: reverse }">
        <div class="callToAction__wrapper">
          <div class="callToAction__wrapper__left">
            <figure class="callToAction__figure">
              <img
                :src="
                  sourceUrl
                    ? sourceUrl
                    : 'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                "
                :alt="altText"
              />
            </figure>
          </div>
          <div class="callToAction__wrapper__right">
            <div class="callToAction__details">
              <Heading-style-4 :is-sidebar="false" :title="title" />
              <p class="callToAction__text">{{ description }}</p>
              <a class="callToAction__button" :href="btnUrl">
                {{ btnText }}
                <span class="callToAction__button__icon">
                  <font-awesome-icon :icon="['fa', 'long-arrow-alt-right']" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CallToAction1',
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    description: {
      type: String,
      default: '',
      required: true,
    },
    btnText: {
      type: String,
      default: '',
      required: true,
    },
    btnUrl: {
      type: String,
      default: '',
      required: true,
    },
    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },
    altText: {
      type: String,
      default: '#',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
