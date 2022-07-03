<template>
  <div class="container">
    <section class="section">
      <div class="save-btn" @click="showPopup = true">
        <button @click="showPopup = true">open popup style 1</button>
      </div>

      <div class="save-btn">
        <button @click="showModal">Open Modal Style 1</button>
      </div>
    </section>

    <popup-style1
      v-show="showPopup"
      :header="false"
      child-component="login-style-2"
      @close-modal="showPopup = false"
    />

    <modal-style-1 v-show="isModalVisible" @close="closeModal">
      <!-- <template #header> This is a new modal header. </template> -->

      <!-- <template #body> This is a new modal body. </template> -->
      <template #body>
        <div class="abc">
          <span>1</span>
          <span>2</span>
        </div>
      </template>

      <!-- <template #footer> This is a new modal footer. </template> -->
    </modal-style-1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      isModalVisible: false,
    }
  },

  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss">
.save-btn {
  button {
    background: var(--primaryColor);
    color: var(--whiteTextColor);
    border: none;
    padding: 10px 16px;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
