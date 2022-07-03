<template>
  <div style="background-color: var(--bodyColor)">
    <div class="container">
      <!-- Checkbox -->
      <div class="section">
        <Heading-style-2 title="Checkbox Styles" />
        <div class="section">
          <Heading-style-1 title="Search Style 1" />
          <div class="grid-column-4">
            <input-checkbox-style-1 id="checkbox1" name="checkbox1" />

            <input-checkbox-style-1
              id="checkbox2"
              name="checkbox2"
              :checked="true"
            />

            <input-checkbox-style-1
              id="checkbox3"
              name="checkbox2"
              :checked="false"
              :disabled="true"
            />

            <input-checkbox-style-1
              id="checkbox4"
              name="checkbox4"
              :checked="true"
              :disabled="true"
            />
          </div>
        </div>
      </div>

      <!-- Code Verification -->
      <div class="section">
        <Heading-style-2 title="Code Verification Styles" />
        <div class="section">
          <Heading-style-1 title="Code Verification Style 1" />
          <div class="grid-column-2">
            <input-code-verification-style-1 @on-change="codeChangeHandler1" />
            <input-code-verification-style-1 @on-change="codeChangeHandler2" />
          </div>
        </div>
      </div>

      <!-- Input Keyword -->
      <div class="section">
        <Heading-style-2 title="Input Keyword Styles" />
        <div class="section">
          <Heading-style-1 title="Input Keyword Style 1" />
          <div class="grid-column-2">
            <input-keyword-style-1
              name="keyword1"
              label="Keyword 1"
              :value="keyword1"
              :required="true"
              tooltip-text="This is custom tooltip."
              @on-change="keywordChangeHandler"
            />
            <input-keyword-style-1
              name="keyword2"
              label="Keyword 2"
              :value="keyword2"
              :required="true"
              @on-change="keywordChangeHandler"
            />
          </div>
        </div>
      </div>

      <!-- Phone -->
      <div class="section">
        <Heading-style-2 title="Phone Styles" />
        <div class="section">
          <Heading-style-1 title="Phone Style 1" />
          <div class="grid-column-2">
            <input-phone-style-1 />
            <input-phone-style-1 />
          </div>
        </div>
      </div>

      <!-- Radio -->
      <div class="section">
        <Heading-style-2 title="Radio Styles" />
      </div>

      <!-- Search -->
      <div class="section">
        <Heading-style-2 title="Search Styles" />
        <div class="section">
          <Heading-style-1 title="Search Style 1" />
          <div class="grid-column-2">
            <input-search-style-1 placeholder="Search Style 1" />
            <input-search-style-1 placeholder="Search Style 1" />
          </div>
        </div>
      </div>

      <!-- Select -->
      <div class="section">
        <Heading-style-2 title="Select Styles" />
        <div class="section">
          <Heading-style-1 title="Select Styles 1" />
          <div class="grid-column-2">
            <input-select-style-1
              name="select1"
              label="Select 1"
              :options="[
                'Barterrup',
                'Convolytica',
                'Coupon Boa',
                'Mux',
                'Super Saver Mama',
              ]"
              placeholder=""
              :required="true"
              tooltip-text="This is custom tooltip."
              @on-change="inputChangeHandler"
            />
            <input-select-style-1
              name="select1"
              label="Select 1"
              :options="[
                'Barterrup',
                'Convolytica',
                'Coupon Boa',
                'Mux',
                'Super Saver Mama',
              ]"
              placeholder=""
              :required="true"
              tooltip-text="This is custom tooltip."
              @on-change="inputChangeHandler"
            />
          </div>
        </div>
      </div>

      <!-- TextArea -->
      <div class="section">
        <Heading-style-2 title="Textarea Styles" />
        <div class="section">
          <Heading-style-1 title="Textarea Style 1" />
          <div class="grid-column-2">
            <input-textarea-style-1
              name="textfield1"
              label="Textfield 1"
              :value="textarea1"
              :required="true"
              :rows="3"
              :columns="10"
              placeholder="Textfield 1"
              tooltip-text="This is custom tooltip."
              @on-change="inputChangeHandler"
            />
            <input-textarea-style-1
              name="textfield2"
              label="Textfield 2"
              :value="textarea2"
              :required="true"
              :rows="3"
              :columns="10"
              placeholder="Textfield 2"
              @on-change="inputChangeHandler"
            />
          </div>
        </div>
      </div>

      <!-- TextField -->
      <div class="section">
        <Heading-style-2 title="Textfield Styles" />
        <div class="section">
          <Heading-style-1 title="Textfield Style 1" />
          <div class="grid-column-2">
            <input-textfield-style-1
              name="textfield1"
              label="Textfield 1"
              type="text"
              :value="textfield1"
              :required="true"
              placeholder="Textfield 1"
              tooltip-text="This is custom tooltip."
              @on-change="inputChangeHandler"
            />
            <input-textfield-style-1
              name="textfield2"
              label="Textfield 2"
              type="text"
              :value="textfield2"
              :required="true"
              placeholder="Textfield 2"
              @on-change="inputChangeHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inputs',

  data() {
    return {
      keyword1: '',
      keyword2: '',
      textfield1: '',
      textfield2: '',
      textarea1: '',
      textarea2: '',
      select1: '',
    }
  },

  methods: {
    inputChangeHandler(e) {
      const { name, value } = e.target
      this[name] = value
    },

    keywordChangeHandler(obj) {
      const { name, value } = obj
      this[name] = value
    },

    codeChangeHandler1(value) {
      console.log(value)
    },

    codeChangeHandler2(value) {
      console.log(value)
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
