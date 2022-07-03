<template>
  <div class="test">
    <div class="container">
      <div class="section">
        <Heading-style-1 title="SIDEBAR COMPONENTS" />
        <div class="grid-column-4">
          <sidebar-panel-style-1>
            <Heading-style-3 title="Panel 1 Category 1" :is-sidebar="true" />
            <template #mainContent>
              <sidebar-categories-style-1
                :items="[
                  { id: 1, slug: '#', title: 'Anchor1' },
                  { id: 2, slug: '#', title: 'Anchor2' },
                  { id: 3, slug: '#', title: 'Anchor3' },
                  { id: 4, slug: '#', title: 'Anchor4' },
                  { id: 5, slug: '#', title: 'Anchor5' },
                  { id: 6, slug: '#', title: 'Anchor6' },
                ]"
              >
              </sidebar-categories-style-1>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3 title="Panel 1 - Category 2" :is-sidebar="true" />
            <template #mainContent>
              <sidebar-categories-style-2
                :items="[
                  { id: 1, slug: '#', title: 'Anchor1' },
                  { id: 2, slug: '#', title: 'Anchor2' },
                  { id: 3, slug: '#', title: 'Anchor3' },
                  { id: 4, slug: '#', title: 'Anchor4' },
                  { id: 5, slug: '#', title: 'Anchor5' },
                  { id: 6, slug: '#', title: 'Anchor6' },
                ]"
              >
              </sidebar-categories-style-2>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3 title="Panel 1 - Category 3" :is-sidebar="true" />
            <template #mainContent>
              <sidebar-categories-style-3
                :items="[
                  { id: 1, slug: '#', title: 'Anchor1' },
                  { id: 2, slug: '#', title: 'Anchor2' },
                  { id: 3, slug: '#', title: 'Anchor3' },
                  { id: 4, slug: '#', title: 'Anchor4' },
                  { id: 5, slug: '#', title: 'Anchor5' },
                  { id: 6, slug: '#', title: 'Anchor6' },
                ]"
              >
              </sidebar-categories-style-3>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3 title="Panel 1 - Category 4" :is-sidebar="true" />
            <template #mainContent>
              <sidebar-categories-style-4
                :items="[
                  { id: 1, slug: '#', title: 'Anchor1' },
                  { id: 2, slug: '#', title: 'Anchor2' },
                  { id: 3, slug: '#', title: 'Anchor3' },
                  { id: 4, slug: '#', title: 'Anchor4' },
                ]"
              >
              </sidebar-categories-style-4>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3 title="Panel 1 - Category 5" :is-sidebar="true" />
            <template #mainContent>
              <sidebar-categories-style-5
                :items="[
                  {
                    id: 1,
                    slug: '#',
                    title: 'Anchor1',
                    image:
                      'https://cdn.supersavermama.com/storage/201/flowerstation-coupons.jpg',
                  },
                  {
                    id: 2,
                    slug: '#',
                    title: 'Anchor2',
                    image:
                      'https://cdn.supersavermama.com/storage/201/flowerstation-coupons.jpg',
                  },
                  {
                    id: 3,
                    slug: '#',
                    title: 'Anchor3',
                    image:
                      'https://cdn.supersavermama.com/storage/201/flowerstation-coupons.jpg',
                  },
                  {
                    id: 4,
                    slug: '#',
                    title: 'Anchor4',
                    image:
                      'https://cdn.supersavermama.com/storage/201/flowerstation-coupons.jpg',
                  },
                ]"
              >
              </sidebar-categories-style-5>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3 title="Panel 1 - About 1" :is-sidebar="true" />
            <template #mainContent>
              <sidebar-about-style-1 v-html="dummyHTML">
              </sidebar-about-style-1>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3 title="Panel 1 - About 2" :is-sidebar="true" />
            <template #mainContent>
              <sidebar-about-style-2 v-html="dummyHTML">
              </sidebar-about-style-2>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3
              title="Panel 1 - Social 1 (DEFAULT)"
              :is-sidebar="true"
            />
            <template #mainContent>
              <sidebar-social-style-1
                :items="[
                  {
                    id: 1,
                    prefix: 'fab',
                    icon: 'github',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                  {
                    id: 2,
                    prefix: 'fab',
                    icon: 'facebook',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                  {
                    id: 3,
                    prefix: 'fab',
                    icon: 'twitter',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                  {
                    id: 4,
                    prefix: 'fab',
                    icon: 'instagram',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                ]"
              >
              </sidebar-social-style-1>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3
              title="Panel 1 - Social 1 (THIN)"
              :is-sidebar="true"
            />
            <template #mainContent>
              <sidebar-social-style-1
                variant="thin"
                :items="[
                  {
                    id: 1,
                    prefix: 'fab',
                    icon: 'github',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                  {
                    id: 2,
                    prefix: 'fab',
                    icon: 'facebook',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                  {
                    id: 3,
                    prefix: 'fab',
                    icon: 'twitter',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                  {
                    id: 4,
                    prefix: 'fab',
                    icon: 'instagram',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                ]"
              >
              </sidebar-social-style-1>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3
              title="Panel 1 - Social 1 (CIRCLE)"
              :is-sidebar="true"
            />
            <template #mainContent>
              <sidebar-social-style-1
                variant="circle"
                :items="[
                  {
                    id: 1,
                    prefix: 'fab',
                    icon: 'github',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                  {
                    id: 2,
                    prefix: 'fab',
                    icon: 'facebook',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                  {
                    id: 3,
                    prefix: 'fab',
                    icon: 'twitter',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                  {
                    id: 4,
                    prefix: 'fab',
                    icon: 'instagram',
                    urlLink: '#',
                    bgColor: '#325892',
                  },
                ]"
              >
              </sidebar-social-style-1>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3 title="Panel 1 - Post 1" :is-sidebar="true" />
            <template #mainContent>
              <sidebar-post-style-1
                :items="[
                  {
                    id: 1,
                    title: 'Latex Mattress Australia Review',
                    date: '2021/8/24',
                    image:
                      'https://www.mattressreview-au.com/wp-content/uploads/2021/07/spacejoy-nEtpvJjnPVo-unsplash-scaled.jpg',
                    urlLink: '#',
                  },
                  {
                    id: 2,
                    title: 'Latex Mattress Australia Review',
                    date: '2021/8/24',
                    image:
                      'https://www.mattressreview-au.com/wp-content/uploads/2021/07/spacejoy-nEtpvJjnPVo-unsplash-scaled.jpg',
                    urlLink: '#',
                  },
                  {
                    id: 3,
                    title: 'Latex Mattress Australia Review',
                    date: '2021/8/24',
                    image:
                      'https://www.mattressreview-au.com/wp-content/uploads/2021/07/spacejoy-nEtpvJjnPVo-unsplash-scaled.jpg',
                    urlLink: '#',
                  },
                ]"
              >
              </sidebar-post-style-1>
            </template>
          </sidebar-panel-style-1>

          <sidebar-panel-style-1>
            <Heading-style-3 title="Panel 1 - Post 2" :is-sidebar="true" />
            <template #mainContent>
              <sidebar-post-style-2
                :items="[
                  {
                    id: 1,
                    title: 'Latex Mattress Australia Review',
                    image:
                      'https://www.mattressreview-au.com/wp-content/uploads/2021/07/spacejoy-nEtpvJjnPVo-unsplash-scaled.jpg',
                    urlLink: '#',
                  },
                  {
                    id: 2,
                    title: 'Latex Mattress Australia Review',
                    image:
                      'https://www.mattressreview-au.com/wp-content/uploads/2021/07/spacejoy-nEtpvJjnPVo-unsplash-scaled.jpg',
                    urlLink: '#',
                  },
                  {
                    id: 3,
                    title: 'Latex Mattress Australia Review',
                    image:
                      'https://www.mattressreview-au.com/wp-content/uploads/2021/07/spacejoy-nEtpvJjnPVo-unsplash-scaled.jpg',
                    urlLink: '#',
                  },
                ]"
              >
              </sidebar-post-style-2>
            </template>
          </sidebar-panel-style-1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebars',
  data() {
    return {
      dummyHTML: `
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>
      <p>This is some Dummy HTML. No offense!</p>`,
    }
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
