<script setup lang="ts">
import { ref } from "vue";

import Img from "@/assets/DemoPic1.png";
import { Lock } from "@element-plus/icons-vue";

import Comment from "@/components/Comment.vue";

document.title = "Web前端：从零开始做网站";
const activeName = ref("details");
</script>
<template>
  <div class="c-desc course-box">
    <div>
      <img :src="Img" alt="" />
    </div>
    <div>
      <div class="course-title">Web前端：从零开始做网站</div>
      <div class="course-desc">
        本课程专为零基础学员准备，从网页基础深入到网页布局开发。课程内容讲解详细，注重细节，让你从入门到精通，一周时间掌握HTML+CSS网页开发。经过学习与实战，可独立开发出高质量的静态网页项目。
      </div>
      <div class="buy">
        <!-- <el-button type="success" size="large">免费</el-button> -->
        <router-link to="/pay">
          <el-button type="danger" size="large">订阅课程$ 999</el-button>
        </router-link>
      </div>
    </div>
  </div>
  <div class="details-box course-box">
    <el-tabs v-model="activeName">
      <el-tab-pane label="课程详情" name="details">
        <p>
          本课程专为零基础学员准备，从网页基础深入到网页布局开发。课程内容讲解详细，注重细节，让你从入门到精通，一周时间掌握HTML+CSS网页开发。经过学习与实战，可独立开发出高质量的静态网页项目。
        </p>
      </el-tab-pane>
      <el-tab-pane label="课程目录" name="catalogue">
        <div v-for="(item, index) in 5" :key="index" class="catalogue-box">
          <h2>章节一：HTML 网站的骨架</h2>
          <div v-for="(item, index) in 3" :key="index">
            <span
              ><el-icon><Lock /></el-icon
            ></span>
            <router-link to="/">1-1 HTML入门和工具选择</router-link>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="课程评论" name="comment"><Comment /></el-tab-pane>
      <el-tab-pane label="课程附件" name="enclosure">
        <div v-for="(item, index) in 5" :key="index" class="ecs">
          <div>Banner背景图.zip</div>
          <div>
            <el-button type="primary">下载附件</el-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style lang="scss" scoped>
.course-box {
  background-color: white;
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
  padding: 30px;
}
.c-desc {
  display: flex;
  & > div:first-child {
    width: 300px;
    height: 200px;
    background-color: pink;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 300px;
      height: 200px;
    }
  }
  & > div:last-child {
    margin-left: 25px;
    flex: 1;
    padding-top: 5px;
    position: relative;
    .course-title {
      line-height: 40px;
      font-size: 18px;
      font-weight: 600;
    }
    .course-desc {
      line-height: 30px;
    }
    .buy {
      position: absolute;
      bottom: 0;
      line-height: 40px;
    }
  }
}
.details-box {
  margin-bottom: 50px;
  .catalogue-box {
    margin-bottom: 15px;
    line-height: 30px;
    font-weight: 200;
    h2 {
      font-size: 18px;
      line-height: 40px;
      margin-bottom: 5px;
    }
    span {
      margin-right: 10px;
    }
    a {
      display: inline-block;
    }
  }
  .ecs {
    line-height: 50px;
    display: flex;
    & > div:first-child {
      width: 400px;
      // margin-right: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
