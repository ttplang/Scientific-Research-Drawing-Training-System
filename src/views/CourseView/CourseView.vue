<script setup lang="ts">
import { useRouter } from "vue-router";

import VideoThumb from "@/components/VideoThumb.vue";

const router = useRouter();
const toDetails = () => {
  router.push({
    path: '/course/details',
  })
}
</script>
<template>
  <div class="course-nav">
    <span>全部</span>
    <el-divider direction="vertical" />
    <span>所有</span>
    <el-divider direction="vertical" />
    <span>所有</span>
    <el-divider direction="vertical" />
    <span>全部</span>
  </div>
  <div class="course-main">
    <div @click="toDetails" v-for="(item, index) in 16" :key="index"><VideoThumb /></div>
  </div>
  <div class="pat">
    <div>
      <el-pagination
        background
        layout="prev, pager, next"
        hide-on-single-page
        :total="500"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.course-nav {
  line-height: 30px;
  margin: 30px 0;
  span {
    margin: 0 20px;
    cursor: pointer;
  }
  span:hover {
    color: #3ca7fa;
  }
  & > span:first-child {
    margin-left: 0;
    color: #3ca7fa;
  }
}
.course-main {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin-bottom: 30px;
    margin-right: calc(80px/3);
  }
  & > div:nth-child(4n) {
    margin-right: 0;
  }
}
.pat {
  margin-bottom: 50px;
  position: relative;
  height: 50px;
  div {
    position: absolute;
    left: 50%;
    transform: translate(- 50%, 0);
  }
}
</style>
