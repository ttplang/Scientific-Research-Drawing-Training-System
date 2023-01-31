<script lang="ts" setup>
import { ref } from "vue";

import { RouterLink, RouterView, useRouter } from "vue-router";

const actived = ref(0);

const router = useRouter();
router.push("/UserCenter");

const clickMenu = (i: number) => {
  const urls = [
    "/userCenter",
    "/order",
    "/examination",
    "/balance",
    "/teachingResources",
    "educationalAdministration",
  ];
  actived.value = i;
  router.push(urls[i]);
};
</script>

<template>
  <div class="profile">
    <div class="pf-menu">
      <div @click="clickMenu(0)" :class="{ isActived: actived === 0 }">
        用户中心
      </div>
      <div @click="clickMenu(1)" :class="{ isActived: actived === 1 }">
        订单管理
      </div>
      <div @click="clickMenu(2)" :class="{ isActived: actived === 2 }">
        我的考试
      </div>
      <div @click="clickMenu(3)" :class="{ isActived: actived === 3 }">
        我的余额
      </div>
      <div @click="clickMenu(4)" :class="{ isActived: actived === 4 }">
        教学资源
      </div>
      <div @click="clickMenu(5)" :class="{ isActived: actived === 5 }">
        教务管理
      </div>
    </div>
    <div class="pf-main">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  display: flex;
  margin: 30px 0 100px;
  & > div {
    background-color: white;
    border-radius: 5px;
    height: 600px;
    &:first-child {
      width: 200px;
      margin-right: 30px;
      text-align: center;
      padding: 10px 25px;
      & > div {
        line-height: 50px;
        width: 150px;
        cursor: pointer;
        &:hover {
          background-color: #f1f2f6;
          color: #3ca7fa;
        }
      }
    }
    &:last-child {
      flex: 1;
    }
  }
}
.isActived {
  background-color: #f1f2f6;
}
</style>
