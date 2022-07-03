<template>
  <div class="section">
    <div class="container">
      <!-- On Hover Widgets -->
      <div class="section">
        <Heading-style-2 title="On Hover Widgets" />
        <div class="grid-column-2">
          <!-- Cart Widget -->
          <div class="widgetBox">
            <a class="cartIcon"> Hover Me For Cart Widget </a>
            <widget-cart-style-1 />
          </div>

          <!-- Login Widget -->
          <div class="widgetBox">
            <a class="accountIcon"> Hover Me For Login Widget </a>
            <widget-login-style-1 />
          </div>
        </div>
      </div>

      <!-- Range Sliders -->
      <div class="section">
        <Heading-style-2 title="Range Sliders" />
        <!-- 1 -->
        <div class="section">
          <Heading-style-1 title="Range Slider Style 1" />
          <div class="grid-column-3">
            <widget-range-slider-style-1
              title="Radius (meter)"
              :min-range="Number(0)"
              :max-range="Number(10000)"
              :step-size="Number(100)"
              :range-min-value="Number(2500)"
              :range-max-value="Number(7500)"
            />
            <div></div>
            <widget-range-slider-style-1
              title="Radius (meter)"
              :min-range="Number(0)"
              :max-range="Number(10000)"
              :step-size="Number(100)"
              :range-min-value="Number(2500)"
              :range-max-value="Number(7500)"
            />
          </div>
        </div>

        <!-- 2 -->
        <div class="section">
          <Heading-style-1 title="Range Slider Style 2" />
          <div class="grid-column-3">
            <widget-range-slider-style-2
              title="Radius (meter)"
              :min-range="Number(0)"
              :max-range="Number(10000)"
              :step-size="Number(100)"
              :range-min-value="Number(2500)"
              :range-max-value="Number(7500)"
            />
            <div></div>
            <widget-range-slider-style-2
              title="Radius (meter)"
              :min-range="Number(0)"
              :max-range="Number(10000)"
              :step-size="Number(100)"
              :value="Number(0)"
            />
          </div>
        </div>
      </div>

      <!-- File Uploaders -->
      <div class="section">
        <Heading-style-2 title="File Uploaders" />
        <!-- 1 -->
        <div class="section">
          <Heading-style-1 title="File Upload Style 1" />
          <div class="grid-column-4">
            <widget-file-upload-style-1 />
            <widget-file-upload-style-1 />
            <widget-file-upload-style-1 />
            <widget-file-upload-style-1 />
          </div>
        </div>

        <!-- 2 -->
        <div class="section">
          <Heading-style-1 title="File Upload Style 2" />
          <div class="grid-column-3">
            <widget-file-upload-style-2 :images="photos" :value="value" />
            <div></div>
            <widget-file-upload-style-2 :images="photos" :value="value" />
          </div>
        </div>
      </div>

      <!-- Floating Button -->
      <section class="section">
        <Heading-style-2 title="Floating Button" />
        <widget-floating-button />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Widgets',
  data() {
    return {
      value: 0,
      photos: [
        'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
