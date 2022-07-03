<template>
  <div class="flexWrap">
    <div class="formWrapper">
      <form action="v8_form" @submit="submitForm">
        <div class="inputWrapper">
          <label>Your Name*</label>
          <input
            id="input-name"
            v-model="name"
            type="text"
            name="name"
            value=""
            required=""
          />
        </div>
        <div class="inputWrapper">
          <label>Your Contact Number</label>
          <input v-model="contact" type="text" name="contact" value="" />
        </div>
        <div class="inputWrapper">
          <label>Your Email Address*</label>
          <input
            id="input-email"
            v-model="email"
            type="text"
            name="email"
            value=""
            required=""
          />
        </div>
        <div class="inputWrapper">
          <label>Additional Details</label>
          <input
            id="input-name"
            v-model="detail"
            type="text"
            name="name"
            value=""
            required=""
          />
        </div>
        <div class="accordion_container">
          <div class="accordion_head">
            Product Details<span class="plusminus">+</span>
          </div>
          <div class="accordion_body">
            <div class="inputWrapper">
              <label>Product Name</label>
              <input
                id="input-name"
                v-model="productName"
                type="text"
                name="name"
                value=""
                required=""
              />
            </div>
            <div class="inputWrapper">
              <label>Brand Name</label>
              <input
                id="input-name"
                v-model="brandName"
                type="text"
                name="name"
                value=""
                required=""
              />
            </div>
            <div class="inputWrapper">
              <label>Size/Quantity Variant</label>
              <input
                id="input-name"
                v-model="size"
                type="text"
                name="name"
                value=""
                required=""
              />
            </div>
            <div class="inputWrapper">
              <label>Product category</label>
              <input
                id="input-name"
                v-model="productCategory"
                type="text"
                name="name"
                value=""
                required=""
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
        <div
          :style="responseSuccess ? 'color: #28a745' : 'color: #dc3545'"
          class="inputWrapper responseMessage"
        >
          {{ responseMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductForm1',
  data() {
    return {
      name: '',
      contact: '',
      email: '',
      detail: '',
      productName: '',
      brandName: '',
      size: '',
      productCategory: '',
    }
  },

  methods: {
    submitForm(e) {
      e.preventDefault()
      const submission = new FormData()
      const formData = {}
      for (const entry of new FormData(e.target).entries()) {
        formData[entry[0]] = entry[1]
      }
      submission.append('action', e.target.action.split('/').slice(-1)[0])
      submission.append('site_url', window.location.host)
      submission.append('page_url', window.location.href)
      submission.append('identifier', 'contact-us')
      submission.append('form_type', 'contact-us-form')
      submission.append('form_data', JSON.stringify(formData))

      fetch(
        'https://development.8thloopdataserver.com/wp-admin/admin-ajax.php',
        {
          method: 'POST',
          body: submission,
        }
      ).then((response) => {
        this.showMessage = true
        if (response.ok) {
          this.responseSuccess = true
          this.responseMessage = 'Form submitted successfully.'
          this.name = ''
          this.contact = ''
          this.email = ''
          this.detail = ''
          this.productName = ''
          this.brandName = ''
          this.size = ''
          this.productCategory = ''
        } else {
          this.responseSuccess = false
          this.responseMessage =
            'Failure in submitting the form. Refresh or try again.'
        }

        setInterval(() => {
          this.showMessage = false
        }, 5000)
      })
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
