<template>
  <div class="cartCard">
    <div class="cartCard__wrapper">
      <div class="cartCard__left">
        <figure class="cartCard__image">
          <img src="../../../../assets/images/enentThumb1.jpg" alt="Preview" />
        </figure>
        <div class="cartCard__details">
          <div class="cartCard__title">
            <label for="product">Product:</label>
            <nuxt-link to="#" name="product"
              >EYES - LINER STYLO - Noir</nuxt-link
            >
          </div>
        </div>
        <div class="cartCard__delete">
          <span class="cartCard__delete__icon">
            <font-awesome-icon :icon="['fas', 'times']" />
          </span>
        </div>
      </div>
      <div class="cartCard__right">
        <div>
          <label for="price">Price:</label>
          <span name="price" class="cartCard__singlePrice">Rs 499</span>
        </div>
        <div>
          <label for="quantity">Quantity:</label>
          <div name="quantity" class="counter">
            <input
              type="button"
              value="-"
              class="counter__btn"
              @click="decrementCounter"
            />
            <input
              v-model="counter"
              type="number"
              class="counter__count"
              step="1"
              min="0"
              max=""
              title="Qty"
              inputmode="numeric"
            />
            <input
              type="button"
              value="+"
              class="counter__btn"
              @click="incrementCounter"
            />
          </div>
        </div>
        <div>
          <label for="total">Total:</label>
          <span name="total" class="cartCard__batchPrice">Rs 1,499</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard2',
  props: {
    count: {
      type: Number,
      default: 5,
    },
  },

  data() {
    return {
      counter: this.count,
    }
  },

  methods: {
    incrementCounter() {
      this.counter += 1
    },
    decrementCounter() {
      this.counter -= 1
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"/>