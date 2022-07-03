<template>
  <div class="float-btn">
    <div id="container-floating">
      <nuxt-link to="#_" class="nd3 nds">
        <h5>G<span>Give Away</span></h5>
      </nuxt-link>

      <nuxt-link to="#_" class="nd2 nds">
        <h5>IN<span>I-Need</span></h5>
      </nuxt-link>

      <nuxt-link to="#_" class="nd1 nds">
        <h5>B<span>Barter</span></h5>
      </nuxt-link>

      <div id="floating-button">
        <span class="plus">
          <font-awesome-icon :icon="['fas', 'times']" />
        </span>
        <span class="edit">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped src="./index.scss" />
