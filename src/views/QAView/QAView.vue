<script setup lang="ts">
import VideoThumb from "@/components/VideoThumb.vue";

import QsIcon from "@/assets/icons/question.png";
import { reactive, ref } from "vue";

const dialogVisible = ref(false);
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const formLabelWidth = "140px";
const submit = () => {
  dialogVisible.value = false
  alert(form.name)
}
</script>
<template>
  <div class="QA-nav">
    <span>综合</span>
    <el-divider direction="vertical" />
    <span>已解决</span>
    <el-divider direction="vertical" />
    <span>未解决</span>
  </div>
  <div class="QA-main">
    <div class="qs-list">
      <div class="list">
        <div v-for="(item, index) in 10" :key="index">
          <router-link to="/QA/details">
            <div class="QA-item">
              <div class="icon">
                <img :src="QsIcon" alt="" />
              </div>
              <div class="qs-info">
                <div class="qs-title">
                  在css里面定义img标签的长高为什么无效，是css不支持img标签吗？哪位大神帮忙参考一下，谢谢！
                </div>
                <div class="qs-sl">
                  <div class="as-num">3个回答</div>
                  <div class="view-num">100次浏览</div>
                  <div class="as-status">已解决</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="pat">
        <div>
          <el-pagination
            layout="prev, pager, next"
            hide-on-single-page
            :total="500"
          />
        </div>
      </div>
    </div>
    <div class="ask">
      <div>
        <div class="ask-btn">
          <el-button
            type="primary"
            @click="dialogVisible = true"
            style="width: 320px; height: 60px"
            >我要提问</el-button
          >
          <el-dialog v-model="dialogVisible" title="问题描述" width="50%">
            <el-form :model="form">
              <el-form-item label="问题标题" :label-width="formLabelWidth">
                <el-input
                  v-model="form.region"
                  maxlength="36"
                  placeholder="请填写问题标题（不超过36个字）"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item label="问题内容" :label-width="formLabelWidth">
                <el-input
                  v-model="form.name"
                  maxlength="36"
                  type="textarea"
                  placeholder="请填写问题标题（不超过36个字）"
                  autocomplete="off"
                />
              </el-form-item>
              <el-form-item label="插入图片" :label-width="formLabelWidth">
                <el-input
                  v-model="form.date1"
                  maxlength="36"
                  placeholder="请填写问题标题（不超过36个字）"
                  autocomplete="off"
                />
              </el-form-item>
            </el-form>
            <template #footer>
              <span class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">Cancel</el-button> -->
                <el-button type="primary" @click="submit">
                  发布问题
                </el-button>
              </span>
            </template>
          </el-dialog>
        </div>
        <div class="ask-rules">
          <h1>本站禁止发布以下内容，违者报警并提交相关IP等信息。</h1>
          <p>(一)反对宪法所确定的基本原则的。</p>
          <p>(二)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的。</p>
          <p>(三)损害国家荣誉和利益的。</p>
          <p>(四)煽动民族仇恨、民族歧视，破坏民族团结的。</p>
          <p>(五)破坏国家宗教政策，宣扬邪教和封建迷信的。</p>
          <p>(六)散布谣言，扰乱社会秩序，破坏社会稳定的。</p>
          <p>(七)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的。</p>
          <p>(八)侮辱或者诽谤他人，侵害他人合法权益的。</p>
          <p>(九)含有法律、行政法规禁止的其他内容的。</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.QA-nav {
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
.QA-main {
  margin-bottom: 50px;
  display: flex;
  .qs-list {
    flex: 1;
    .list {
      .QA-item {
        background-color: white;
        display: flex;
        border-radius: 10px;
        margin-bottom: 15px;
        padding: 20px;
        .icon {
          img {
            width: 30px;
            height: 30px;
          }
        }
        .qs-info {
          margin-left: 30px;
          .qs-title {
            line-height: 30px;
            font-size: 18px;
          }
          .qs-sl {
            margin-top: 20px;
            position: relative;
            display: flex;
            font-weight: 200;
            line-height: 24px;
            font-size: 14px;
            .view-num {
              margin-left: 30px;
            }
            .as-status {
              position: absolute;
              right: 0;
              width: 60px;
              text-align: center;
              color: #fff;
              font-size: 12px;
              background-color: #04c877;
            }
          }
        }
      }
    }
  }
  .ask {
    width: 400px;
    margin-left: 30px;
    & > div {
      border-radius: 10px;
      padding: 20px 40px;
      background-color: white;
      .ask-rules {
        margin-top: 50px;
        font-weight: 600;
        font-size: 16px;
        line-height: 25px;
        color: #666;
        h1 {
          margin-bottom: 20px;
        }
        p {
          font-weight: 200;
          font-size: 14px;
        }
      }
    }
  }
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
