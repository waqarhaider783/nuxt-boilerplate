<!-- :tags="['bros', 'meet', 'the', 'world']" -->
<template>
  <div>
    <app-header-style1 />
    <div class="wrapper section flex">
      <two-column-layout-long>
        <div class="section">
          <blog-card-style-8 />
        </div>
        <div class="grid-column-2 section">
          <blog-card-style-7 v-for="card in 2" :key="card" />
        </div>
        <div class="section">
          <blog-card-style-9 />
        </div>
      </two-column-layout-long>
      <two-column-layout-short>
        <div class="grid-column-1 section">
          <blog-card-style-10 v-for="card in 4" :key="card" />
        </div>
        <sidebar-categories-style-5
          :items="[
            { id: 1, slug: '', title: 'abc1' },
            { id: 1, slug: '', title: 'abc2' },
            { id: 1, slug: '', title: 'abc3' },
            { id: 1, slug: '', title: 'abc4' },
          ]"
        >
        </sidebar-categories-style-5>
      </two-column-layout-short>
    </div>
    <app-footer-style4 />
  </div>
</template>

<style lang="scss" scoped></style>
