<template>
  <div>
    <div class="section">
      <heading-style-1 title="Testimonial Style 1" />
      <div class="grid-column-2">
        <div
          v-for="(testimonial, idx) in testimonials && testimonials"
          :key="idx"
        >
          <testimonial-style-1 :testimonial="testimonial" />
        </div>
      </div>
    </div>

    <div class="section container">
      <heading-style-1 title="Testimonial Card Style 1" />
      <div class="grid-column-3">
        <testimonial-card-style-1 :testimonial="testimonial1" />
        <testimonial-card-style-1 :testimonial="testimonial1" />
        <testimonial-card-style-1 :testimonial="testimonial1" />
      </div>
    </div>

    <div class="section container">
      <heading-style-1 title="Testimonial Card Style 2" />
      <div class="grid-column-3" style="padding-top: 100px">
        <testimonial-card-style-2 :testimonial="testimonial2" />
        <testimonial-card-style-2 :testimonial="testimonial2" />
        <testimonial-card-style-2 :testimonial="testimonial2" />
      </div>
    </div>

    <div class="section container">
      <heading-style-1 title="Testimonial Card Style 3" />
      <div class="grid-column-4">
        <testimonial-card-style-3 :testimonial="testimonial3" />
        <testimonial-card-style-3 :testimonial="testimonial3" />
        <testimonial-card-style-3 :testimonial="testimonial3" />
        <testimonial-card-style-3 :testimonial="testimonial3" />
      </div>
    </div>

    <div class="section container">
      <heading-style-1 title="Testimonial Card Style 4" />
      <div class="grid-column-3" style="padding-top: 100px">
        <testimonial-card-style-4 :testimonial="testimonial2" />
        <testimonial-card-style-4 :testimonial="testimonial2" />
        <testimonial-card-style-4 :testimonial="testimonial2" />
      </div>
    </div>

    <div class="section container">
      <heading-style-1 title="Testimonial Card Style 5" />
      <div class="grid-column-3" style="padding-top: 100px">
        <testimonial-card-style-5 :testimonial="testimonial2" />
        <testimonial-card-style-5 :testimonial="testimonial2" />
        <testimonial-card-style-5 :testimonial="testimonial2" />
      </div>
    </div>

    <div class="section container">
      <heading-style-1 title="Testimonial Card Style 6" />
      <div class="grid-column-3">
        <testimonial-card-style-6 :testimonial="testimonial3" />
        <testimonial-card-style-6 :testimonial="testimonial3" />
        <testimonial-card-style-6 :testimonial="testimonial3" />
      </div>
    </div>

    <div class="section container">
      <heading-style-1 title="Testimonial Card Style 7" />
      <div class="grid-column-3" style="padding-top: 100px">
        <testimonial-card-style-7 :testimonial="testimonial2" />
        <testimonial-card-style-7 :testimonial="testimonial2" />
        <testimonial-card-style-7 :testimonial="testimonial2" />
      </div>
    </div>
  </div>
</template>

<script>
import { GET_TESTIMONIALS } from '~/store/types'
export default {
  async asyncData({ store }) {
    const testimonials = await store.dispatch(`views/${GET_TESTIMONIALS}`)
    return { testimonials }
  },

  data() {
    return {
      testimonial1: {
        quote:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: 'Sarah Miller',
        title: 'Customer',
        rating: 4,
        sourceUrl:
          'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
        altText: 'Author',
      },
      testimonial2: {
        quote:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: 'Sarah Miller',
        title: 'Customer',
        sourceUrl:
          'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
        altText: 'Author',
        socialLinks: [
          {
            name: 'instagram',
            link: 'https://www.instagram.com',
          },
          {
            name: 'facebook',
            link: 'https://www.facebook.com',
          },
          {
            name: 'linkedin-in',
            link: 'https://www.linkedin.com/',
          },
          {
            name: 'behance',
            link: 'https://www.behance.com',
          },
        ],
      },
      testimonial3: {
        quote:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: 'Sarah Miller',
        title: 'Customer',
        sourceUrl:
          'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
        altText: 'Author',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
