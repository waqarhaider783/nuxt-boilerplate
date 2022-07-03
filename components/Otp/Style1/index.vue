<template>
  <section class="section">
    <div class="container">
      <!-- :key="idx" -->
      <input
        v-for="data in otp"
        :key="data"
        type="text"
        name="otp"
        class="otp"
        maxlength="1"
        :value="data"
        @change="handleOtp(e.target, index)"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      otp: ['', '', '', ''],
    }
  },
  mutations: {
    handleOtp(e, idx) {
      if (isNaN(e.value)) return false
    },
  },
}
</script>

<style scoped lang="scss" src="./index.scss" />
