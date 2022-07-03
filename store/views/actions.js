import aboutQuery from '@/apollo/queries/about.gql'
import accordions from '~/apollo/queries/accordions.gql'
import announcementQuery from '@/apollo/queries/announcement.gql'
import bannerQuery from '@/apollo/queries/banner.gql'
import blogPosts from '~/apollo/queries/blogPosts.gql'
import brandsQuery from '@/apollo/queries/brands.gql'
import callToActionQuery from '@/apollo/queries/callToAction.gql'
import categoriesQuery from '@/apollo/queries/categories.gql'
import coupons from '@/apollo/queries/coupons.gql'
import footer1 from '@/apollo/queries/footers/footerStyle1.gql'
import footer2 from '@/apollo/queries/footers/footerStyle2.gql'
import footer3 from '@/apollo/queries/footers/footerStyle3.gql'
import footer5 from '@/apollo/queries/footers/footerStyle5.gql'
import footer6 from '@/apollo/queries/footers/footerStyle6.gql'
import galleryQuery from '@/apollo/queries/gallery.gql'
import headerQuery from '@/apollo/queries/header.gql'
import postsQuery from '@/apollo/queries/posts.gql'
import productCardsQuery from '~/apollo/queries/productCards.gql'
import service1 from '@/apollo/queries/services/serviceStyle1.gql'
import service2 from '@/apollo/queries/services/serviceStyle2.gql'
import service3 from '@/apollo/queries/services/serviceStyle3.gql'
import service4 from '@/apollo/queries/services/serviceStyle4.gql'
import service5 from '@/apollo/queries/services/serviceStyle5.gql'
import service6 from '@/apollo/queries/services/serviceStyle6.gql'
import service13 from '@/apollo/queries/services/serviceStyle13.gql'
import service14 from '@/apollo/queries/services/serviceStyle14.gql'
import service15 from '@/apollo/queries/services/serviceStyle15.gql'
import service20 from '@/apollo/queries/services/serviceStyle20.gql'
import siteLogoQuery from '@/apollo/queries/siteLogo.gql'
import slidersQuery from '@/apollo/queries/sliders.gql'
import subscribeQuery from '@/apollo/queries/subscribe.gql'
import testimonials from '@/apollo/queries/testimonials.gql'
import usp from '@/apollo/queries/usp.gql'
import team from '@/apollo/queries/team.gql'

// Reimplementing Reviews
import card1 from '@/apollo/queries/reviews/cards/card1.gql'
import card2 from '@/apollo/queries/reviews/cards/card2.gql'
import card3 from '@/apollo/queries/reviews/cards/card3.gql'
import card4 from '@/apollo/queries/reviews/cards/card4.gql'
import card5 from '@/apollo/queries/reviews/cards/card5.gql'
import card6 from '@/apollo/queries/reviews/cards/card6.gql'
import card7 from '@/apollo/queries/reviews/cards/card7.gql'
import card8 from '@/apollo/queries/reviews/cards/card8.gql'
import card9 from '@/apollo/queries/reviews/cards/card9.gql'
import card10 from '@/apollo/queries/reviews/cards/card10.gql'
import card11 from '@/apollo/queries/reviews/cards/card11.gql'
import card12 from '@/apollo/queries/reviews/cards/card12.gql'
import card13 from '@/apollo/queries/reviews/cards/card13.gql'
import card14 from '@/apollo/queries/reviews/cards/card14.gql'
import card15 from '@/apollo/queries/reviews/cards/card15.gql'
import card16 from '@/apollo/queries/reviews/cards/card16.gql'

import {
  GET_ABOUT_US,
  SET_ABOUT_US,
  GET_ACCORDIONS,
  SET_ACCORDIONS,
  GET_ANNOUNCEMENTS,
  SET_ANNOUNCEMENTS,
  GET_BANNER,
  SET_BANNER,
  GET_BLOG_POSTS,
  SET_BLOG_POSTS,
  GET_BRANDS,
  SET_BRANDS,
  GET_CATEGORIES,
  SET_CATEGORIES,
  GET_COUPONS,
  SET_COUPONS,
  GET_CTA,
  SET_CTA,
  GET_FOOTER1,
  SET_FOOTER1,
  GET_FOOTER2,
  SET_FOOTER2,
  GET_FOOTER3,
  SET_FOOTER3,
  GET_FOOTER5,
  SET_FOOTER5,
  GET_FOOTER6,
  SET_FOOTER6,
  GET_GALLERY,
  SET_GALLERY,
  GET_HEADERS,
  SET_HEADERS,
  GET_LOGO,
  SET_LOGO,
  GET_POSTS,
  SET_POSTS,
  GET_PRODUCT_CARDS,
  SET_PRODUCT_CARDS,
  GET_SERVICE1,
  SET_SERVICE1,
  GET_SERVICE2,
  SET_SERVICE2,
  GET_SERVICE3,
  SET_SERVICE3,
  GET_SERVICE4,
  SET_SERVICE4,
  GET_SERVICE5,
  SET_SERVICE5,
  GET_SERVICE6,
  SET_SERVICE6,
  GET_SERVICE13,
  SET_SERVICE13,
  GET_SERVICE14,
  SET_SERVICE14,
  GET_SERVICE15,
  SET_SERVICE15,
  GET_SERVICE20,
  SET_SERVICE20,
  GET_SLIDERS,
  SET_SLIDERS,
  GET_SUBSCRIBE,
  SET_SUBSCRIBE,
  GET_TESTIMONIALS,
  SET_TESTIMONIALS,
  GET_USP,
  SET_USP,
  GET_TEAM,
  SET_TEAM,

  // Reimpplementing Reviews,
  GET_CARD1,
  SET_CARD1,
  GET_CARD2,
  SET_CARD2,
  GET_CARD3,
  SET_CARD3,
  GET_CARD4,
  SET_CARD4,
  GET_CARD5,
  SET_CARD5,
  SET_CARD6,
  GET_CARD6,
  GET_CARD7,
  SET_CARD7,
  GET_CARD8,
  SET_CARD8,
  GET_CARD9,
  SET_CARD9,
  GET_CARD10,
  SET_CARD10,
  GET_CARD11,
  SET_CARD11,
  GET_CARD12,
  SET_CARD12,
  GET_CARD13,
  SET_CARD13,
  GET_CARD14,
  SET_CARD14,
  GET_CARD15,
  SET_CARD15,
  GET_CARD16,
  SET_CARD16,
} from '@/store/types'

export default {
  // Reimplementing Reviews
  [GET_CARD16]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card16 })
        .then((resp) => {
          commit(
            SET_CARD16,
            resp.data.reviews.edges[0].node.reviewCardStyle16
              .reviewBoxCardStyle16[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle16
              .reviewBoxCardStyle16[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD15]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card15 })
        .then((resp) => {
          commit(
            SET_CARD15,
            resp.data.reviews.edges[0].node.reviewCardStyle15
              .reviewBoxCardStyle15[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle15
              .reviewBoxCardStyle15[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD14]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card14 })
        .then((resp) => {
          commit(
            SET_CARD14,
            resp.data.reviews.edges[0].node.reviewCardStyle14
              .reviewBoxCardStyle14[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle14
              .reviewBoxCardStyle14[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD13]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card13 })
        .then((resp) => {
          commit(
            SET_CARD13,
            resp.data.reviews.edges[0].node.reviewCardStyle13
              .reviewBoxCardStyle13[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle13
              .reviewBoxCardStyle13[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD12]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card12 })
        .then((resp) => {
          commit(
            SET_CARD12,
            resp.data.reviews.edges[0].node.reviewCardStyle12
              .reviewBoxCardStyle12[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle12
              .reviewBoxCardStyle12[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD11]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card11 })
        .then((resp) => {
          commit(
            SET_CARD11,
            resp.data.reviews.edges[0].node.reviewCardStyle11
              .reviewBoxCardStyle11[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle11
              .reviewBoxCardStyle11[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD10]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card10 })
        .then((resp) => {
          commit(
            SET_CARD10,
            resp.data.reviews.edges[0].node.reviewCardStyle10
              .reviewBoxCardStyle10[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle10
              .reviewBoxCardStyle10[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD9]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card9 })
        .then((resp) => {
          commit(SET_CARD9, resp.data.reviews.edges[0].node.reviewCardStyle9)
          resolve(resp.data.reviews.edges[0].node.reviewCardStyle9)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD8]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card8 })
        .then((resp) => {
          commit(
            SET_CARD8,
            resp.data.reviews.edges[0].node.reviewCardStyle8
              .reviewBoxCardStyle8[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle8
              .reviewBoxCardStyle8[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD7]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card7 })
        .then((resp) => {
          commit(
            SET_CARD7,
            resp.data.reviews.edges[0].node.reviewCardStyle7
              .contentBoxCardStyle7[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle7
              .contentBoxCardStyle7[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD5]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card5 })
        .then((resp) => {
          commit(
            SET_CARD5,
            resp.data.reviews.edges[0].node.reviewCardStyle5
              .reviewBoxCardStyle5[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle5
              .reviewBoxCardStyle5[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD6]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card6 })
        .then((resp) => {
          commit(
            SET_CARD6,
            resp.data.reviews.edges[0].node.reviewCardStyle6
              .reviewBoxCardStyle6[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle6
              .reviewBoxCardStyle6[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD4]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card4 })
        .then((resp) => {
          commit(
            SET_CARD4,
            resp.data.reviews.edges[0].node.reviewCardStyle4
              .reviewBoxCardStyle4[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle4
              .reviewBoxCardStyle4[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD3]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card3 })
        .then((resp) => {
          commit(
            SET_CARD3,
            resp.data.reviews.edges[0].node.reviewCardStyle3
              .contentBoxCardStyle3[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle3
              .contentBoxCardStyle3[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD2]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card2 })
        .then((resp) => {
          commit(
            SET_CARD2,
            resp.data.reviews.edges[0].node.reviewCardStyle2
              .reviewBoxCardStyle2[0]
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle2
              .reviewBoxCardStyle2[0]
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_CARD1]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: card1 })
        .then((resp) => {
          commit(
            SET_CARD1,
            resp.data.reviews.edges[0].node.reviewCardStyle1.reviewBoxCardStyle1
          )
          resolve(
            resp.data.reviews.edges[0].node.reviewCardStyle1.reviewBoxCardStyle1
          )
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_ABOUT_US]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: aboutQuery,
        })
        .then((resp) => {
          commit(SET_ABOUT_US, resp.data?.pages?.edges[0]?.node)
          resolve(resp.data?.pages?.edges[0]?.node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_ACCORDIONS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: accordions,
        })
        .then((resp) => {
          commit(SET_ACCORDIONS, resp.data.pages.edges[0].node)
          resolve(resp.data.pages.edges[0].node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_ANNOUNCEMENTS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: announcementQuery,
        })
        .then((resp) => {
          commit(SET_ANNOUNCEMENTS, resp.data?.pages?.edges[0]?.node)
          resolve(resp.data?.pages?.edges[0]?.node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_BANNER]({ commit }, name) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: bannerQuery, variables: { name } })
        .then((resp) => {
          commit(SET_BANNER, resp.data.pages.edges[0].node)
          resolve(resp.data.pages.edges[0].node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_BLOG_POSTS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: blogPosts,
        })
        .then((resp) => {
          commit(SET_BLOG_POSTS, resp.data.posts.edges[0].node)
          resolve(resp.data.posts.edges[0].node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_BRANDS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: brandsQuery,
        })
        .then((resp) => {
          commit(SET_BRANDS, resp.data.pages.edges[0].node)
          resolve(resp.data.pages.edges[0].node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  // To Get All Categories
  [GET_CATEGORIES]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: categoriesQuery,
        })
        .then((resp) => {
          commit(SET_CATEGORIES, resp.data.categories.edges)
          resolve(resp.data.categories.edges)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  // To Get Call To Action Data
  [GET_CTA]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: callToActionQuery,
        })
        .then((resp) => {
          commit(SET_CTA, resp.data.pages.edges[0].node)
          resolve(resp.data.pages.edges[0].node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_FOOTER1]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: footer1,
        })
        .then((resp) => {
          commit(SET_FOOTER1, resp.data.pages.edges[0].node.footerStyle1)
          resolve(resp.data.pages.edges[0].node.footerStyle1)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_FOOTER2]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: footer2,
        })
        .then((resp) => {
          commit(SET_FOOTER2, resp.data.pages.edges[0].node.footerStyle2)
          resolve(resp.data.pages.edges[0].node.footerStyle2)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_FOOTER3]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: footer3 })
        .then((resp) => {
          commit(SET_FOOTER3, resp.data.pages.edges[0].node.footerStyle3)
          resolve(resp.data.pages.edges[0].node.footerStyle3)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_FOOTER5]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: footer5 })
        .then((resp) => {
          commit(SET_FOOTER5, resp.data.pages.edges[0].node.footerStyle5)
          resolve(resp.data.pages.edges[0].node.footerStyle5)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_FOOTER6]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: footer6 })
        .then((resp) => {
          commit(SET_FOOTER6, resp.data.pages.edges[0].node.footerStyle6)
          resolve(resp.data.pages.edges[0].node.footerStyle6)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_GALLERY]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: galleryQuery })
        .then((resp) => {
          commit(SET_GALLERY, resp.data.pages.edges[0].node.galleryStyle1)
          resolve(resp.data.pages.edges[0].node.galleryStyle1)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_COUPONS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: coupons })
        .then((resp) => {
          commit(SET_COUPONS, resp.data.customCoupons.edges)
          resolve(resp.data.customCoupons.edges)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_HEADERS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: headerQuery,
        })
        .then((resp) => {
          commit(SET_HEADERS, resp.data.pages.edges[0].node)
          resolve(resp.data.pages.edges[0].node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_LOGO]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: siteLogoQuery,
        })
        .then((resp) => {
          commit(SET_LOGO, resp.data.siteLogo)
          resolve(resp.data.siteLogo)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_POSTS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: postsQuery,
        })
        .then((resp) => {
          commit(SET_POSTS, resp.data.posts.edges)
          resolve(resp.data.posts.edges)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_PRODUCT_CARDS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: productCardsQuery,
        })
        .then((resp) => {
          commit(SET_PRODUCT_CARDS, resp.data.products)
          resolve(resp.data.products)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_SERVICE1]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service1,
        })
        .then((resp) => {
          commit(SET_SERVICE1, resp.data.pages.edges[0].node.serviceCardStyle1)
          resolve(resp.data.pages.edges[0].node.serviceCardStyle1)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_SERVICE2]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service2,
        })
        .then((resp) => {
          commit(SET_SERVICE2, resp.data.pages.edges[0].node.serviceCardStyle2)
          resolve(resp.data.pages.edges[0].node.serviceCardStyle2)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_SERVICE3]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service3,
        })
        .then((resp) => {
          commit(SET_SERVICE3, resp.data.pages.edges[0].node.serviceCardStyle3)
          resolve(resp.data.pages.edges[0].node.serviceCardStyle3)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_SERVICE4]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service4,
        })
        .then((resp) => {
          commit(SET_SERVICE4, resp.data.pages.edges[0].node.serviceCardStyle4)
          resolve(resp.data.pages.edges[0].node.serviceCardStyle4)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_SERVICE5]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service5,
        })
        .then((resp) => {
          commit(SET_SERVICE5, resp.data.pages.edges[0].node.serviceCardStyle5)
          resolve(resp.data.pages.edges[0].node.serviceCardStyle5)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_SERVICE6]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service6,
        })
        .then((resp) => {
          commit(SET_SERVICE6, resp.data.pages.edges[0].node.serviceCardStyle6)
          resolve(resp.data.pages.edges[0].node.serviceCardStyle6)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_SERVICE13]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service13,
        })
        .then((resp) => {
          commit(
            SET_SERVICE13,
            resp.data.pages.edges[0].node.serviceCardStyle13
          )
          resolve(resp.data.pages.edges[0].node.serviceCardStyle13)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
  [GET_SERVICE14]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service14,
        })
        .then((resp) => {
          commit(
            SET_SERVICE14,
            resp.data.pages.edges[0].node.serviceCardStyle14
          )
          resolve(resp.data.pages.edges[0].node.serviceCardStyle14)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_SERVICE15]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service15,
        })
        .then((resp) => {
          commit(
            SET_SERVICE15,
            resp.data.pages.edges[0].node.serviceCardStyle15
          )
          resolve(resp.data.pages.edges[0].node.serviceCardStyle15)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_SERVICE20]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({
          query: service20,
        })
        .then((resp) => {
          commit(
            SET_SERVICE20,
            resp.data.pages.edges[0].node.serviceCardStyle20
          )
          resolve(resp.data.pages.edges[0].node.serviceCardStyle20)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_SLIDERS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: slidersQuery })
        .then((resp) => {
          commit(SET_SLIDERS, resp.data.pages.edges[0].node)
          resolve(resp.data.pages.edges[0].node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_SUBSCRIBE]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: subscribeQuery })
        .then((resp) => {
          commit(SET_SUBSCRIBE, resp.data.pages.edges[0].node)
          resolve(resp.data.pages.edges[0].node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_TEAM]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: team })
        .then((resp) => {
          // console.log(resp.data)
          commit(SET_TEAM, resp.data)
          resolve(resp.data)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_TESTIMONIALS]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: testimonials })
        .then((resp) => {
          commit(
            SET_TESTIMONIALS,
            resp.data.pages.edges[0].node.testimonialStyle1.testimonial
          )
          resolve(resp.data.pages.edges[0].node.testimonialStyle1.testimonial)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },

  [GET_USP]({ commit }) {
    const clientApollo = this.app.apolloProvider.defaultClient
    return new Promise((resolve) => {
      clientApollo
        .query({ query: usp })
        .then((resp) => {
          commit(SET_USP, resp.data.pages.edges[0].node)
          resolve(resp.data.pages.edges[0].node)
        })
        .catch((err) => {
          resolve(err)
        })
    })
  },
}
