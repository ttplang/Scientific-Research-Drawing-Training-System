<script setup lang="ts">
import { defineProps, ref } from "vue";

import Pic from "@/assets/DemoPic1.png";
// const props = defineProps<{
//   info: Object;
// }>();
const enter = ref(0);
</script>

<template>
  <div class="thumb-container" @mouseover="enter = 1" @mouseout="enter = 0">
    <div class="desc-pic">
      <div class="img-container">
        <img :class="{ isEnter: enter === 1 }" :src="Pic" alt="" />
      </div>
    </div>
    <div class="desc-info">
      <div class="desc-title">
        web前端：从零开始做网站 web前端：从零开始做网站web前端：从零开始做网站
        web前端：从零开始做网站
      </div>
      <div>
        <div class="auther">唐天鹏</div>
        <div class="read-num">1841545人已阅读</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thumb-container {
  cursor: pointer;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: white;
  border-radius: 5px;
  display: flex;
  &:hover {
    box-shadow: 5px 5px #ebebeb;
  }
  .desc-pic {
    width: 180px;
    padding: 15px;
    div {
      width: 150px;
      height: 120px;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      .isEnter {
        top: -10px;
        left: -10px;
        position: absolute;
        width: 170px;
        height: 140px;
      }
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transition: all 0.5s ease 0s;
      }
    }
  }
  .desc-info {
    .desc-title {
      line-height: 80px;
      font-size: 18px;
      font-weight: 600;
      color: #666;
      padding: 10px 0 0 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    & > div:last-child {
      display: flex;
      font-weight: 200;
      padding-left: 10px;
      .auther {
        margin-right: 10px;
      }
    }
  }
}
</style>
