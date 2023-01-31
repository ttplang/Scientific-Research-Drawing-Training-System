<script setup lang="ts"></script>
<template>
  <h1>在线考试</h1>
  <!-- <h1>习题</h1> -->
  <div class="p-box">
    <span>分类</span>
  </div>
  <div p-box>
    <div></div>
    <div class="pat">
      <div>
        <el-pagination layout="prev, pager, next" :total="50" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  margin: 30px 0;
}
.p-box {
  background-color: white;
  margin: 30px 0;
  padding: 30px;
  border-radius: 5px;
}
.pat {
  margin-bottom: 50px;
  position: relative;
  height: 50px;
  div {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
