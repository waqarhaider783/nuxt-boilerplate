<template>
  <div class="auth-wrp">
    <div class="left">
      <barter-auth-auth-banner />
    </div>
    <div class="right">
      <div class="right_inner">
        <div class="image">
          <img
            src="~/assets/images/barterup/verification.svg"
            alt="verification icon"
            height="110"
            width="110"
          />
        </div>
        <p class="title">Verification</p>
        <p class="subtitle">enter OTP code send on number you entered</p>
        <div class="input-wrp">
          <p class="title">OTP Code</p>
          <input-code-verification-style-1 @on-change="otpHandler" />
        </div>
        <anchor-style-9 title="verify" />
        <p class="rights">@2020 barterrup all right reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnterOtp',
  data() {
    return {
      otp: null,
    }
  },
  methods: {
    otpHandler(value) {
      this.otp = Number(value)
    },
  },
}
</script>

<style scoped lang="scss" src="./index.scss" />
