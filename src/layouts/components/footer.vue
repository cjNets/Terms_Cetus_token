<template>
  <div class="footer">
    <div class="footer-container">
      <div class="left">
        <nuxt-link to="/">
          <img src="../../assets/images/img-logo@2x.png" alt="" />
        </nuxt-link>
      </div>
      <div class="right">
        <div class="left-detail">
          <p class="top-foot">Resources</p>
          <!-- <p>Terms of use</p>
          <p>Disclaimer</p> -->
          <a href="https://cetus-1.gitbook.io/cetus-docs/" target="_blank">Documentation</a>
          <!-- <a href="https://github.com/CetusProtocol/Audit" target="_blank">Audit Report</a> -->
          <nuxt-link to="/terms">Terms of use</nuxt-link>
          <nuxt-link to="/disclaimer">Disclaimer</nuxt-link>
        </div>
        <div class="social-detail">
          <p class="top-foot">Social Media</p>
          <!-- <p>Twitter</p>
          <p>Discord</p>
          <p style="margin: 0">Medium</p> -->
          <a href="https://twitter.com/CetusProtocol" target="_blank">Twitter</a>
          <a href="https://discord.gg/cetusprotocol" target="_blank">Discord</a>
          <a href="https://t.me/cetuscommunity" target="_blank">TG Group</a>
          <a href="https://t.me/cetusprotocol" target="_blank">TG Channel</a>
          <a href="https://medium.com/@CetusProtocol" target="_blank" style="margin: 0">Medium</a>
        </div>
        <div class="contact-detail">
          <p class="top-foot">Contact</p>
          <a href="#">hello@cetus.zone</a>
        </div>
      </div>
    </div>
    <div class="address">
      © 2023 Cetus. All rights reserved.
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  position: relative;
  //   height: 284px;
  //   margin-top: 120px;
  background: #0a0a0a;

  .footer-container {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 80px 0 40px;
    display: flex;
    justify-content: space-between;

    >div {
      max-width: 50%;
    }

    .left {
      a {
        width: 140px;
        height: 32px;
      }

      img {
        width: 140px;
        height: 32px;
      }
    }

    .right {
      max-width: 70%;
      display: flex;
      justify-content: flex-end;
      color: #a8a8a8;
      font-size: 14px;
      padding-top: 4px;

      .left-detail,
      .social-detail {
        margin-right: 80px;
      }

      p {
        margin-bottom: 20px;
      }

      .top-foot {
        color: #fff;
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 28px;
      }

      a {
        margin-bottom: 16px;
        display: block;
        color: #a8a8a8;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  .address {
    width: 1200px;
    height: 50px;
    box-shadow: inset 0 19px 10px -20px #222925;
    margin: 0 auto;
    color: #A8A8A8;
    padding: 20px 0 40px;
    font-size: 14px;
  }
}

@media screen and (max-width: 820px) {
  .footer {
    width: 100%;

    // padding: 16px 20px;
    .footer-container {
      width: 100%;
      padding: 40px 16px 30px;
      flex-wrap: wrap;
      align-content: flex-start;

      >div {
        width: 51%;
      }

      .left {
        height: 32px;
        margin-bottom: 40px;
      }

      .right {
        width: 100%;
        max-width: 100%;
        flex-wrap: wrap;
        justify-content: flex-start;
        font-size: 14px;
        padding: 0;

        .top-foot {
          margin-bottom: 20px;
        }

        .left-detail {
          margin-right: 50px;
        }

        .contact-detail {
          .top-foot {
            margin-top: 40px;
          }
        }

      }
    }

    .address {
      width: 100%;
      // box-shadow: none;
      // text-align: center;
      padding: 20px 16px 50px;
      font-size: 14px;
    }
  }
}
</style>