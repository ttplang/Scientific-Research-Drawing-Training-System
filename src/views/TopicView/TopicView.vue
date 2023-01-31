<script setup lang="ts">
import TopicThumb from "@/components/TopicThumb.vue";
</script>
<template>
  <div class="topic-nav">
    <span>全部</span>
    <el-divider direction="vertical" />
    <span>所有</span>
    <el-divider direction="vertical" />
    <span>所有</span>
    <el-divider direction="vertical" />
    <span>全部</span>
  </div>
  <div class="topic-main">
    <div>
      <div v-for="(item, index) in 10" :key="index"><TopicThumb /></div>
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
    </div>
    <div>
      <div>
        <div class="r-title">推荐阅读</div>
        <div class="r-list">
          <div v-for="(item, index) in 4" :key="index"><TopicThumb /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.topic-nav {
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
.topic-main {
  margin: 30px 0 50px;
  display: flex;
  & > div:first-child {
    & > div {
      width: 850px;
      margin-bottom: 20px;
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
  }
  & > div:last-child {
    width: 100%;
    margin-left: 15px;
    & > div {
      background-color: white;
      border-radius: 5px;
      padding-top: 20px;
      .r-title {
        line-height: 40px;
        padding-left: 15px;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
</style>
