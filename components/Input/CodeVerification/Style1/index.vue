<template>
  <div class="codeVerification">
    <div class="codeVerification__wrapper">
      <input
        ref="codeVerificationInput1"
        type="text"
        name="code1"
        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
        required
        autocomplete="off"
        class="codeVerification__input js-codeVerificationInput"
      />
      <input
        ref="codeVerificationInput2"
        type="text"
        name="code2"
        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
        required
        autocomplete="off"
        class="codeVerification__input js-codeVerificationInput"
      />
      <input
        ref="codeVerificationInput3"
        type="text"
        name="code2"
        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
        required
        autocomplete="off"
        class="codeVerification__input js-codeVerificationInput"
      />
      <input
        ref="codeVerificationInput4"
        type="text"
        name="code4"
        oninput="this.value=this.value.replace(/[^0-9]/g,'');"
        required
        autocomplete="off"
        class="codeVerification__input js-codeVerificationInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeVerificationStyle1',
  data() {
    return {
      inputElements: {},
      output: '',
    }
  },

  watch: {
    inputElements() {
      this.inputFunctionality()
    },

    output(value) {
      this.$emit('on-change', value)
    },
  },

  created() {
    this.inputElements = this.$refs
  },

  methods: {
    inputFunctionality() {
      const inputsArray = Object.values(this.inputElements)

      inputsArray &&
        inputsArray.forEach((el, index) => {
          el.addEventListener('keydown', (e) => {
            // if the keycode is backspace & the current field is empty
            // focus the input before the current. The event then happens
            // which will clear the input before the current
            if (e.keyCode === 8 && e.target.value === '')
              inputsArray[Math.max(0, index - 1)].focus()
          })

          el.addEventListener('input', (e) => {
            // take the first character of the input
            // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
            // but I'm willing to overlook insane security code practices.
            const [first, ...rest] = e.target.value
            e.target.value = first ?? ''
            if (index !== inputsArray.length - 1 && first !== undefined) {
              // continue to input the rest of the string
              inputsArray[index + 1].focus()
              inputsArray[index + 1].value = rest.join('')
              inputsArray[index + 1].dispatchEvent(new Event('input'))
            }

            const values = []
            Object.values(this.$refs)?.forEach((el) => {
              values.push(el.value)
            })
            this.output = values.join('').trim(' ')
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
