<template>
  <div class="flex rowbar contact">
    <div class="contact__details">
      <div class="heading">
        <h2>Contact Details</h2>
      </div>
      <ul>
        <li>
          <p>
            <span>Phone: </span
            ><a href="tel:+12814689898" title="+1-281-468-9898"
              >+1-281-468-9898</a
            >
          </p>
        </li>
        <li>
          <p>
            <span>Address: </span>Office: 24919 Roesner Road, Katy Texas, 77494
            USA Yard: 518, FM359 Road,<br />Brookshire Texas, 77423 USA
          </p>
        </li>
        <li>
          <p>
            <span>Email: </span>Samad Yazdani Domestic & International
            Sales-Cranes
            <a href="mailto:sam@micoequipment.com" title="sam@micoequipment.com"
              >sam@micoequipment.com</a
            >
          </p>
          <p>
            Rachel Coldewey Executive Office / Logistic Coordinator
            <a
              href="mailto:accounting@micoequipment.com"
              title="accounting@micoequipment.com"
              >accounting@micoequipment.com</a
            >
          </p>
        </li>
      </ul>
    </div>
    <div class="contact__form">
      <div class="heading">
        <h2>Contact Form</h2>
      </div>
      <form class="formWrap">
        <div class="inputWrapper fullColumn">
          <input
            id="input-name"
            type="text"
            name="name"
            value=""
            placeholder="Name"
            required=""
          />
        </div>
        <div class="inputWrapper fullColumn">
          <input
            id="input-email"
            type="text"
            name="email"
            value=""
            placeholder="Email"
            required=""
          />
        </div>
        <div class="inputWrapper fullColumn">
          <input
            id="input-email"
            type="text"
            name="Phone"
            value=""
            placeholder="Phone"
            required=""
          />
        </div>
        <div class="inputWrapper fullColumn">
          <textarea
            id="input-enquiry"
            name="enquiry"
            rows="10"
            placeholder="Hello, i am interested in...."
            required=""
          ></textarea>
        </div>
        <div class="fullColumn">
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs3',
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
