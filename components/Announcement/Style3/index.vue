<template>
   <div class="announcement">
    <div class="announcement__content">
      <div class="announcement__description">
        <span class="announcement__icon">
          <font-awesome-icon :icon="['fas', 'user']"
          />
        </span>
        <p class="announcement__text">
          {{message}}
        </p>
      </div>
      <div class="announcement__anchor">
        <anchor-style-6 url-link="" :title="anchorText"></anchor-style-6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Announcement3',
  props: {
    message: {
      type: String,
      default: '',
    },
    anchorText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped src="./index.scss"/>