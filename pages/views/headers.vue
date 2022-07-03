<template>
  <div>
    <div class="padding-tb">
      <Heading-style-1 title="Header Style1" />
      <div class="padding-tb">
        <app-header-style-1 />
      </div>
    </div>

    <div class="padding-tb">
      <Heading-style-1 title="Header Style2" />
      <div class="padding-tb">
        <app-header-style-2 />
      </div>
    </div>

    <div class="padding-tb">
      <Heading-style-1 title="Header Style3" />
      <div class="padding-tb">
        <app-header-style-3 />
      </div>
    </div>

    <div class="padding-tb">
      <Heading-style-1 title="Header Style4" />
      <div class="padding-tb">
        <app-header-style-4 />
      </div>
    </div>

    <div class="padding-tb">
      <Heading-style-1 title="Header Style5" />
      <div class="padding-tb">
        <app-header-style-5 source-url="glowstudio-logo.png" />
      </div>
    </div>

    <div class="padding-tb">
      <Heading-style-1 title="Header Style6" />
      <div class="padding-tb">
        <app-header-style-6 :is-open="isOpen" @toggle-nav="isOpen = !isOpen" />
      </div>
    </div>

    <div class="padding-tb">
      <Heading-style-1 title="Header Style7 (v1)" />
      <div class="padding-tb">
        <app-header-style-7  />
      </div>
    </div>

    <div class="padding-tb">
      <Heading-style-1 title="Header Style7 (v2)" />
      <div class="padding-tb">
        <app-header-style-7 variant="search" />
      </div>
    </div>

    <div class="padding-tb">
      <Heading-style-1 title="Header Style7 (v3)" />
      <div class="padding-tb">
        <app-header-style-7 :is-logged-in="true" />
      </div>
    </div>

    <div class="padding-tb">
      <Heading-style-1 title="Header Style7 (v4)" />
      <div class="padding-tb">
        <app-header-style-7 variant="search" :is-logged-in="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
