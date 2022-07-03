<template>
  <div class="section">
    <div class="wrapper">
      <div class="team">
        <div v-if="team" class="team__gallery">
          <div
            v-for="(data, index) in team"
            :key="index"
            class="teamCard"
            :class="`teamCard-${index + 1}`"
          >
            <figure
              v-if="data.forUsers.profilePicture"
              class="teamCard__figure"
            >
              <img
                :src="data.forUsers.profilePicture.sourceUrl"
                :alt="data.forUsers.profilePicture.altText"
                class="teamCard__image"
              />
            </figure>
            <div class="teamCard__info">
              <div class="teamCard__info__wrapper">
                <span class="teamCard__info__title">{{ data.name }}</span>
                <span class="teamCard__info__category">
                  {{ data.forUsers.designation }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team1',
  props: {
    team: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
