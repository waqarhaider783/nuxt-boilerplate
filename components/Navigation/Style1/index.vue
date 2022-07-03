<template>
  <div>
    <ul class="top-searches grid-column-6">
      <li v-for="(item, _id) in list" :key="_id" class="item">
        <a href="#_">{{ item }}</a>
      </li>
    </ul>
    <button class="show-more" @click="showHide()">Show More</button>
  </div>
</template>

<script>
export default {
  name: 'NavigationStyle1',
  props: {
    list: {
      type: Array,
      default: () => [
        'iphone 12 pro',
        'nike',
        'puma',
        'lenovo',
        'hp',
        'laptop',
        'PS4',
        'monitor',
        'iphone 12 pro',
        'nike',
        'puma',
        'lenovo',
        'hp',
        'laptop',
        'PS4',
        'monitor',
        'iphone 12 pro',
        'nike',
        'puma',
        'lenovo',
        'hp',
        'laptop',
        'PS4',
        'monitor',
        'iphone 12 pro',
        'nike',
        'puma',
        'lenovo',
        'hp',
        'laptop',
        'PS4',
        'monitor',
        'iphone 12 pro',
        'PS4',
        'monitor',
        'iphone 12 pro',
      ],
    },
  },
  mounted() {
    this.showHide()
  },
  methods: {
    showHide() {
      const list = document.querySelectorAll('.item')
      const btn = document.querySelector('.show-more')
      if (window.innerWidth <= 768) {
        for (let i = 12; i < list.length; i++) {
          if (list[i].style.display === 'none') {
            list[i].style.display = 'block'
            btn.textContent = 'Show Less'
          } else {
            list[i].style.display = 'none'
            btn.textContent = 'Show More'
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
