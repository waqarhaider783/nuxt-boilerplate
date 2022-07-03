<template>
  <div class="textFieldC">
    <div class="textFieldC__wrapper">
      <div class="textFieldC__top">
        <label
          v-if="label"
          :for="id ? id : guid"
          :class="required ? 'textFieldC__label required' : 'textFieldC__label'"
        >
          {{ label }}
        </label>

        <div v-if="tooltipText" class="tooltip">
          <span
            class="tooltip__icon"
            @click="() => (openTooltip = !openTooltip)"
          >
            <font-awesome-icon :icon="['fas', 'info-circle']" />
          </span>

          <div class="tooltip__popup" :class="{ show: openTooltip }">
            <p>{{ tooltipText }}</p>
          </div>
        </div>
      </div>

      <div class="textFieldC__bottom">
        <input
          :id="id ? id : guid"
          ref="input"
          :type="type"
          :name="name"
          :placeholder="placeholder"
          :value="value"
          :required="required"
          class="textFieldC__input"
          :class="{ error: error, number: type === 'number' }"
          @input="(e) => changeEmitter(e)"
        />

        <div v-if="type === 'number'" class="textFieldC__arrows">
          <button
            type="button"
            class="textFieldC__button up"
            @click="increaseCount"
          >
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </button>
          <button
            type="button"
            class="textFieldC__button"
            @click="decreaseCount"
          >
            <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextFieldStyle1',

  props: {
    id: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    tooltipText: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      guid: '',
      openTooltip: false,
    }
  },

  watch: {
    openTooltip(newValue) {
      setTimeout(() => {
        if (newValue) {
          this.openTooltip = !this.openTooltip
        }
      }, [3000])
    },
  },

  created() {
    this.validateType()
  },

  mounted() {
    this.saveGuid()
  },

  methods: {
    saveGuid() {
      this.guid = this.$utilsFN.guid()
    },

    changeEmitter(e) {
      this.$emit('on-change', e)
    },

    validateType() {
      if (
        this.type === 'text' ||
        this.type === 'number' ||
        this.type === 'email' ||
        this.type === 'password'
      ) {
        return ''
      } else {
        throw new Error(
          `input-textfield-style-1 type can only be text, number, email or password.\nCurrent type specified is '${this.type}'.`
        )
      }
    },

    increaseCount() {
      if (this.$refs.input) {
        this.$refs.input.value = Number(this?.$refs?.input?.value) + 1
      }
    },

    decreaseCount() {
      if (this.$refs.input && this.$refs.input.value > 0) {
        this.$refs.input.value = Number(this?.$refs?.input?.value) - 1
      }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
