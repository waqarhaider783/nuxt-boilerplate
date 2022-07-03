<template>
  <div class="create-account">
    <div class="left">
      <barter-auth-auth-banner />
    </div>
    <div class="right">
      <div class="right_inner">
        <p class="title">create a new account</p>
        <p class="subtitle">lorem ipsum</p>
        <div class="max-wrapper">
          <anchor-style-8 variant="facebook" />
          <anchor-style-8 variant="google" />
          <anchor-style-8 variant="phone" />
          <p class="rights">@2020 barterrup all right reserved</p>
          <p class="login">
            Already have an account? <nuxt-link to="#_"> Login</nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" src="./index.scss" />
