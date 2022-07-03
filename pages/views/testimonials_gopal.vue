<template>
  <div>
    <div class="section">
      <heading-style-1 title="Testimonial Style 11" />
      <div class="wrapper grid-column-3">
        <testimonial-style11
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
    <div class="section">
      <heading-style-1 title="Testimonial Style 13" />
      <div class="wrapper grid-column-3">
        <testimonial-style13
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
    <div class="section">
      <heading-style-1 title="Testimonial Style 14" />
      <div class="wrapper grid-column-3">
        <testimonial-style14
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
    <div class="section">
      <heading-style-1 title="Testimonial Style 15" />
      <div class="wrapper grid-column-2">
        <testimonial-style15
          v-for="(testimonial, index) in testimonials.slice(0, 2)"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
    <div class="section">
      <heading-style-1 title="Testimonial Style 16" />
      <div class="wrapper grid-column-1">
        <testimonial-style16
          v-for="(testimonial, index) in testimonials.slice(0, 1)"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
    <div class="section">
      <heading-style-1 title="Testimonial Style 17" />
      <div class="wrapper grid-column-1">
        <testimonial-style17
          v-for="(testimonial, index) in testimonials.slice(0, 1)"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
    <div class="wrapper">
      <heading-style-1 title="Testimonial Style 18" />
      <div class="section">
        <testimonial-style18
          v-for="(testimonial, index) in testimonials.slice(0, 1)"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
    <div class="section">
      <heading-style-1 title="Testimonial Style 19" />
      <div class="grid-column-1">
        <testimonial-style19
          v-for="(testimonial, index) in testimonials.slice(0, 1)"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
    <div class="wrapper">
      <heading-style-1 title="Testimonial Style 20" />
      <div class="section">
        <testimonial-style20
          v-for="(testimonial, index) in testimonials.slice(0, 1)"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: {
      type: Array,
      default: () => [
        {
          name: 'Andry Khusid',
          image:
            'https://cdn.supersavermama.com/storage/6790/6017929b40c1a_online-shoe-stores-SSM.jpg',
          altText: 'card-11',
          tagline: 'Make my life easier and organized',
          designation: 'Head Of Product',
          project: '#_',
          rating: 3,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          name: 'Andry Khusid',
          image:
            'https://cdn.supersavermama.com/storage/6790/6017929b40c1a_online-shoe-stores-SSM.jpg',
          altText: 'card-11',
          tagline: 'Make my life easier and organized',
          designation: 'Head Of Product',
          project: '#_',
          rating: 4,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
          name: 'Andry Khusid',
          image:
            'https://cdn.supersavermama.com/storage/6790/6017929b40c1a_online-shoe-stores-SSM.jpg',
          altText: 'card-11',
          tagline: 'Make my life easier and organized',
          designation: 'Head Of Product',
          project: '#_',
          rating: 5,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
      ],
    },
  },
}
</script>

<style lang="scss" scoped></style>
