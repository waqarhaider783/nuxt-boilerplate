<template>
  <transition name="modal-fade">
    <div class="modal__backdrop" @click="close">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        @click="
          (e) => {
            e.preventDefault()
            e.stopPropagation()
          }
        "
      >
        <slot name="header">
          <header class="modal__header">
            <h2>Default Heading</h2>
            <span class="btn-close" aria-label="Close Modal" @click="close">
              <font-awesome-icon :icon="['fas', 'times']" />
            </span>
          </header>
        </slot>

        <section id="modalDescription" class="modal__body">
          <slot name="body"> This is the default body! </slot>
        </section>

        <slot name="footer">
          <footer class="modal__footer">
            <button type="button" aria-label="Close Modal" @click="close">
              Close
            </button>
          </footer>
        </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalStyle1',

  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
