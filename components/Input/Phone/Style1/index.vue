<template>
  <div class="vueTelInputCustom">
    <vue-tel-input v-model="phone"></vue-tel-input>
  </div>
</template>

<script>
export default {
  name: 'VueTelInputCustom',

  data() {
    return {
      phone: '',
    }
  },

  watch: {
    phone(value) {},
  },
}
</script>
/* Styling Should Not Be Scoped */
<style lang="scss" src="./index.scss" />
