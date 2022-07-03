<template>
  <div v-if="team" class="team">
    <div class="trending-card">
      <div class="inner">
        <figure class="aspect-ratio">
          <img
            :src="team.forUsers.profilePicture.sourceUrl"
            :alt="team.forUsers.profilePicture.altText"
          />
        </figure>
      </div>
    </div>
    <div v-if="team.forUsers" class="details">
      <h1 class="name">{{ team.name }}</h1>
      <h3 class="designation">{{ team.forUsers.designation }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team9',
  props: {
    team: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
