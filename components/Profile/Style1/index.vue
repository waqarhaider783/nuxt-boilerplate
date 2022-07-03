<template>
  <div class="profile">
    <div class="profile__details">
      <div class="left">
        <div class="display__picture">
          <figure class="aspect-ratio">
            <img
              src="https://static0.srcdn.com/wordpress/wp-content/uploads/2021/04/Chris-Hemsworth-as-Thor-in-Ragnarok.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
              alt="Dell US"
            />
          </figure>
          <div class="actions">
            <font-awesome-icon :icon="['far', 'check-square']" />
          </div>
        </div>
        <button
          v-if="following"
          class="btn min"
          @click="following = !following"
        >
          Following
        </button>
        <button v-else class="btn primary min" @click="following = !following">
          Follow
        </button>
        <div class="right__info only-mobile">
          <div class="posts">
            <p class="value">89</p>
            <p class="title">Posts</p>
          </div>
          <div class="likes">
            <p class="value">220</p>
            <p class="title">Likes</p>
          </div>
          <div class="followers">
            <p class="value">93</p>
            <p class="title">Followers</p>
          </div>
        </div>
      </div>
      <div class="right">
        <p class="right__name">John Doe</p>
        <div class="right__info no-mobile">
          <div class="posts">
            <p class="value">89</p>
            <p class="title">Posts</p>
          </div>
          <div class="likes">
            <p class="value">220</p>
            <p class="title">Likes</p>
          </div>
          <div class="followers">
            <p class="value">93</p>
            <p class="title">Followers</p>
          </div>
        </div>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <button
          v-if="following"
          class="only-mobile btn"
          @click="following = !following"
        >
          Following
        </button>
        <button
          v-else
          class="only-mobile btn primary"
          @click="following = !following"
        >
          Follow
        </button>
      </div>
      <div class="options-btn" @click="options = !options">
        <font-awesome-icon :icon="['fas', 'ellipsis-h']" />
      </div>
      <ul v-if="options" class="options">
        <li @click="options = !options">Report User</li>
        <li @click="options = !options">Block User</li>
      </ul>
    </div>
    <div class="profile__kindness_meter">
      <img src="~/assets/images/barterup/kindness.webp" alt="Kindness meter" />
    </div>
  </div>
</template>

<script>
export default {
  props: {},

  data() {
    return {
      following: true,
      options: false,
    }
  },
  methods: {
    log(a) {
      // console.log(a)
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
