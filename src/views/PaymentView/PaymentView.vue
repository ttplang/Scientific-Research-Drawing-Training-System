<script setup lang="ts">
import { ref } from "vue";

import Demo from "@/assets/DemoPic1.png";
import wxpay from "@/assets/icons/wxpay.png";
import alipay from "@/assets/icons/alipay.png";
import payCode from '@/assets/icons/paycode.png';

const payment = ref(1);
const onDecode = (data) => {
  console.log(data)
}
</script>
<template>
  <div class="pay-container">
    <div class="payment-info">
      <div class="p-title">订阅信息</div>
      <div>
        <div>
          <img :src="Demo" alt="" />
        </div>
        <div>
          <div>Web前端：从零开始做网站</div>
          <div>点播课程</div>
        </div>
        <div>￥199</div>
      </div>
    </div>
    <div class="payment-type">
      <h2>支付方式</h2>
      <div>
        <div @click="payment = 1" :class="{ selected: payment === 1 }">
          <img :src="wxpay" alt="" />
        </div>
        <div @click="payment = 2" :class="{ selected: payment === 2 }">
          <img :src="alipay" alt="" />
        </div>
      </div>
      <div>
        <img :src="payCode" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pay-container {
  background-color: white;
  margin: 30px 0 50px;
  border-radius: 10px;
  padding: 30px;
  .payment-info {
    line-height: 50px;
    .p-title {
      font-size: 18px;
    }
    & > div:last-child {
      display: flex;
      & > div:first-child {
        width: 210px;
        height: 140px;
        border-radius: 10px;
        overflow: hidden;
        margin-right: 20px;
        img {
          width: 210px;
          height: 140px;
        }
      }
      & > div:nth-child(2) {
        flex: 1;
        position: relative;
        & > div:first-child {
          font-size: 22px;
          font-weight: 600;
        }
        & > div:last-child {
          position: absolute;
          bottom: 0;
          display: inline-block;
          color: red;
          line-height: 40px;
          padding: 0 10px;
          border: 1px solid red;
        }
      }
      & > div:last-child {
        line-height: 140px;
        font-size: 26px;
        color: red;
        font-weight: 600;
      }
    }
  }
  .payment-type {
    margin: 70px 0;
    padding-bottom: 20px;
    h2 {
      margin-bottom: 30px;
    }
    & > div:nth-child(2) {
      display: flex;
      margin-bottom: 20px;
      .selected {
        border: 2px solid red;
      }
      & > div {
        border: 2px solid #666;
        padding: 10px;
        margin-right: 15px;
        img {
          width: 200px;
        }
      }
    }
  }
}
</style>
