import vuescroll from 'vuescroll'
import Vue from 'vue'

Vue.use(vuescroll, {
  ops: {
    // rail: {
    //   opacity: '1',
    //   background: '#01a99a',
    //   size: '4px',
    //   gutterOfSide: '0px',
    //   keepShow: true
    // },
    // bar: {
    //   background: 'red',
    //   keepShow: true,
    //   size: '4px',
    //   minSize: 0.2
    // },
    rail: {
      background: '#01a99a',
      opacity: 0,
      size: '8px',
      specifyBorderRadius: false,
      gutterOfEnds: null,
      gutterOfSide: '2px',
      keepShow: true
    },
    bar: {
      // showDelay: 500,
      onlyShowBarOnScroll: false,
      keepShow: true,
      background: 'rgba(255,255,255,0.5)',
      opacity: 1,
      hoverStyle: false,
      specifyBorderRadius: false,
      minSize: 0,
      size: '8px',
      disable: false
    },
    // scrollPanel: {
    //   easing: 'easeInQuad',
    //   speed: 800
    // },
    scrollButton: {
      enable: false,
      background: 'rgb(3, 185, 118)',
      opacity: 1,
      step: 180,
      mousedownStep: 30
    },
    vuescroll: {
      checkShiftKey: true,
      locking: false
    }
  }
})
Vue.component('vue-scroll', vuescroll)
