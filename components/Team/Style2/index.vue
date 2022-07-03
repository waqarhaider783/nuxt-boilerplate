<!-- :class="isBlue ? 'blue' : isPurple ? 'purple' : isGreen ? 'green' : 'yellow'" -->
<template>
  <div v-if="team" class="template2">
    <figure
      v-if="team.forUsers.profilePicture"
      :style="`background:${team.forUsers && team.forUsers.color}`"
    >
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
  name: 'Team2',
  props: {
    team: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
