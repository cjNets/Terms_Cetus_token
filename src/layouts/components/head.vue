<template>
  <div class="header">
    <div class="logo">
      <nuxt-link to="/">
        <img src="../../assets/images/img-logo@2x.png" alt="" />
      </nuxt-link>
    </div>
    <div class="contact-us">
      <!-- <div class="main-btn" v-if="showButton">
        <div class="App">
          <span class="Access">Access App</span>
          <span class="Coming">Coming soon</span>
        </div>
        <div class="Doc">Documentation</div>
      </div> -->
      <a v-for="item in list" :key="item.name" :href="item.link" target="_blank">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.icon" />
        </svg>
      </a>
      <!-- <a class="twitter" href="https://twitter.com/CetusProtocol" target="_blank"></a>
      <a class="Discord" href="https://discord.gg/cetusprotocol" target="_blank"></a>
      <a class="tg-group" href="https://t.me/cetuscommunity" target="_blank"></a>
      <a class="tg-channel" href="https://t.me/cetusprotocol" target="_blank"></a>
      <a class="medium" href="https://medium.com/@CetusProtocol" target="_blank"></a> -->
    </div>
    <div class="contact-us-h5" @click.stop="$emit('openSwitch')">
      <span>Social Media</span>
      <svg class="icon" aria-hidden="true" :class="showList ? 'icon-hover' : ''">
        <use xlink:href="#icon-icon_on" />
      </svg>
      <div v-if="showList" class="list-link">
        <a v-for="item in list" :key="item.name" :href="item.link" target="_blank">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon" />
          </svg>
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    showList: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showButton: false,
      list: [
        {
          name: 'Twitter',
          icon: '#icon-svg-twitter',
          link: 'https://twitter.com/CetusProtocol'
        },
        {
          name: 'Discord',
          icon: '#icon-svg-Discord',
          link: 'https://discord.gg/cetusprotocol'
        },
        {
          name: 'TG Group',
          icon: '#icon-svg-lark',
          link: 'https://t.me/cetuscommunity'
        },
        {
          name: 'TG Channel',
          icon: '#icon-svg-tg',
          link: 'https://t.me/cetusprotocol'
        },
        {
          name: 'Medium',
          icon: '#icon-svg-medium',
          link: 'https://medium.com/@CetusProtocol'
        }
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onReachBottom)
  },
  methods: {
    onReachBottom() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (scrollTop > 50) {
        this.showButton = true
      } else {
        this.showButton = false
      }
    }
  }
})
</script>
<style lang="less" scoped>
.header {
  width: 1200px;
  // width: 100%;
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: space-between;
  // justify-content: center;
  backdrop-filter: blur(4px);
  background: none;
  // padding: 16px 40px;
  padding: 16px 0;

  .logo {
    img {
      width: 140px;
      height: 32px;
    }
  }

  .contact-us {
    display: flex;
    align-items: center;

    .icon {
      width: 24px;
      height: 24px;
      fill: #fff;
      box-sizing: border-box;

      &:hover {
        fill: #01eeaf;
      }
    }

    a {
      width: 24px;
      height: 24px;

      &+a {
        margin-left: 20px;
      }
    }

    // .twitter {
    //   background: url('@/assets/images/icon-twitter@2x.png');
    //   background-size: 100% 100%;

    //   &:hover {
    //     background: url('@/assets/images/icon-twitter-hover@2x.png');
    //     background-size: 100% 100%;
    //   }
    // }

    // .tg-group {
    //   background: url('@/assets/images/icon-telegram@2x.png');
    //   background-size: 100% 100%;

    //   &:hover {
    //     background: url('@/assets/images/icon-telegram-hover@2x.png');
    //     background-size: 100% 100%;
    //   }
    // }

    // .tg-channel {
    //   background: url('@/assets/images/icon-tg-channel.png');
    //   background-size: 100% 100%;

    //   &:hover {
    //     background: url('@/assets/images/icon-tg-channel-hover.png');
    //     background-size: 100% 100%;
    //   }
    // }

    // .Discord {
    //   background: url('@/assets/images/icon-Discord@2x.png');
    //   background-size: 100% 100%;

    //   &:hover {
    //     background: url('@/assets/images/icon-Discord-hover@2x.png');
    //     background-size: 100% 100%;
    //   }
    // }

    // .medium {
    //   background: url('@/assets/images/icon-medium@2x.png');
    //   background-size: 100% 100%;

    //   &:hover {
    //     background: url('@/assets/images/icon-medium-hover@2x.png');
    //     background-size: 100% 100%;
    //   }
    // }

    .main-btn {
      display: flex;
      margin-right: 20px;

      >div {
        width: 100px;
        height: 28px;
        background: #00ffbd;
        line-height: 28px;
        text-align: center;
        color: #000;
        cursor: pointer;
        font-size: 12px;

        &.Doc {
          background: rgba(#000, 0.5);
          color: #fff;
          margin-left: 24px;
          border: #00ffbd 1px solid;
        }

        &.App {
          .Access {
            display: block;
          }

          .Coming {
            display: none;
          }

          &:hover {
            cursor: not-allowed;

            .Access {
              display: none;
            }

            .Coming {
              display: block;
            }
          }
        }
      }
    }
  }

  .contact-us-h5 {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  .header {
    width: 100%;
    padding: 12px 20px;
    // justify-content: center;
    align-items: center;
    // justify-content: center;

    .contact-us {
      margin-bottom: 8px;

      display: none;

      a {
        &+a {
          margin-left: 14px;
        }
      }

      .main-btn {
        display: none;
      }
    }

    .contact-us-h5 {
      display: flex;
      align-items: center;
      color: #fff;
      position: relative;
      user-select: none;
      font-size: 12px;
      margin-bottom: 10px;

      .icon {
        width: 12px;
        height: 12px;
        // fill: rgba(#fff, .5);
        fill: #fff;
        margin-left: 4px;
      }

      // .list-link {
      //   display: none;
      // }
      .icon-hover {
        transform: rotate(-180deg);
      }

      &:hover {


        .list-link {
          display: block;
          position: absolute;
          left: -30px;
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
            // margin-top: 16px;
            height: 30px;
            line-height: 30px;

            .icon {
              margin: 0 10px 0 0;
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }


  }
}
</style>