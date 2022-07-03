<template>
  <div class="login_form">
    <form class="login">
      <div class="title">
        <h2>LOGIN</h2>

        <p class="form_row">
          <label for="username"
            >Username:
            <span class="required">*</span>
          </label>
          <input
            type="text"
            class="input-text"
            name="username"
            autocomplete="username"
          />
        </p>
        <p class="form_row">
          <label for="password"
            >Password:
            <span class="required">*</span>
          </label>
          <span class="input-password">
            <input
              type="password"
              class="input-text"
              name="password"
              autocomplete="current-password"
            />
          </span>
        </p>
        <button class="login_button" type="submit" name="login" value="Log in">
          Login
        </button>
        <div class="remember-info">
          <label class="checkbox-inline">
            <input
              type="checkbox"
              class="form_input_checkbox"
              name="rememberme"
              value="forever"
            />
            <span>Remeber Me</span>
          </label>
          <p class="lost_password">
            <nuxt-link to="#_">Lost your Password</nuxt-link>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" src="./index.scss" />
