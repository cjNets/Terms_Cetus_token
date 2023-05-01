<template>
  <div class="cetus-container">
    <!-- <img class="bg-img" src="@/assets/images/img-bg@2x.png" alt="" /> -->
    <div class="cetus">
      <p>Cetus Protocol Disclaimer</p>
      <div class="contailer-white-paper">
        The Cetus protocol is a decentralized peer-to-peer finance application controlled by holders of the Cetus
        governance token (the “Cetus Community”). The Cetus protocol is a decentralized exchange comprised of certain
        smart contracts deployed on the Aptos and Sui blockchain and related software development kits (collectively, the
        “Smart
        Contracts”) on which traders or liquidity providers of Aptos&SUI-based tokens and other digital assets
        (collectively, “Digital Assets”) can transact on a peer-to-peer basis. The Cetus protocol is made up of the
        free, public, open-source or source-available Smart Contracts. Additionally, just as you can access email
        protocols such as SMTP through multiple email clients, you can access the Cetus protocol through numerous web
        and mobile user-interfaces (“UIs”) managed by various unaffiliated parties.
        <br />
        <br />
        By using the Cetus protocol and/orthe Smart Contracts, you expressly acknowledge and agree that:
        <br />
        <br />
        1. no individual or entity involved in creatingthe Cetus protocol or the Smart Contracts will be liable for any
        claims or damages whatsoever associated with your use, inability to use, or your interaction with other users
        of, the Cetus protocol or the Smart Contracts,including, without limitation, any direct, indirect, incidental,
        special, exemplary, punitive or consequential damages, or loss of profits, Digital Assets, or anything else of
        value;
        <br />
        <br />
        2. use of the Cetus protocol and/or theSmart Contracts may require that you pay a fee, such as network fees and
        other charges needed to perform a transaction;
        <br />
        <br />
        3. your use of the Cetus protocol and/or the Smart Contracts involves various risks, including, without
        limitation, risks of (a) losses while Digital Assets are being supplied to the Cetus protocol, (b) losses due to
        fluctuating prices of Digital Assets in trading pairs or liquidity pools and (c) losses due to bugs, errors,
        network outage, exploit incidents or any unforeseen circumstances;
        <br />
        <br />
        4. before using the Cetus protocol and/or Smart Contracts, you should review the relevant documentation to make
        sure you understand how the Cetus protocol and Smart Contracts work;
        <br />
        <br />
        5. you are responsible for doing your own diligence on the variousUIs through which you access the Cetus
        protocol and/or the Smart Contracts to understand the fees and risks they present;
        <br />
        <br />
        6. the Cetus Community has no control over any transactions conducted through the Cetus protocol and/or the
        Smart Contracts, the method of payment of any transactions, or any actual payments of transactions, including,
        without limitation, use of any third-party services like Digital Asset wallet providers;
        <br />
        <br />
        7. you mustensure that you have a sufficient balance of the applicable Digital Assets stored at your compatible
        Digital Asset wallet address to complete any transaction on the Cetus protocol, the Smart Contracts, or the
        Aptos and Sui network before initiating such transaction. AS DESCRIBED IN THE CETUS PROTOCOL LICENSES, THE CETUS
        PROTOCOL AND SMART CONTRACTS ARE PROVIDED "AS IS", AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.
        Although certain third parties developed much of the initial code for the Cetus protocol and the Smart
        Contracts, none of those parties or any of their respective agents or contractors provide, own, or control the
        Cetus protocol, which is run by the Smart Contracts. Upgrades and modifications to the Cetus protocol are
        managed by the Cetus Community.
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {}
  },
  methods: {}
})
</script>
<style lang="less" scoped>
.cetus-container {

  //   height: 100vh;
  .cetus {
    width: 100%;
    background: #000;
    color: #fff;
    position: relative;
    padding: 80px 0 140px;

    p {
      text-align: center;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .contailer-white-paper {
      width: 1000px;
      //   height: 500px;
      border: 1px solid #00d49e;
      margin: 0 auto;
      color: #a8c1bc;
      font-size: 16px;
      line-height: 28px;
      padding: 40px;
      box-shadow: 0 18px 22px -8px rgba(#07ebad, 0.3) inset;
    }
  }
}

@media screen and (max-width: 820px) {
  .cetus-container {
    .cetus {
      width: 100%;

      p {
        font-size: 20px;
      }

      .contailer-white-paper {
        width: 90%;
        padding: 20px;
        font-size: 14px;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .cetus-container {
    .cetus {
      width: 100%;

      p {
        font-size: 20px;
      }

      .contailer-white-paper {
        width: 90%;
        padding: 20px;
        font-size: 14px;
      }
    }
  }
}
</style>