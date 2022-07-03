<template>
  <div class="keywordC">
    <div class="keywordC__wrapper">
      <div class="keywordC__top">
        <label
          v-if="label"
          :for="id ? id : guid"
          :class="required ? 'keywordC__label required' : 'keywordC__label'"
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

      <div class="keywordC__bottom">
        <div class="keywordContainer">
          <ul>
            <li v-for="(tag, index) in tags" :key="index">
              {{ tag }} <span @click="() => remove(index)">x</span>
            </li>
            <input
              :id="id ? id : guid"
              type="text"
              :name="name"
              :required="required"
              class="keywordC__input"
              :class="{ error: error }"
              spellcheck="false"
              @keyup.enter="addTag"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputKeywordStyle1',

  props: {
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
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
      maxTags: 10,
      usedTags: 0,
      tags: [],
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
    // this.saveGuid()
    this.countTags()
  },

  methods: {
    saveGuid() {
      this.guid = this.$utilsFN.guid()
    },

    // For Tags
    countTags() {
      this.usedTags = this.maxTags - this.tags.length
    },

    remove(index) {
      this.tags = [...this.tags.slice(0, index), ...this.tags.slice(index + 1)]
      this.countTags()
    },

    addTag(e) {
      const tag = e.target.value.replace(/\s+/g, ' ')
      if (tag.length > 1 && !this.tags.includes(tag)) {
        if (this.tags.length < this.maxTags) {
          tag.split(',').forEach((tag) => {
            this.tags.push(tag)
          })
        }
      }
      e.target.value = ''

      this.$emit('on-change', { name: this.name, value: this.tags })
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
