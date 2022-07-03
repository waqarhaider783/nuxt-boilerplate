<template>
  <div>
    <div class="section container">
      <div class="grid-column-4">
        <Heading-style-1
          :is-sidebar="false"
          :is-left="false"
          :is-white="false"
          title="First Title"
          sub-title="This Is basic Blogs"
          slug=""
        />

        <Heading-style-1
          :is-sidebar="false"
          :is-left="true"
          title="First Title"
          sub-title="This Is basic Blogs"
          slug=""
        />

        <Heading-style-1
          :is-sidebar="true"
          :is-left="true"
          title="Sidebar"
          sub-title="Left Align"
          slug=""
        />
      </div>
    </div>

    <div class="section container">
      <div class="grid-column-4">
        <Heading-style-2
          :is-sidebar="false"
          :is-left="false"
          title="First Title"
          sub-title="Default"
          slug=""
        />

        <Heading-style-2
          :is-sidebar="false"
          :is-left="true"
          title="First Title"
          sub-title="Left Align"
          slug=""
        />

        <div class="" style="background: #000">
          <Heading-style-2
            :is-sidebar="false"
            :is-left="false"
            :is-white="true"
            title="First Title"
            sub-title="White Text"
            slug=""
          />
        </div>

        <Heading-style-2
          :is-sidebar="true"
          :is-left="true"
          title="Sidebar"
          sub-title="Left Align"
          slug=""
        />
      </div>
    </div>

    <div class="section container">
      <div class="grid-column-4">
        <Heading-style-3
          :is-sidebar="false"
          :is-left="false"
          title="First Title"
          sub-title="Default"
          slug=""
        />

        <Heading-style-3
          :is-sidebar="false"
          :is-left="true"
          title="First Title"
          sub-title="Left Align"
          slug=""
        />

        <div class="" style="background: #000">
          <Heading-style-3
            :is-sidebar="false"
            :is-left="false"
            :is-white="true"
            title="First Title"
            sub-title="White Text"
            slug=""
          />
        </div>

        <Heading-style-3
          :is-sidebar="true"
          :is-left="true"
          title="Sidebar"
          sub-title="Left Align"
          slug=""
        />
      </div>
    </div>

    <div class="section container">
      <div class="grid-column-4">
        <Heading-style-4
          :is-sidebar="false"
          :is-left="false"
          title="First Title"
          sub-title="Default"
          slug=""
        />

        <Heading-style-4
          :is-sidebar="false"
          :is-left="true"
          title="First Title"
          sub-title="Left Align"
          slug=""
        />

        <Heading-style-4
          :is-sidebar="true"
          :is-left="true"
          title="Sidebar"
          sub-title="Left Align"
          slug=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadingView',
}
</script>

<style></style>
