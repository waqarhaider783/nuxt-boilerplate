<template>
  <div class="container">
    <section class="section padding-bottom-none">
      <heading-style-1 title="Click & Copy" />
    </section>
    <section class="section">
      <div class="title">Solid Icons</div>
      <div class="grid-column-6">
        <div
          v-for="(icon, _idx) in solid"
          :key="_idx"
          class="icon-wrp"
          :title="'fas-' + icon"
          @click="(e) => iconCopied(e)"
        >
          <font-awesome-icon :icon="['fas', icon]" />
          <p class="icon-name">fas-{{ icon }}</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="title">Regular Icons</div>
      <div class="grid-column-6">
        <div
          v-for="(icon, _idx) in regular"
          :key="_idx"
          class="icon-wrp"
          to="#_"
          :title="'fas-' + icon"
          @click="(e) => iconCopied(e)"
        >
          <font-awesome-icon :icon="['far', icon]" />
          <p class="icon-name">far-{{ icon }}</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="title">Brands Icons</div>
      <div class="grid-column-6">
        <div
          v-for="(icon, _idx) in brands"
          :key="_idx"
          class="icon-wrp"
          to="#_"
          :title="'fas-' + icon"
          @click="(e) => iconCopied(e)"
        >
          <font-awesome-icon :icon="['fab', icon]" />
          <p class="icon-name">fab-{{ icon }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    solid: {
      type: Array,
      default: () => [
        'bars',
        'times',
        'folder-open',
        'external-link-alt',
        'search',
        'check',
        'clock',
        'chevron-down',
        'user',
        'envelope',
        'long-arrow-alt-right',
        'shopping-cart',
        'circle',
        'star',
        'certificate',
        'toggle-off',
        'bookmark',
        'heart',
        'share-alt',
        'phone-alt',
        'map-marker-alt',
        'info-circle',
        'pen',
      ],
    },
    regular: {
      type: Array,
      default: () => ['clock', 'check-square', 'envelope', 'heart', 'bookmark'],
    },
    brands: {
      type: Array,
      default: () => [
        'github',
        'facebook',
        'twitter',
        'google-plus-g',
        'linkedin-in',
        'instagram',
        'telegram-plane',
        'behance',
      ],
    },
  },
  methods: {
    iconCopied(a) {
      const icon = a?.target?.outerText
      navigator.clipboard.writeText(
        `<font-awesome-icon :icon="['${icon?.substring(
          0,
          3
        )}', '${icon?.substring(4, icon.length)}']"/>`
      )
      alert('Icon Copied')
    },
  },
}
</script>

<style lang="scss" scoped>
.icons-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
}
.title {
  font-size: 26px;
  font-weight: 600;
  line-height: 2em;
  color: var(--blackTextColor);
}
.icon-wrp {
  font-size: 40px;
  color: gray;
  text-align: center;
  background: #e2e2e2;
  padding: 1.3rem 0;
  transition: 0.2s background ease-in-out, 0.2s color ease-in-out;
  cursor: pointer;
  // * {
  //   cursor: pointer;
  // }
  &:hover {
    transition: 0.2s background ease-in-out, 0.2s color ease-in-out;
    background: #c2c2c2;
    color: var(--blackTextColor);
  }
  .icon-name {
    font-size: 1rem;
    color: var(--blackTextColor);
    margin-top: 10px;
  }
}
</style>
