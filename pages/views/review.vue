<template>
  <div class="container section">
    <div class="section">
      <Heading-style-2 title="Review Style 1" />
      <div class="grid-column-5">
        <div v-for="(card, index) in card1" :key="index" class="section">
          <review-card-style-1
            :title="card.ratingTitleCardStyle1"
            :value="Number(card.circleRangeCardStyle1)"
            :inner-text="card.ratingNumberCardStyle1"
          />
        </div>
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 2" />
      <div class="section">
        <review-card-style-2
          v-if="card2"
          :head-title="card2.tooltipCardStyle2"
          :discount="card2.discountPriceCardStyle2"
          :title="card2.titleCardStyle2"
          :rating="Number(card2.ratingStarCardStyle2)"
          :source-url-one="card2.brandLogoCardStyle2.sourceUrl"
          :source-url-one-alt="card2.brandLogoCardStyle2.altText"
          :source-url-two="card2.reviewImageCardStyle2.sourceUrl"
          :source-url-two-alt="card2.reviewImageCardStyle2.altText"
          :source-url-three="card2.productImageCardStyle2.sourceUrl"
          :source-url-three-alt="card2.productImageCardStyle2.altText"
          :btn-text="card2.buttonTextCardStyle2"
          :details="card2.titleCardStyle2"
          :list-item="card2 && card2.listCardStyle2"
          :link="card2 && card2.link"
        />
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 3" />
      <div class="section">
        <review-card-style-3
          v-if="card3"
          :img="card3.imageBoxCardStyle3 && card3.imageBoxCardStyle3.sourceUrl"
          :img-alt="
            card3.imageBoxCardStyle3 && card3.imageBoxCardStyle3.altText
          "
          :btn-text-one="card3.btn1TxtCardStyle3"
          :btn-link-one="card3.btn1LnkCardStyle3"
          :btn-text-two="card3.btn2TxtCardStyle3"
          :btn-link-two="card3.btn2LnkCardStyle3"
          :list-one-items="card3.likeListCardStyle3"
          :list-two-items="card3.listItemCardStyle3"
          :list-two-title="card3.titleBoxCardStyle3"
          :title="card3.titleBoxCardStyle3"
          :rating="Number(card3.starsCardStyle3)"
          :list-three-items="card3.dontLikeListCardStyle3"
          :list-three-title="card3.dontLikeTitleCardStyle3"
        />
      </div>
    </div>
    <div class="section">
      <Heading-style-2 title="Review Style 4" />
      <div class="section">
        <review-card-style-4
          v-if="card4"
          :img="card4.imgeCardStyle4 && card4.imgeCardStyle4.sourceUrl"
          :img-alt="card4.imgeCardStyle4 && card4.imgeCardStyle4.altText"
          :title="card4.headingCardStyle4"
          :name="card4.contentCardStyle4"
          :price="card4.priceCardStyle4"
          :text="card4.descriptionCardStyle4"
          :tip-title="card4.titleCardStyle4"
          :tip-text="card4.subTitleCardStyle4"
          :btn-text="card4.buttonTextCardStyle4"
          :link="card4.buttonLinkCardStyle4"
        />
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 5" />
      <div class="section">
        <review-card-style-5
          v-if="card5"
          :title="card5.headingCardStyle5"
          :rating="card5.starsCardStyle5"
          :img="card5.imageCardStyle5 && card5.imageCardStyle5.sourceUrl"
          :img-alt="card5.imageCardStyle5 && card5.imageCardStyle5.altText"
          :pros="card5.listBoxCardStyle5[0].listItemsCardStyle5"
          :cons="card5.listBoxCardStyle5[1].listItemsCardStyle5"
          :text="card5.ratingCardStyle5"
          :btn-text="card5.buttonTextCardStyle5"
          :link="card5.buttonLinkCardStyle5"
        />
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 6" />
      <div class="section">
        <review-card-style-6
          v-if="card6"
          :img="card6.imageCardStyle6 && card6.imageCardStyle6.sourceUrl"
          :img-alt="card6.imageCardStyle6 && card6.imageCardStyle6.altText"
          :title="card6.titleCardStyle6"
          :description="card6.descriptionCardStyle6"
          :is-verified="card6.isverifiedCardStyle6"
          :text-two="card6.tooltipCardStyle6"
          :text-three="card6.listItemsCardStyle6[0].itemsCardStyle6"
          :text-four="card6.listItemsCardStyle6[1].itemsCardStyle6"
          :text-five="card6.listItemsCardStyle6[2].itemsCardStyle6"
          :rating="card6.starsCardStyle6"
          :btn-text="card6.buttonTextCardStyle6"
          :link="card6.buttonLinkCardStyle6"
        />
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 7" />
      <div class="section">
        <review-card-style-7
          v-if="card7"
          :product-img="
            card7.imageBoxCardStyle7 && card7.imageBoxCardStyle7.sourceUrl
          "
          :product-alt="
            card7.imageBoxCardStyle7 && card7.imageBoxCardStyle7.altText
          "
          :rating="card7.ratingBoxCardStyle7"
          :is-verified="card7.isverifiedBoxCardStyle7"
          :tooltip="card7.tooltipBoxCardStyle7"
          :title="card7.titleBoxCardStyle7"
          :desc="card7.descriptionBoxCardStyle7"
          :btn-link="card7.buttonLinkCardStyle7"
          :btn-text="card7.buttonTextCardStyle7"
        />
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 8" />
      <div class="grid-column-3">
        <div v-for="i in 3" :key="i" class="section">
          <review-card-style-8
            v-if="card8"
            :title="card8.titleCardStyle8"
            :desc="card8.descriptionCardStyle8"
            :item-list="card8.listItemsCardStyle8"
          />
        </div>
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 9" />
      <div class="section">
        <review-card-style-9
          v-if="card9"
          :title="card9.titleCardStyle9"
          :code="card9.codeCardStyle9"
          :item-list="card9.listItemCardStyle9"
        />
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 10" />
      <div class="grid-column-3">
        <div v-for="i in 3" :key="i" class="section">
          <review-card-style-10
            v-if="card10"
            :title="card10.titleCardStyle10"
            :sub-title="card10.subTitleCardStyle10"
            :item-list="card10.listItemCardStyle10"
            :product-title="card10.productTitleCardStyle10"
            :desc="card10.descriptionCardStyle10"
          />
        </div>
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 11" />
      <div class="slider">
        <div v-for="i in 3" :key="i" class="section">
          <review-card-style-11
            v-if="card11"
            :product-title="card11.productTitleCardStyle11"
            :desc="card11.descriptionCardStyle11"
            :item-one="card11.listItemOneCardStyle11"
            :item-two="card11.listItemTwoCardStyle11"
            :item-three="card11.listItemThreeCardStyle11"
            :item-four="card11.listItemFourCardStyle11"
          />
        </div>
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 12" />
      <div class="grid-column-5">
        <div v-for="i in 5" :key="i" class="section">
          <review-card-style-12
            v-if="card12"
            :grade="card12.alphaRatingCardStyle12"
            :value="card12.circleRangeCardStyle12"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <Heading-style-2 title="Review Style 13" />
      <review-card-style-13
        v-if="card13"
        :img="card13.imageCardStyle13 && card13.imageCardStyle13.sourceUrl"
        :img-alt="card13.imageCardStyle13 && card13.imageCardStyle13.altText"
        :title="card13.titleCardStyle13"
        :desc="card13.descriptionCardStyle13"
        :pros-cons="card13.listBoxCardStyle13"
      />
    </div>
    <div class="section">
      <Heading-style-2 title="Review Style 14" />
      <review-card-style-14
        v-if="card15"
        :img="card15.imageCardStyle15 && card15.imageCardStyle15.sourceUrl"
        :img-alt="card15.imageCardStyle15 && card15.imageCardStyle15.altText"
        :title="card15.titleCardStyle15"
        :title-pros="
          card15.listCardStyle15 && card15.listCardStyle15[0].headingCardStyle15
        "
        :title-cons="
          card15.listCardStyle15 && card15.listCardStyle15[1].headingCardStyle15
        "
        :list-one-items="
          card15.listCardStyle15 && card15.listCardStyle15[0].itemCardStyle15
        "
        :list-two-items="
          card15.listCardStyle15 && card15.listCardStyle15[1].itemCardStyle15
        "
      />
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 15" />
      <div class="grid-column-2">
        <div v-for="i in 2" :key="i" class="section">
          <review-card-style-15
            v-if="card15"
            :img="card15.imageCardStyle15 && card15.imageCardStyle15.sourceUrl"
            :img-alt="
              card15.imageCardStyle15 && card15.imageCardStyle15.altText
            "
            :title="card15.titleCardStyle15"
            :title-pros="
              card15.listCardStyle15 &&
              card15.listCardStyle15[0].headingCardStyle15
            "
            :title-cons="
              card15.listCardStyle15 &&
              card15.listCardStyle15[1].headingCardStyle15
            "
            :list-one-items="
              card15.listCardStyle15 &&
              card15.listCardStyle15[0].itemCardStyle15
            "
            :list-two-items="
              card15.listCardStyle15 &&
              card15.listCardStyle15[1].itemCardStyle15
            "
          />
        </div>
      </div>
    </div>

    <div class="section">
      <Heading-style-2 title="Review Style 16" />
      <div class="grid-column-3">
        <div v-for="i in 3" :key="i" class="section">
          <review-card-style-16
            v-if="card16"
            :img="card16.imageCardStyle16 && card16.imageCardStyle16.sourceUrl"
            :img-alt="
              card16.imageCardStyle16 && card16.imageCardStyle16.altText
            "
            :list-items="card16.listBoxCardStyle16"
          />
        </div>
      </div>
    </div>
    <div class="section">
      <Heading-style-2 title="Review Style 17" />
      <div>
        <review-card-style-17 />
      </div>
    </div>
  </div>
</template>

<script>
import {
  GET_CARD1,
  GET_CARD2,
  GET_CARD3,
  GET_CARD4,
  GET_CARD5,
  GET_CARD6,
  GET_CARD7,
  GET_CARD8,
  GET_CARD9,
  GET_CARD10,
  GET_CARD11,
  GET_CARD12,
  GET_CARD13,
  GET_CARD15,
  GET_CARD16,
} from '~/store/types'
export default {
  name: 'Review',

  async asyncData({ store }) {
    const [
      card1,
      card2,
      card3,
      card4,
      card5,
      card6,
      card7,
      card8,
      card9,
      card10,
      card11,
      card12,
      card13,
      card15,
      card16,
    ] = await Promise.all([
      store.dispatch(`views/${GET_CARD1}`),
      store.dispatch(`views/${GET_CARD2}`),
      store.dispatch(`views/${GET_CARD3}`),
      store.dispatch(`views/${GET_CARD4}`),
      store.dispatch(`views/${GET_CARD5}`),
      store.dispatch(`views/${GET_CARD6}`),
      store.dispatch(`views/${GET_CARD7}`),
      store.dispatch(`views/${GET_CARD8}`),
      store.dispatch(`views/${GET_CARD9}`),
      store.dispatch(`views/${GET_CARD10}`),
      store.dispatch(`views/${GET_CARD11}`),
      store.dispatch(`views/${GET_CARD12}`),
      store.dispatch(`views/${GET_CARD13}`),
      store.dispatch(`views/${GET_CARD15}`),
      store.dispatch(`views/${GET_CARD16}`),
    ])

    return {
      card1,
      card2,
      card3,
      card4,
      card5,
      card6,
      card7,
      card8,
      card9,
      card10,
      card11,
      card12,
      card13,
      card15,
      card16,
    }
  },
}
</script>
<style lang="scss" scoped src="./index.scss"></style>
