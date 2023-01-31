<script setup lang="ts">
import VideoThumb from "../components/VideoThumb.vue";
import TopicThumb from "../components/TopicThumb.vue";

import { get } from "";
const menu = [
  {
    title: "推荐课程",
    content: [
      {
        pic: "",
        title: "web前端：从零开始做网站",
        auther: "唐天鹏",
        piece: "",
      },
      {
        pic: "",
        title: "web前端：从零开始做网站",
        auther: "唐天鹏",
        piece: "",
      },
      {
        pic: "",
        title: "web前端：从零开始做网站",
        auther: "唐天鹏",
        piece: "",
      },
      {
        pic: "",
        title: "web前端：从零开始做网站",
        auther: "唐天鹏",
        piece: "",
      },
      {
        pic: "",
        title: "web前端：从零开始做网站",
        auther: "唐天鹏",
        piece: "",
      },
      {
        pic: "",
        title: "web前端：从零开始做网站",
        auther: "唐天鹏",
        piece: "",
      },
      {
        pic: "",
        title: "web前端：从零开始做网站",
        auther: "唐天鹏",
        piece: "",
      },
    ],
  },
];
</script>

<template>
  <div class="carousel">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="thumb">
    <div class="rm-tt">推荐课程</div>
    <div class="c-main">
      <div v-for="(item, index) in 8" :key="index">
        <router-link to="/course/details"><VideoThumb /></router-link>
      </div>
    </div>
  </div>
  <div class="thumb">
    <div class="rm-tt">图文</div>
    <div class="p-main">
      <div v-for="(item, index) in 4" :key="index">
        <router-link to="/QA/details"><TopicThumb /></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.carousel {
  margin: 30px 0 50px;
}
.thumb {
  width: 100%;
  margin-bottom: 50px;
  .rm-tt {
    line-height: 100px;
    text-align: center;
    font-size: 30px;
    font-weight: 600;
  }
  .c-main {
    display: grid;
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: 300px 300px;
    grid-gap: 15px (80px/3);
    & > div {
    }
  }
  .p-main {
    display: grid;
    grid-template-columns: repeat(2, 600px);
    grid-template-rows: 150px 150px;
    grid-gap: 40px 80px;
  }
  &:last-child {
    margin-bottom: 100px;
  }
}
</style>
