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
      <img :class="{ isEnter: enter === 1 }" :src="Pic" alt="" />
    </div>
    <div class="th-tt">web前端：从零开始做网站 web前端：从零开始做网站</div>
    <div class="desc-info">
      <div class="owner">唐天鹏</div>
      <div class="price">免费</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.thumb-container {
  cursor: pointer;
  width: 300px;
  height: 300px;
  overflow: hidden;
  background-color: white;
  border-radius: 5px;
  &:hover {
    box-shadow: 5px 5px #ebebeb;
  }
  .desc-pic {
    height: 200px;
    position: relative;
    overflow: hidden;
    .isEnter {
      top: -10px;
      left: -10px;
      position: absolute;
      width: 320px;
      height: 220px;
    }
    img {
      width: 100%;
      height: 200px;
      position: absolute;
      left: 0;
      top: 0;
      transition: all 0.5s ease 0s;
    }
  }
  .th-tt {
    line-height: 60px;
    font-size: 18px;
    font-weight: 600;
    color: #666;
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .desc-info {
    position: relative;
    line-height: 30px;
    .owner {
      position: absolute;
      left: 10px;
    }
    .price {
      position: absolute;
      right: 10px;
    }
  }
}
</style>
