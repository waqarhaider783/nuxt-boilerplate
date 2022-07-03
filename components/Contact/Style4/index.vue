<template>
  <div class="flexWrap">
    <div class="formWrapper">
      <form>
        <div class="inputWrapper">
          <label>Full Name*</label>
          <input id="input-name" type="text" name="name" value="" required="" />
        </div>
        <div class="inputWrapper">
          <label>Email Address*</label>
          <input
            id="input-email"
            type="text"
            name="email"
            value=""
            required=""
          />
        </div>
        <div class="inputWrapper">
          <label>Contact No</label>
          <input type="text" name="fone" value="" />
        </div>
        <div class="inputWrapper">
          <label>Subject*</label>
          <input type="text" name="subject" value="" required="" />
        </div>
        <div class="inputWrapper">
          <label>Message*</label>
          <textarea
            id="input-enquiry"
            name="enquiry"
            rows="10"
            required=""
          ></textarea>
        </div>
        <button type="submit">Submit Message</button>
      </form>
    </div>
    <div class="contLocation">
      <div class="contactBg">
        <div class="description">
          <div class="contInfo">
            <p>MyCoupons®</p>
            <p>22491 Garrett Highway</p>
            <p>McHenry, MD 21541</p>
          </div>
          <div class="globeImage">
            <img src="~images/globe.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs4',
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
