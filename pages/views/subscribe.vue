<template>
  <div>
    <div class="section">
      <Heading-style-2 title="SUBSCRIBE COMPONENTS" />
      <div class="section">
        <Heading-style-2 title="Subscribe 1" />
        <subscribe-style-1
          :heading="subscribe && subscribe.subscribeStyle1.heading"
          :description="subscribe && subscribe.subscribeStyle1.description"
        />
      </div>

      <div class="section">
        <Heading-style-2 title="Subscribe 2" />
        <subscribe-style-2
          :heading="subscribe && subscribe.subscribeStyle1.heading"
          :description="subscribe && subscribe.subscribeStyle1.description"
        />
      </div>

      <div class="section">
        <Heading-style-2 title="Subscribe 3" />
        <subscribe-style-3
          :heading="subscribe && subscribe.subscribeStyle1.heading"
          :description="subscribe && subscribe.subscribeStyle1.description"
        />
      </div>

      <div class="section">
        <Heading-style-2 title="Subscribe 4" />
        <subscribe-style-4
          :newsletter="subscribe && subscribe.subscribeStyle4.newsletter"
          :about="subscribe && subscribe.subscribeStyle4.aboutUs"
        />
        <!-- :heading="subscribe && subscribe.subscribeStyle1.heading"
          :description="subscribe && subscribe.subscribeStyle1.description" -->
      </div>

      <div class="section">
        <Heading-style-2 title="Subscribe 5" />
        <subscribe-style-5
          :heading="subscribe && subscribe.subscribeStyle1.heading"
          :description="subscribe && subscribe.subscribeStyle1.description"
        />
      </div>
      <div class="section">
        <Heading-style-2 title="Subscribe 6" />
        <subscribe-style-6
          :heading="subscribe && subscribe.subscribeStyle1.heading"
          :description="subscribe && subscribe.subscribeStyle1.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_SUBSCRIBE } from '~/store/types'
export default {
  name: 'SubscribeViewsPage',
  async asyncData({ store }) {
    const subscribe = await store.dispatch(`views/${GET_SUBSCRIBE}`)
    return { subscribe }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
