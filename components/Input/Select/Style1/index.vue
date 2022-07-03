<template>
  <div class="selectC">
    <div class="selectC__wrapper">
      <div class="selectC__top">
        <label
          v-if="label"
          :for="id ? id : guid"
          :class="required ? 'selectC__label required' : 'selectC__label'"
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

      <div class="selectC__bottom">
        <select
          :id="id ? id : guid"
          :name="name"
          :required="required"
          class="selectC__select"
          :class="{ error: error }"
          @input="(e) => changeEmitter(e)"
        >
          <option value="" disabled selected hidden>{{ placeholder }}</option>
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option && option"
          >
            {{ option && option }}
          </option>
        </select>
        <span class="selectC__icon">
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectStyle1',

  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
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
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
