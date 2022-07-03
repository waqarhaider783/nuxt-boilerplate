<template>
  <div class="registration_form">
    <form class="registrer">
      <div class="title">
        <h2>Register</h2>
        <p class="user-text">
          Creating an account is quick and easy, and will allow you to move
          through our checkout quicker.
        </p>

        <p class="form_row">
          <label for="username"
            >Email Address:
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
        <button
          class="login_button"
          type="submit"
          name="register"
          value="Register"
        >
          Register
        </button>
        <!-- <div class="remember-info">
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
          </div> -->
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" src="./index.scss"></style>
