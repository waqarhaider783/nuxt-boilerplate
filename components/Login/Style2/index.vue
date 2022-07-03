<template>
  <div class="auth-wrp">
    <div class="left">
      <div class="main-wrp">
        <nuxt-link to="#_" class="logo">
          <img
            src="~/assets/images/barterup/barterrup-white.svg"
            alt="barterrup-white"
          />
        </nuxt-link>
        <h1 class="heading">Welcome!</h1>
        <p class="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
    <div class="right">
      <p class="title">Login to your account</p>
      <p class="subtitle">stay updated with your business</p>
      <div class="input-wrp">
        <p class="title">Phone No</p>
        <!-- <vue-tel-input v-model="text"></vue-tel-input> -->
      </div>
      <!-- <input-textfield-style-1
        name="email"
        label="Email/Phone No"
        type="email"
        :value="email"
        :required="true"
        placeholder="example@abc.com"
        @on-change="inputChangeHandler"
      /> -->
      <input-textfield-style-1
        name="password"
        label="Password"
        type="password"
        :value="password"
        :required="true"
        placeholder="at least 8 characters"
        @on-change="inputChangeHandler"
      />
      <nuxt-link to="#_" class="reset-pass">Forgotten password?</nuxt-link>
      <anchor-style-9 title="sign in" />
      <div class="separator">
        <hr />
        <span class="or">or</span>
      </div>
      <anchor-style-8 variant="facebook" />
      <anchor-style-8 variant="google" />
      <p class="rights">@2020 barterrup all right reserved</p>
      <p class="signup">
        new user? <nuxt-link to="#_"> create account</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      password: '',
      dropdownOptions: {
        showFlags: false,
        showDialCodeInSelection: true,
      },
    }
  },
  methods: {
    inputChangeHandler(e) {
      const { name, value } = e.target
      this[name] = value
    },
  },
}
</script>

<style scoped lang="scss" src="./index.scss" />
