<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const scVal = ref(route.query.keywords);
</script>

<template>
  <div class="sc-header">
    <div>
      <el-input
        v-model="scVal"
        style="max-width: 750px; margin-right: 15px"
        size="large"
      />
      <el-button type="primary" size="large">搜索</el-button>
    </div>
    <div></div>
  </div>
  <div class="sc-main">
    <div>
      <div>
        <a href="javascript:;">【课程】Vue2+Vue3前端框架入门与实战</a>
      </div>
      <div>
        如果你之前已经习惯了用jQuery操作DOM，学习Vue.js时请先抛开手动操作DOM的思维，因为Vue.js是数据驱动的，你无需手动操作DOM。
        它通过一些特殊的HTML语法，将DOM和数据绑定起来。如果你之前已经习惯了用jQuery操作DOM，学习Vue.js时请先抛开手动操作DOM的思维，因为Vue.js是数据驱动的，你无需手动操作DOM。
        它通过一些特殊的HTML语法，将DOM和数据绑定起来。
      </div>
    </div>
    <div>
      <div>
        <a href="javascript:;">【图文】Vue2+Vue3前端框架入门与实战</a>
      </div>
      <div>
        如果你之前已经习惯了用jQuery操作DOM，学习Vue.js时请先抛开手动操作DOM的思维，因为Vue.js是数据驱动的，你无需手动操作DOM。
        它通过一些特殊的HTML语法，将DOM和数据绑定起来。
      </div>
    </div>
    <el-pagination background layout="prev, pager, next" hide-on-single-page :total="500" />
  </div>
</template>

<style scoped lang="scss">
.sc-header {
  margin: 20px 0 0;
  padding: 15px 10px 40px;
  background-color: white;
  border-radius: 5px 5px 0 0;
  // position: absolute;
  // width: 100%;
  // left: 0;
  & > div:first {
    width: 70%;
  }
}
.sc-main {
  background-color: white;
  min-height: 500px;
  margin-bottom: 50px;
  padding-bottom: 30px;
  padding-left: 10px;
  border-radius: 0 0 5px 5px;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  & > div {
    width: 750px;
    margin-bottom: 30px;
    & > div:first-child {
      margin-bottom: 10px;
    }
    & > div:last-child {
      line-height: 23px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    a {
      font-size: 18px;
      font-weight: 600;
      color: #666;
      &:hover {
        color: #3ca7fa;
      }
    }
  }
}
</style>
