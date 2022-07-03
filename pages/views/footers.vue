\
<template>
  <div style="background-color: var(--bodyColor)">
    <!-- 1 -->
    <div class="section">
      <heading-style-1 title="Footer Style 1" />
      <app-footer-style1
        v-if="footer1"
        :data="footer1 && footer1.footerContentStyle1"
        :links="footer1 && footer1.menuColumnStyle1"
      />
      <div v-else class="wrapper section">
        <img src="~/assets/images/loading.gif" alt="loading..." />
      </div>
    </div>

    <!-- 2 -->
    <div class="section">
      <heading-style-1 title="Footer Style 2" />
      <app-footer-style2
        v-if="footer2"
        :image="footer2.footerLogoStyle2 && footer2.footerLogoStyle2.sourceUrl"
        :alt="footer2.footerLogoStyle2 && footer2.footerLogoStyle2.altText"
        :copyright="footer2.copyrightStyle2"
        :menu="footer2.menuStyle2 && footer2.menuStyle2"
        :social="footer2.socialMediaStyle2 && footer2.socialMediaStyle2"
      />
      <div v-else class="wrapper section">
        <img src="~/assets/images/loading.gif" alt="loading..." />
      </div>
    </div>

    <!-- 3 -->
    <div class="section">
      <heading-style-1 title="Footer Style 3" />
      <app-footer-style3
        v-if="footer3"
        :about="footer3.aboutUsColumnStyle3[0]"
        :links="footer3.quickLinksStyle3"
        :social="footer3.socialSectionStyle3"
      />
      <div v-else class="wrapper section">
        <img src="~/assets/images/loading.gif" alt="loading..." />
      </div>
    </div>

    <!-- 4 -->
    <div class="section">
      <heading-style-1 title="Footer Style 4" />
      <app-footer-style4 />
    </div>

    <!-- 5 (v1) -->
    <div class="section">
      <heading-style-1 title="Footer Style 5" />
      <app-footer-style5
        v-if="footer5"
        :bottom="footer5.footerBottomStyle5"
        :columns="footer5.footerColumnStyle5"
      />
      <div v-else class="wrapper section">
        <img src="~/assets/images/loading.gif" alt="loading..." />
      </div>
    </div>

    <!-- 5 (v2) -->
    <div class="section">
      <heading-style-1 title="Footer Style 5 (without payment variant)" />
      <app-footer-style5
        v-if="footer5"
        :bottom="footer5.footerBottomStyle5"
        :columns="footer5.footerColumnStyle5"
        :payment-method="false"
      />
      <div v-else class="wrapper section">
        <img src="~/assets/images/loading.gif" alt="loading..." />
      </div>
    </div>

    <!-- 6 -->
    <div class="section">
      <heading-style-1 title="Footer Style 6" />
      <app-footer-style6
        v-if="footer6"
        :copyright="footer6.copyrightStyle6"
        :description="footer6.descriptionStyle6"
        :image="footer6.imageStyle6"
      />
      <div v-else class="wrapper section">
        <img src="~/assets/images/loading.gif" alt="loading..." />
      </div>
    </div>

    <!-- 7 -->
    <div class="section">
      <heading-style-1 title="Footer Style 7" />
      <app-footer-style-7
        v-if="footer1"
        :data="footer1 && footer1.footerContentStyle1"
        :links="footer1 && footer1.menuColumnStyle1"
      />
    </div>
  </div>
</template>

<script>
import {
  GET_FOOTER1,
  GET_FOOTER2,
  GET_FOOTER3,
  GET_FOOTER5,
  GET_FOOTER6,
} from '~/store/types'
export default {
  async asyncData({ store }) {
    const footer1 = await store.dispatch(`views/${GET_FOOTER1}`)
    const footer2 = await store.dispatch(`views/${GET_FOOTER2}`)
    const footer3 = await store.dispatch(`views/${GET_FOOTER3}`)
    const footer5 = await store.dispatch(`views/${GET_FOOTER5}`)
    const footer6 = await store.dispatch(`views/${GET_FOOTER6}`)
    return { footer1, footer2, footer3, footer5, footer6 }
  },
}
</script>

<style lang="scss" />
