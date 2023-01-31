<script setup lang="ts">
import QsIcon from "@/assets/icons/question.png";
import demo1 from "@/assets/avatar.jpg";
import demo2 from "@/assets/DemoPic1.png";

import Comment from "@/components/Comment.vue";
</script>
<template>
  <div class="QA-info QA-box">
    <div>
      <img :src="QsIcon" alt="" />
      <h2>
        在css里面定义img标签的长高为什么无效，是css不支持img标签吗？哪位大神帮忙参考一下，谢谢！
      </h2>
    </div>
    <div>
      <p>麻烦看看是我哪里写错了吗？</p>
      <div>
        <img :src="demo1" alt="" />
      </div>
    </div>
    <div>
      <span>10 个月前</span>
      <span>42 次浏览</span>
      <span>3 回答</span>
    </div>
  </div>
  <div class="QA-review QA-box">
    <Comment />
  </div>
</template>
<style lang="scss" scoped>
.QA-box {
  border-radius: 10px;
  background-color: white;
  margin: 30px 0 50px;
  padding: 30px;
}
.QA-info {
  & > div {
    margin-bottom: 30px;
  }
  & > div:first-child {
    display: flex;
    line-height: 35px;
    font-size: 18px;
    font-weight: 600;
    img {
      width: 35px;
      height: 35px;
      margin-right: 15px;
    }
  }
  & > div:nth-child(2) {
    p {
      line-height: 20px;
      margin-bottom: 30px;
    }
    img {
      width: 600px;
    }
  }
  & > div:last-child {
    margin-bottom: 0;
    span {
      margin-right: 30px;
      color: #666;
      font-weight: 200;
      font-size: 16px;
    }
  }
}
</style>
