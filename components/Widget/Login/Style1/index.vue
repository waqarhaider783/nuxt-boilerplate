<template>
  <div class="account__dropdown">
    <div class="account__wrap">
      <div class="account__inner">
        <div class="account__loginForm">
          <div class="account__loginForm__head">
            <span class="account__loginForm__title">Sign in</span>
            <span class="account__loginForm__link">
              <nuxt-link to="#" class="register-link" title="Register">
                Create an Account
              </nuxt-link>
            </span>
          </div>
        </div>
        <form class="account__loginForm">
          <div class="account__loginForm__group">
            <label>
              Username or email
              <span class="required">*</span>
            </label>
            <input
              name="username"
              type="text"
              required="true"
              placeholder="Username"
            />
          </div>
          <div class="account__loginForm__group">
            <label>Password <span class="required">*</span></label>
            <input
              name="password"
              type="password"
              required="true"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-block w-100 mt-1"
          >
            Login
          </button>
        </form>

        <div class="account__loginForm__bottom">
          <span class="account__loginForm__link">
            <nuxt-link to="#" title="Lost your password?">
              Lost your password?
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginWidget',
}
</script>

<style lang="scss" scoped src="./index.scss" />