<template>
  <div class="pet-contact-form">
    <form action="">
      <div class="flex rowbar">
        <div class="inptWrpr">
          <input type="text" name="fullName" placeholder="Name" required />
        </div>
        <div class="inptWrpr">
          <input
            type="email"
            name="email"
            placeholder="Email"
            min="6"
            max="13"
            required
          />
        </div>
        <div class="inptWrpr">
          <input type="number" name="phone" placeholder="Phone" required />
        </div>
        <div class="inptWrpr">
          <input type="text" name="subject" placeholder="Subject" required />
        </div>
      </div>
      <textarea
        class="txtAreaFeild"
        placeholder="Enter your message"
        name="message"
      ></textarea>
      <button type="submit" class="sbmtBtn">SUBMIT REQUEST</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactUs1',
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
