<script setup lang="ts">
import Exam from "@/assets/icons/exam.png";
import VirtualTest from "@/assets/icons/virtual-test.png";
</script>
<template>
  <div class="exam-container">
    <div class="ec">
      <router-link to="/papers">
        <h2>在线考试</h2>
        <p>共16套试卷</p>
        <img :src="Exam" alt="" />
      </router-link>
    </div>
    <div class="ec">
      <router-link to="/papers">
        <h2>习题</h2>
        <p>共16套试卷</p>
        <img :src="VirtualTest" alt="" />
      </router-link>
    </div>
  </div>
</template>
<style scoped lang="scss">
.exam-container {
  margin: 30px 0 50px;
  border-radius: 10px;
  min-height: 600px;
  background-color: white;
  padding: 60px;
  display: flex;
  & > div {
    width: 555px;
    margin-right: 50px;
    border-radius: 15px;
  }
  & > div:first-child {
    background: linear-gradient(315deg, #33baf7, #1784ed);
  }
  & > div:last-child {
    margin-right: 0;
    background: linear-gradient(135deg, #00baa6, #00baa6 0, #00dbcf);
  }
  .ec {
    position: relative;
    color: #fff;
    & > a {
      display: block;
      width: 100%;
      height: 100%;
    }
    a:hover {
      color: #fff;
    }
    h2 {
      position: absolute;
      top: 100px;
      left: 50px;
      font-size: 30px;
    }
    p {
      position: absolute;
      left: 50px;
      top: 150px;
    }
    img {
      position: absolute;
      width: 180px;
      right: 80px;
      top: 40px;
    }
  }
}
</style>
