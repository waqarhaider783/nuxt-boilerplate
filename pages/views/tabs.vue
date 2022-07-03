<template>
  <div class="container">
    <!-- 1 -->
    <div class="section">
      <heading-style-1 title="Tab Style 1" />
      <div class="tabs">
        <div class="tabs__navigation" style="text-align: center">
          <tab-style-1
            :tab-names="tabNames"
            :active="currentTab"
            @on-change-Tab="changeTab"
          />
        </div>
        <div class="tabs__contentArea">
          <div v-if="currentTab === 0">Tab Content 0</div>

          <div v-if="currentTab === 1">Tab Content 1</div>

          <div v-if="currentTab === 2">Tab Content 2</div>
        </div>
      </div>
    </div>

    <!-- 2 -->
    <div class="section">
      <heading-style-1 title="Tab Style 2" />
      <div class="tabs">
        <div class="tabs__navigation">
          <tab-style-2
            :tab-names="tabNames"
            :active="currentTab"
            @on-change-Tab="changeTab"
          />
        </div>

        <div class="tabs__contentArea">
          <div v-if="currentTab === 0">Tab Content 0</div>

          <div v-if="currentTab === 1">Tab Content 1</div>

          <div v-if="currentTab === 2">
            <product-additional-info-style-1 :items="items" />
          </div>
        </div>
      </div>
    </div>

    <!-- 3 -->
    <div class="section">
      <heading-style-1 title="Tab Style 3" />
      <div class="tabs">
        <div class="tabs__navigation">
          <tab-style-3
            :tab-names="tabNames"
            :active="currentTab"
            @on-change-Tab="changeTab"
          />
        </div>

        <div class="tabs__contentArea">
          <div v-if="currentTab === 0">Tab Content 0</div>

          <div v-if="currentTab === 1">Tab Content 1</div>

          <div v-if="currentTab === 2">Tab Content 2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',

  data() {
    return {
      items: [
        {
          name: 'Weight',
          value: '0.5 Kg',
        },
        {
          name: 'Color',
          value: 'Blue, Nude, Scarlet, Yellow',
        },
      ],
      currentTab: 0,
      tabNames: ['Description', 'Reviews', 'Additional Info'],
    }
  },

  methods: {
    changeTab(index) {
      this.currentTab = index
    },
  },
}
</script>

<style lang="scss" scoped src="./index.scss" />
