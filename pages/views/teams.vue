<template>
  <div class="container">
    <div class="section">
      <Heading-style-1 title="Team Style1" />
      <team-style-1 :team="team" />
    </div>
    <div class="section">
      <Heading-style-1 title="Team Style 2" />

      <div class="grid-column-4">
        <team-style-2 v-for="(data, idx) in team" :key="idx" :team="data" />
      </div>
    </div>
    <div class="section">
      <Heading-style-1 title="Team Style 3" />

      <div class="grid-column-4">
        <team-style-3 v-for="(data, idx) in team" :key="idx" :team="data" />
      </div>
    </div>
    <div class="section">
      <Heading-style-1 title="Team Style 4" />

      <div class="grid-column-4">
        <team-style-4 v-for="(data, idx) in team" :key="idx" :team="data" />
      </div>
    </div>
    <div class="section">
      <Heading-style-1 title="Team Style 5" />
      <div class="grid-column-4">
        <team-style-5 v-for="(data, idx) in team" :key="idx" :team="data" />
      </div>
    </div>
    <div class="section">
      <Heading-style-1 title="Team Style 6" />
      <div class="grid-column-4">
        <team-style-6 v-for="(data, idx) in team" :key="idx" :team="data" />
      </div>
    </div>
    <div class="section">
      <Heading-style-1 title="Team Style 8" />
      <div class="grid-column-4">
        <team-style-8 v-for="(data, idx) in team" :key="idx" :team="data" />
      </div>
    </div>
    <div class="section">
      <Heading-style-1 title="Team Style 9" />
      <div class="grid-column-4">
        <team-style-9 v-for="(data, idx) in team" :key="idx" :team="data" />
      </div>
    </div>
    <div class="section">
      <Heading-style-1 title="Team Style 10" />
      <div class="grid-column-4">
        <team-style-10 v-for="(data, idx) in team" :key="idx" :team="data" />
      </div>
    </div>
  </div>
</template>

<script>
// import { GET_TEAM } from '~/store/types'
export default {
  name: 'Views',
  // async asyncData({ store }) {
  //   const team = await store.dispatch(`views/${GET_TEAM}`)
  //   return { team }
  // },
  data() {
    return {
      team: [
        {
          name: 'Max Will',
          username: 'Max Will',
          forUsers: {
            designation: 'Product Designer',
            color: '#fec200',
            socialMedia: [
              {
                fieldGroupName: 'social_media',
                profileTxt: 'facebook',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
              {
                fieldGroupName: 'social_media',
                profileTxt: 'instagram',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
              {
                fieldGroupName: 'social_media',
                profileTxt: 'twitter',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
              {
                fieldGroupName: 'social_media',
                profileTxt: 'linkedin-in',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
            ],
            profilePicture: {
              sourceUrl:
                'https://components-views.netlify.app/_nuxt/img/five.64fe688.svg',
              // 'https://components-views.netlify.app/_nuxt/img/five.64fe688.svg',
              altText: '',
            },
          },
        },
        {
          name: 'Max Will',
          username: 'Max Will',
          forUsers: {
            designation: 'Product Designer',
            color: '#00CAFE',
            socialMedia: [
              {
                fieldGroupName: 'social_media',
                profileTxt: 'facebook',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
              {
                fieldGroupName: 'social_media',
                profileTxt: 'instagram',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
              {
                fieldGroupName: 'social_media',
                profileTxt: 'twitter',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
              {
                fieldGroupName: 'social_media',
                profileTxt: 'linkedin-in',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
            ],
            profilePicture: {
              sourceUrl:
                'https://components-views.netlify.app/_nuxt/img/six.714791e.svg',
              altText: '',
            },
          },
        },
        {
          name: 'Max Will',
          username: 'Max Will',
          forUsers: {
            designation: 'Product Designer',
            color: '#19E6B2',
            socialMedia: [
              {
                fieldGroupName: 'social_media',
                profileTxt: 'facebook',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
              {
                fieldGroupName: 'social_media',
                profileTxt: 'instagram',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
              {
                fieldGroupName: 'social_media',
                profileTxt: 'twitter',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
              {
                fieldGroupName: 'social_media',
                profileTxt: 'linkedin-in',
                profileUrl: 'https://development.8thloopdataserver.com/',
              },
            ],
            profilePicture: {
              sourceUrl:
                'https://components-views.netlify.app/_nuxt/img/seven.857d022.svg',
              altText: '',
            },
          },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
