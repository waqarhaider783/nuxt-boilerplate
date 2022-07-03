export default function (ctx, inject) {
  function getSEOData(data) {
    // if (!data) return {}
    return {
      title: data?.title,
      metaDesc: data?.metaDesc,
      twitterTitle: data?.twitterTitle,
      twitterDescription: data?.twitterDescription,
      twitterImage: data?.twitterImage?.sourceUrl,
      twitterImageAltText: data?.twitterImage?.altText,
      twitterCard: data?.twitterCard,
      // Open Graph tags
      ogTitle: data?.opengraphTitle,
      ogDescription: data?.opengraphDescription,
      ogImage: data?.opengraphImage?.sourceUrl,
      ogImageAltText: data?.opengraphImage?.altText,
      ogUrl: data?.opengraphUrl,
      ogType: data?.opengraphType,
    }
  }
  inject('getSEOData', { getSEOData })
}
