<template>
  <div class="container">
    <section class="section grid-column-6">
      <div class="btn" @click="login = true">
        <button @click="login = true">login</button>
      </div>
      <div class="btn" @click="register = true">
        <button @click="register = true">register</button>
      </div>
      <div class="btn" @click="getOtp = true">
        <button @click="getOtp = true">Get OTP</button>
      </div>
      <div class="btn" @click="enterOtp = true">
        <button @click="enterOtp = true">Enter OTP</button>
      </div>
    </section>
    <popup-style1
      v-show="login"
      :header="false"
      child-component="barter-auth-login"
      @close-modal="login = false"
    />
    <popup-style1
      v-show="register"
      :header="false"
      child-component="barter-auth-register"
      @close-modal="register = false"
    />
    <popup-style1
      v-show="getOtp"
      :header="false"
      child-component="barter-auth-get-otp"
      @close-modal="getOtp = false"
    />
    <popup-style1
      v-show="enterOtp"
      :header="false"
      child-component="barter-auth-enter-otp"
      @close-modal="enterOtp = false"
    />
  </div>
</template>

<script>
export default {
  name: 'AuthScreens',
  data() {
    return {
      login: false,
      register: false,
      enterOtp: false,
      getOtp: false,
      showPopup: false,
      isModalVisible: false,
    }
  },

  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  button {
    background: var(--primaryColor);
    color: var(--whiteTextColor);
    border: none;
    padding: 10px 16px;
    text-transform: uppercase;
    transition: 0.3s background ease-in-out;
    cursor: pointer;
    &:hover {
      background: var(--secondaryColor);
      transition: 0.3s background ease-in-out;
    }
  }
}
.footer__wrapper {
  display: none !important;
}
</style>
