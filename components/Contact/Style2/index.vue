<template>
  <div class="pet-contact-info">
    <ul class="flex rowbar">
      <li>
        <div class="content-box">
          <span class="icon-email">
            <font-awesome-icon :icon="['far', 'envelope']" />
          </span>
          <h4 class="title">Visit Us</h4>
          <p>Morningview Lane Artland Latimer, NA 5045 / 23654</p>
        </div>
      </li>
      <li>
        <div class="content-box">
          <span class="icon-email">
            <font-awesome-icon :icon="['far', 'envelope']" />
          </span>
          <h4 class="title">Phone us</h4>
          <a href="tel:+0123456789">+0123 456 789</a>
          <a href="tel:+7042791249">+704 279 1249</a>
        </div>
      </li>
      <li>
        <div class="content-box">
          <span class="icon-email">
            <font-awesome-icon :icon="['far', 'envelope']" />
          </span>
          <h4 class="title">Mail us</h4>
          <a href="mailto:support@Petsinfomania.com">
            support@Petsinfomania.com
          </a>
          <a href="mailto:help@Petsinfomania.com">help@Petsinfomania.com</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactUs2',
}
</script>

<style lang="scss" src="./index.scss"></style>
