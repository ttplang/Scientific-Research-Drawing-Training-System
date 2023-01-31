<script setup lang="ts">
import { ref } from "vue";

import Avatar from "../assets/avatar.jpg";

const count = ref(0);
const showMore = ref(false);
const load = () => {
  if (count.value < 100) count.value += 10;
};
</script>
<template>
  <div class="blame">
    <div><el-avatar :size="50" :src="Avatar" /></div>
    <div>
      <el-input
        style="height: 50px"
        size="large"
        placeholder="此处填写你的评论"
      />
    </div>
    <div>
      <el-button style="height: 50px" size="large" type="primary"
        >评论</el-button
      >
    </div>
  </div>
  <div class="commit-list">
    <div v-for="(item, index) in 10" :key="index">
      <div class="Landlord">
        <div><el-avatar :size="50" :src="Avatar" /></div>
        <div>
          <div><span>fesi</span><span>四天前</span></div>
          <div>
            很不错的课程
            {{
              index
            }}本课程专为零基础学员准备，从网页基础深入到网页布局开发。课程内容讲解详细，注重细节，让你从入门到精通，一周时间掌握HTML+CSS网页开发。经过学习与实战，可独立开发出高质量的静态网页项目。
          </div>
        </div>
      </div>
      <div class="rb">
        <a href="javascript:;">回复</a>
        <div>
          <div><el-input size="large" placeholder="此处填写你的回复" /></div>
          <div><el-button type="primary" size="large">发表回复</el-button></div>
        </div>
      </div>
      <div>
        <div class="review">
          <div v-for="(item, index) in 5" :key="index">
            <div class="Landlord">
              <div><el-avatar :size="50" :src="Avatar" /></div>
              <div>
                <div>
                  <span>fesi</span><span>回复：fesi</span><span>四天前</span>
                </div>
                <div>很不错的课程</div>
              </div>
            </div>
            <!-- <div class="rc rb">
              <a href="javascript:;">回复</a>
              <div>
                <div>
                  <el-input size="large" placeholder="此处填写你的回复" />
                </div>
                <div>
                  <el-button type="primary" size="large">发表回复</el-button>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div v-if="showMore">
          <el-pagination
            layout="prev, pager, next"
            hide-on-single-page
            :total="500"
          />
        </div>
        <div v-else style="font-size: 14px; color: #666">
          共33条回复，<a href="javascript:;">点击展开</a>
        </div>
      </div>
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
</template>
<style scoped lang="scss">
.blame {
  display: flex;
  line-height: 40px;
  & > div:first-child {
    width: 80px;
  }
  & > div:nth-child(2) {
    flex: 1;
  }
  & > div:last-child {
    width: 100px;
    text-align: center;
  }
}
.commit-list {
  margin-top: 30px;
  & > div {
    margin-bottom: 30px;
    & > div {
      margin-left: 85px;
    }
    .Landlord {
      display: flex;
      margin-left: 0;
      margin-bottom: 10px;
      & > div:last-child {
        margin-left: 35px;
        & > div:first-child {
          color: #666;
          margin-bottom: 15px;
          span {
            margin-right: 15px;
          }
        }
        & > div:last-child {
          line-height: 25px;
        }
      }
    }
    & > div:last-child {
      margin-top: 15px;
      .review > div {
        margin-bottom: 30px;
      }
    }
    .rb {
      margin-top: 5px;
      color: #666;
      & > div {
        margin-top: 10px;
        display: flex;
        & > div:first-child {
          flex: 1;
        }
        & > div:last-child {
          margin: 0 10px;
          width: 80px;
        }
      }
    }
    .rc {
      margin-left: 85px;
    }
  }
}
.pat {
  position: relative;
  height: 50px;
  div {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
