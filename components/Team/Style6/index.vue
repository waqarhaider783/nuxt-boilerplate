<template>
  <div v-if="team" class="team">
    <figure v-if="team.forUsers.profilePicture">
      <img
        :src="team.forUsers.profilePicture.sourceUrl"
        :alt="team.forUsers.profilePicture.altText"
      />
    </figure>
    <div v-if="team.forUsers" class="details">
      <h1 class="name">{{ team.name }}</h1>
      <h3 class="designation">{{ team.forUsers.designation }}</h3>

      <ul v-if="team.forUsers.socialMedia" class="social">
        <li v-for="(social, idx) in team.forUsers.socialMedia" :key="idx">
          <nuxt-link :to="social.profileUrl && social.profileUrl">
            <font-awesome-icon :icon="['fab', social.profileTxt]" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team6',
  props: {
    team: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
