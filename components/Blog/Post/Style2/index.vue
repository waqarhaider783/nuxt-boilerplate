<template>
  <div class="gm-blog-details-card">
    <div v-if="visible && title" class="title-container">
      <div class="full-date">
        <span class="date">{{ convertDate.convertedDate.day }}</span>
        <span class="month"
          >{{ convertDate.convertedDate.month }}&nbsp;{{
            convertDate.convertedDate.year
          }}</span
        >
      </div>
      <div class="title">
        <p v-if="title">{{ title }}</p>
      </div>
    </div>
    <div class="blog-image">
      <img :src="sourceUrl" :alt="altText" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
      required: true,
    },
    sourceUrl: {
      type: String,
      default: '',
      required: true,
    },
    altText: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
      required: true,
    },
  },

  computed: {
    convertDate() {
      const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      const breakedDate = this.date.split('T')[0].split('-')
      const year = breakedDate[0]
      const month = months[breakedDate[1] - 1]
      const day = breakedDate[2]
      const convertedDate = {
        day,
        month,
        year,
      }
      return { convertedDate }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss"></style>
