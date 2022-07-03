<!-- :class="isBlue ? 'blue' : isPurple ? 'purple' : isGreen ? 'green' : 'yellow'" -->
<template>
  <div v-if="team" class="template2">
    <figure v-if="team.forUsers.profilePicture">
      <img
        :src="team.forUsers.profilePicture.sourceUrl"
        :alt="team.forUsers.profilePicture.altText"
      />
    </figure>
    <div v-if="team.forUsers" class="info">
      <p class="name">{{ team.name }}</p>
      <p class="title">{{ team.forUsers.designation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team3',
  props: {
    team: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
