<template>
  <div class="container">
    <div class="section">
      <Heading-style-1 title="Service Card Style 1" />
      <service-style-1
        :title="service1 && service1.cardStyle1Heading"
        :sub-title="service1 && service1.cardStyle1SubHeading"
        :cards="service1 && service1.serviceColumnCardStyle1"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 2" />
      <service-style-2
        :title="service2 && service2.cardStyle2Heading"
        :sub-title="service2 && service2.cardStyle2SubHeading"
        :cards="service2 && service2.cardStyle2ServicesColumn"
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Service Card Style 3" />
      <service-style-3
        :title="service3 && service3.cardStyle3Heading"
        :sub-title="service3 && service3.cardStyle3SubHeading"
        :btn-text="service3 && service3.cardStyle3BtnTxt"
        :link="service3 && service3.cardStyle3BtnLink"
        :cards="service3 && service3.cardStyle3ServicesColumn"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 4" />
      <service-style-4
        :title="service4 && service4.cardStyle4Heading"
        :sub-title="service4 && service4.cardStyle4SubHeading"
        :cards="service4 && service4.serviceColumnCardStyle4"
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Service Card Style 5" />
      <service-style-5
        :title="service5 && service5.cardStyle5Heading"
        :sub-title="service5 && service5.cardStyle5SubHeading"
        :cards="service5 && service5.serviceColumnCardStyle5"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 6" />
      <service-style-6
        :title="service6 && service6.serviceCardStyle6Heading"
        :sub-title="service6 && service6.serviceStyle6Description"
        :source-url="
          service6 &&
          service6.serviceCardStyle6Image &&
          service6.serviceCardStyle6Image.sourceUrl
        "
        :alt-text="
          service6 &&
          service6.serviceCardStyle6Image &&
          service6.serviceCardStyle6Image.altText
        "
        :cards="service6 && service6.serviceCardStyle6Lists"
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Service Card Style 7" />
      <service-style-7
        :title="service5 && service5.cardStyle5Heading"
        :sub-title="service5 && service5.cardStyle5SubHeading"
        :cards="service5 && service5.serviceColumnCardStyle5"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 8" />
      <service-style-8
        :title="service4 && service4.cardStyle4Heading"
        :sub-title="service4 && service4.cardStyle4SubHeading"
        :cards="service4 && service4.serviceColumnCardStyle4"
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Service Card Style 9" />
      <service-style-9
        :title="service5 && service5.cardStyle5Heading"
        :sub-title="service5 && service5.cardStyle5SubHeading"
        :cards="service5 && service5.serviceColumnCardStyle5"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 10" />
      <service-style-10
        :title="service5 && service5.cardStyle5Heading"
        :sub-title="service5 && service5.cardStyle5SubHeading"
        :service-data="service5 && service5.serviceColumnCardStyle5"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 11" />
      <service-style-11
        :title="service1 && service1.cardStyle1Heading"
        :sub-title="service1 && service1.cardStyle1SubHeading"
        :cards="service1 && service1.serviceColumnCardStyle1"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 12" />
      <service-style-12
        :title="service5 && service5.cardStyle5Heading"
        :sub-title="service5 && service5.cardStyle5SubHeading"
        :service-data="service5 && service5.serviceColumnCardStyle5"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 13" />
      <service-style-13
        :title="
          service13 &&
          service13.cardStyle13ServiceColumn &&
          service13.cardStyle13ServiceColumn[0].cardStyle13Heading
        "
        :sub-title="
          service13 &&
          service13.cardStyle13ServiceColumn &&
          service13.cardStyle13ServiceColumn[0].cardStyle13Description
        "
        :source-url="
          service13 &&
          service13.cardStyle13ServiceColumn &&
          service13.cardStyle13ServiceColumn[0].cardStyle13Image &&
          service13.cardStyle13ServiceColumn[0].cardStyle13Image.sourceUrl
        "
      />
      <service-style-13
        :isreverse="true"
        :title="
          service13 &&
          service13.cardStyle13ServiceColumn &&
          service13.cardStyle13ServiceColumn[0].cardStyle13Heading
        "
        :sub-title="
          service13 &&
          service13.cardStyle13ServiceColumn &&
          service13.cardStyle13ServiceColumn[0].cardStyle13Description
        "
        :source-url="
          service13 &&
          service13.cardStyle13ServiceColumn &&
          service13.cardStyle13ServiceColumn[0].cardStyle13Image &&
          service13.cardStyle13ServiceColumn[0].cardStyle13Image.sourceUrl
        "
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 14" />
      <service-style-14
        :title="service14 && service14.cardStyle14Heading"
        :sub-title="service14 && service14.cardStyle14SubHeading"
        :description="service14 && service14.cardStyle14Description"
        :btn-text="service14 && service14.cardStyle14BtnTxt"
        :link="service14 && service14.cardStyle14BtnLink"
        :source-url="
          service14 &&
          service14.cardStyle14Image &&
          service14.cardStyle14Image.sourceUrl
        "
        :list-item="service14 && service14.cardStyle14Lists"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 15" />
      <service-style-15
        :title="service15 && service15.cardStyle15Heading"
        :sub-title="service15 && service15.cardStyle15Description"
        :btn-text="service15 && service15.cardStyle15BtnTxt"
        :link="service15 && service15.cardStyle15BtnLink"
        :source-url="
          service15 &&
          service15.cardStyle15Image &&
          service15.cardStyle15Image.sourceUrl
        "
        :cards="service15 && service15.cardStyle15Lists"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 16" />
      <service-style-16
        :title="service1 && service1.cardStyle1Heading"
        :sub-title="service1 && service1.cardStyle1SubHeading"
        :cards="service1 && service1.serviceColumnCardStyle1"
      />
    </div>
    <div class="section">
      <Heading-style-1 title="Service Card Style 19" />
      <service-style-19
        :title="service14 && service14.cardStyle14Heading"
        :sub-title="service14 && service14.cardStyle14SubHeading"
        :description="service14 && service14.cardStyle14Description"
        :btn-text="service14 && service14.cardStyle14BtnTxt"
        :link="service14 && service14.cardStyle14BtnLink"
        :source-url="
          service14 &&
          service14.cardStyle14Image &&
          service14.cardStyle14Image.sourceUrl
        "
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Service Card Style 20" />
      <service-style-20
        :title="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20Heading
        "
        :description="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20Description
        "
        :btn-text="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20BtnTxt
        "
        :link="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20BtnLink
        "
        :source-url="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20Image &&
          service20.cardStyle20ServiceColumn[0].cardStyle20Image.sourceUrl
        "
      />
      <service-style-20
        :isreverse="true"
        :title="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20Heading
        "
        :description="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20Description
        "
        :btn-text="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20BtnTxt
        "
        :link="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20BtnLink
        "
        :source-url="
          service20 &&
          service20.cardStyle20ServiceColumn[0] &&
          service20.cardStyle20ServiceColumn[0].cardStyle20Image &&
          service20.cardStyle20ServiceColumn[0].cardStyle20Image.sourceUrl
        "
      />
    </div>
  </div>
</template>

<script>
import {
  GET_SERVICE1,
  GET_SERVICE2,
  GET_SERVICE3,
  GET_SERVICE4,
  GET_SERVICE5,
  GET_SERVICE6,
  GET_SERVICE13,
  GET_SERVICE14,
  GET_SERVICE15,
  GET_SERVICE20,
} from '~/store/types'
export default {
  async asyncData({ store }) {
    const service1 = await store.dispatch(`views/${GET_SERVICE1}`)
    const service2 = await store.dispatch(`views/${GET_SERVICE2}`)
    const service3 = await store.dispatch(`views/${GET_SERVICE3}`)
    const service4 = await store.dispatch(`views/${GET_SERVICE4}`)
    const service5 = await store.dispatch(`views/${GET_SERVICE5}`)
    const service6 = await store.dispatch(`views/${GET_SERVICE6}`)
    const service13 = await store.dispatch(`views/${GET_SERVICE13}`)
    const service14 = await store.dispatch(`views/${GET_SERVICE14}`)
    const service15 = await store.dispatch(`views/${GET_SERVICE15}`)
    const service20 = await store.dispatch(`views/${GET_SERVICE20}`)

    return {
      service1,
      service2,
      service3,
      service4,
      service5,
      service6,
      service13,
      service14,
      service15,
      service20,
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
