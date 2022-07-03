<template>
  <div class="review">
    <h3 class="title">{{ productTitle }}</h3>
    <p class="subtitle">{{ desc }}</p>
    <ul>
      <li>
        {{ itemOne.itemOneCardStyle11 }}
        <svg
          v-if="itemOne.statusOneCardStyle11"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <path
            id="Icon_awesome-check-circle"
            data-name="Icon awesome-check-circle"
            d="M28.563,14.563a14,14,0,1,1-14-14A14,14,0,0,1,28.563,14.563ZM12.943,21.975,23.33,11.588a.9.9,0,0,0,0-1.277L22.053,9.034a.9.9,0,0,0-1.277,0L12.3,17.5,8.349,13.55a.9.9,0,0,0-1.277,0L5.795,14.827a.9.9,0,0,0,0,1.277l5.871,5.871a.9.9,0,0,0,1.277,0Z"
            transform="translate(-0.563 -0.563)"
            fill="#1cdc6f"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <path
            id="Icon_ionic-ios-close-circle"
            data-name="Icon ionic-ios-close-circle"
            d="M17.375,3.375a14,14,0,1,0,14,14A14,14,0,0,0,17.375,3.375Zm3.547,19.068L17.375,18.9l-3.547,3.547a1.076,1.076,0,1,1-1.521-1.521l3.547-3.547-3.547-3.547a1.076,1.076,0,0,1,1.521-1.521l3.547,3.547,3.547-3.547a1.076,1.076,0,1,1,1.521,1.521L18.9,17.375l3.547,3.547a1.081,1.081,0,0,1,0,1.521A1.068,1.068,0,0,1,20.922,22.443Z"
            transform="translate(-3.375 -3.375)"
            fill="#f22929"
          />
        </svg>
      </li>
      <li>
        {{ itemTwo.itemTwoCardStyle11 }}
        <svg
          v-if="itemTwo.statusTwoCardStyle11"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <path
            id="Icon_awesome-check-circle"
            data-name="Icon awesome-check-circle"
            d="M28.563,14.563a14,14,0,1,1-14-14A14,14,0,0,1,28.563,14.563ZM12.943,21.975,23.33,11.588a.9.9,0,0,0,0-1.277L22.053,9.034a.9.9,0,0,0-1.277,0L12.3,17.5,8.349,13.55a.9.9,0,0,0-1.277,0L5.795,14.827a.9.9,0,0,0,0,1.277l5.871,5.871a.9.9,0,0,0,1.277,0Z"
            transform="translate(-0.563 -0.563)"
            fill="#1cdc6f"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
        >
          <path
            id="Icon_ionic-ios-close-circle"
            data-name="Icon ionic-ios-close-circle"
            d="M17.375,3.375a14,14,0,1,0,14,14A14,14,0,0,0,17.375,3.375Zm3.547,19.068L17.375,18.9l-3.547,3.547a1.076,1.076,0,1,1-1.521-1.521l3.547-3.547-3.547-3.547a1.076,1.076,0,0,1,1.521-1.521l3.547,3.547,3.547-3.547a1.076,1.076,0,1,1,1.521,1.521L18.9,17.375l3.547,3.547a1.081,1.081,0,0,1,0,1.521A1.068,1.068,0,0,1,20.922,22.443Z"
            transform="translate(-3.375 -3.375)"
            fill="#f22929"
          />
        </svg>
      </li>
      <li>
        {{ itemThree.itemThreeCardStyle11 }}
        <span class="annual">${{ itemThree.statusThreeCardStyle11 }}/year</span>
      </li>
      <li>
        {{ itemFour.itemFourCardStyle11 }}

        <span v-if="itemFour.statusFourCardStyle11" class="monthly"
          >Limited</span
        >
        <span v-else class="unlimited">Unlimited</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ReviewCard11',
  props: {
    productTitle: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
    itemOne: {
      type: Object,
      default: () => {},
    },
    itemTwo: {
      type: Object,
      default: () => {},
    },
    itemThree: {
      type: Object,
      default: () => {},
    },
    itemFour: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
