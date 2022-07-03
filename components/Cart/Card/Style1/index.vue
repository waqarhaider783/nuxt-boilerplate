<template>
  <div class="cartCard">
    <div class="cartCard__wrapper">
      <figure class="cartCard__image">
        <img
          src="../../../../assets/images/enentThumb1.jpg"
          alt="Preview"
        />
      </figure>
      <div class="cartCard__details">
        <div class="cartCard__title">
          <nuxt-link to="#">EYES - LINER STYLO - Noir</nuxt-link>
        </div>
        <div class="cartCard__price">1 x <span class="cartCard__price--primary">Rs 3,999</span></div>
      </div>
      <div class="cartCard__delete">
        <span class="cartCard__delete__icon">
          <font-awesome-icon :icon="['fas', 'times']" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard1',
}
</script>

<style lang="scss" scoped src="./index.scss"/>