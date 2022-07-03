<template>
  <div class="container">
    <div class="section">
      <Heading-style-1 title="Announcement Style1" />
      <announcement-style-1
        :message="announcementStyle1 && announcementStyle1.messageStyle1"
      />
    </div>

    <div class="section">
      <Heading-style-1 title="Announcement Style2" />
      <div class="grid-column-1">
        <announcement-style-2 message="This is a INFO message!" type="info" />
        <announcement-style-2
          message="This is a SUCCESS message!"
          type="success"
        />
        <announcement-style-2
          message="This is a WARNING message!"
          type="warning"
        />
        <announcement-style-2
          message="This is a DANGER message!"
          type="danger"
        />
      </div>
    </div>

    <div class="section">
      <Heading-style-1 title="Announcement Style3" />
       <announcement-style-3 anchor-text="Complete Profile" message="Please Complete Your Profile" />
    </div>
  </div>
</template>

<script>
import { GET_ANNOUNCEMENTS } from '~/store/types'
export default {
  name: 'Announcement',

  async asyncData({ store }) {
    const [{ announcementStyle1 }] = await Promise.all([
      store.dispatch(`views/${GET_ANNOUNCEMENTS}`),
    ]);

    return { announcementStyle1 }
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
