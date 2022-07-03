<template>
  <div class="test">
    <div class="section">
      <Heading-style-2 title="Contact Us COMPONENTS" />
      <div class="section">
        <Heading-style-2 title="Contact Us 1" />
        <contact-style-1></contact-style-1>
      </div>

      <div class="section">
        <Heading-style-2 title="Contact Us 1" />
        <div class="contact-info1">
          <contact-style-2></contact-style-2>
        </div>
      </div>

      <div class="section">
        <Heading-style-2 title="Contact Us 3" />
        <div class="container">
          <contact-style-3></contact-style-3>
        </div>
      </div>

      <div class="section">
        <Heading-style-2 title="Contact Us 4" />
        <div class="container">
          <contact-style-4></contact-style-4>
        </div>
      </div>

      <div class="section">
        <Heading-style-2 title="Contact Us 5" />
        <div class="container">
          <contact-style-5></contact-style-5>
        </div>
      </div>

      <div class="section">
        <Heading-style-2 title="Contact Us 6" />
        <div class="container">
          <contact-style-6 />
        </div>
      </div>

      <!-- <div class="section">
        <Heading-style-2 title="Bread Crumbs" />
        <div class="container">
          <breadcrumb-style-1 :pages="pages" />
        </div>
      </div>

      <div class="container">
        <dropdown-style1></dropdown-style1>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      pages: [
        {
          title: 'Home',
          link: '/',
        },

        {
          title: 'Deals',
          link: '#deals',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
