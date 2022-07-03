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

      <textarea
        :id="id ? id : guid"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        :rows="rows && rows"
        :columns="columns && columns"
        class="textFieldC__input"
        :class="{ error: error }"
        @input="(e) => changeEmitter(e)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextAreaStyle1',

  props: {
    id: {
      type: String,
      default: '',
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
    rows: {
      type: Number,
      default: 3,
    },
    columns: {
      type: Number,
      default: 10,
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
