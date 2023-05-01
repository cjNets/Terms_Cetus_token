<template>
  <div class="layout-container">
    <div class="pc-header-container">

      <Head v-if="isPc" :show-list="showList" @openSwitch="openSwitch"></Head>
    </div>
    <div class="body-container" @click="showList = false">
      <Nuxt />
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Head from './components/head.vue'
import Footer from './components/footer.vue'

export default Vue.extend({
  components: {
    Head,
    // Footer
  },
  data() {
    return {
      showNotice: false,
      isPc: true,
      fairShow: '',
      isShowTermsConditions: true,
      showList: false
    }
  },
  destroyed() {
    window.onresize = null
  },
  methods: {
    openSwitch() {
      this.showList = !this.showList
    }
  }
})
</script>

<style lang="less">
.ant-layout-content {
  min-height: calc(100vh - 64px - 82px);
}

.layout-container {
  width: 100%;
  min-height: 100vh;
  min-width: 1280px;
}

.pc-header-container {
  display: block;
  // background: #22252b;
  // padding: 0px 40px;
  z-index: 999;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  box-sizing: border-box !important;
}

.body-container {
  width: 100%;
  min-height: 100vh;
  background: #000;
}

// @media screen and (max-width: 1000px) {
//   .layout-container {
//     .header {
//       display: none;
//     }
//   }
// }
.list-link {
  display: block;
  position: absolute;
  left: -20px;
  top: 30px;
  background: #191919;
  border: 1px solid #213F37;
  padding: 0 8px 16px;
  width: 124px;

  >a {
    // display: block;
    display: flex;
    align-items: center;
    color: #fff;
    margin-top: 16px;

    .icon {
      margin: 0 10px 0 0 !important;
      width: 20px !important;
      height: 20px !important;
    }
  }
}

@media screen and (max-width: 820px) {
  .layout-container {
    min-width: 100%;
  }
}
</style>
