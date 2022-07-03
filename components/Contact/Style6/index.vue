<template>
  <div class="contact-form">
    <div class="contact-info">
      <div class="top">
        <h2 class="heading">contact information</h2>
        <p class="description">
          {{ description }}
        </p>
        <div class="links">
          <div class="link">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
            </span>
            <p class="value">
              {{ location }}
            </p>
          </div>
          <div class="link">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </span>
            <p class="value">{{ email }}</p>
          </div>
          <div class="link">
            <span class="icon">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </span>
            <p class="value">{{ contact }}</p>
          </div>
        </div>
      </div>
      <div class="map-direction">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.961074601975!2d67.07343081487865!3d24.83100475255311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d13ab3e2b6d%3A0xf6bed4c788421ac8!2sMux%20Life%20Smart%20Home%20Automation!5e0!3m2!1sen!2s!4v1637041054442!5m2!1sen!2s"
          allowfullscreen=""
          style="border-radius: 15px"
          loading="lazy"
          width="100%"
          height="340px"
          class="map"
        ></iframe>
      </div>
    </div>
    <div class="send-messages">
      <h2 class="heading primary">send us a message</h2>
      <p class="sub-heading">Contact our talent and passionate lawyers</p>
      <form class="form">
        <div class="form__group">
          <input-textfield-style-1
            name="title"
            label="Title"
            type="text"
            :required="true"
            placeholder="Title"
            tooltip-text="This is custom tooltip."
            @on-change="barterInputChangeHandler"
          />
        </div>
        <div class="form__group">
          <input-textfield-style-1
            name="phone"
            label="Phone"
            type="number"
            :required="true"
            placeholder="Phone"
            tooltip-text="This is custom tooltip."
            @on-change="barterInputChangeHandler"
          />
        </div>
        <div class="form__group">
          <input-textfield-style-1
            name="email"
            label="Email"
            type="text"
            :required="true"
            placeholder="Email"
            tooltip-text="This is custom tooltip."
            @on-change="barterInputChangeHandler"
          />
        </div>
        <div class="form__group">
          <input-textfield-style-1
            name="details"
            label="Description"
            type="text"
            :required="true"
            placeholder="type here..."
            tooltip-text="This is custom tooltip."
            @on-change="barterInputChangeHandler"
          />
        </div>
      </form>
      <button class="send-btn">send</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactUs6',
  props: {
    description: {
      type: String,
      default: `If you are facing a complex law issue, contact us on direct, by phone
          or fill out the form to receive a free consultation from our
          experienced trial attorneys`,
    },
    location: {
      type: String,
      default: ` Lorem ipsum dolor sit amet consectetur, adipisicing`,
    },
    contact: {
      type: String,
      default: `+92 3035082321`,
    },
    email: {
      type: String,
      default: ` example@gmail.com`,
    },
  },
  data() {
    return {
      barterDetails: {
        title: '',
        email: '',
        details: '',
        phone: '',
      },
    }
  },
  mounted() {
    this.adjustMap()
  },
  methods: {
    adjustMap() {
      const map = document.querySelector('.map')
      if (window.innerWidth < 560) {
        map.height = '180px'
      }
    },
    barterInputChangeHandler(e) {
      const { name, value } = e.target
      this.barterDetails[name] = value
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
