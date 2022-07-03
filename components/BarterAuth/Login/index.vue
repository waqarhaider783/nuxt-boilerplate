<template>
  <div class="auth-wrp">
    <div class="left">
      <barter-auth-auth-banner />
    </div>
    <div class="right">
      <div class="right_inner">
        <p class="title">Login to your account</p>
        <p class="subtitle">stay updated with your business</p>
        <input-textfield-style-1
          name="email"
          label="Email"
          type="text"
          :value="email"
          :required="true"
          placeholder="Email"
          tooltip-text="This is custom tooltip."
          :error="emailError"
          @on-change="inputChangeHandler"
        />
        <input-textfield-style-1
          name="password"
          label="Password"
          type="password"
          :value="password"
          :required="true"
          placeholder="at least 8 characters"
          tooltip-text="This is custom tooltip."
          @on-change="inputChangeHandler"
        />
        <div class="max-wrp">
          <nuxt-link to="#_" class="reset-pass">Forgotten password?</nuxt-link>
          <anchor-style-9 title="sign in" :min="true" />
          <div class="separator">
            <hr />
            <span class="or">or</span>
          </div>
          <anchor-style-8 variant="facebook" :min="false" />
          <anchor-style-8 variant="google" :min="false" />
          <p class="rights">@2020 barterrup all right reserved</p>
          <p class="signup">
            new user? <nuxt-link to="#_"> create account</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      dropdownOptions: {
        showFlags: false,
        showDialCodeInSelection: true,
      },
      email: '',
      password: '',
      emailError: false,
    }
  },
  watch: {
    email(value) {
      this.validateEmail(value)
    },
  },
  methods: {
    inputChangeHandler(e) {
      const { name, value } = e.target
      this[name] = value
    },
    validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
      this.emailError = !emailRegex.test(email)
    },
  },
}
</script>

<style scoped lang="scss" src="./index.scss" />
