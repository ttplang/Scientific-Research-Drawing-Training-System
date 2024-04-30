<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from "vue-router";
import useSearch from "./hooks/header/Search";

import Logo from "./assets/logo.svg";
import Avatar from "./assets/avatar.jpg";
import { Search } from "@element-plus/icons-vue";

const { question, search } = useSearch();
const router = useRouter();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="logo">
          <RouterLink to="/"><img :src="Logo" /></RouterLink>
        </div>
        <div class="search">
          <el-input
            v-model="question"
            class="w-50 m-2"
            size="large"
            placeholder="请输入关键字"
            @keyup.enter="search"
          >
            <template #append>
              <el-button @click="search">
                <el-icon>
                  <Search />
                </el-icon>
              </el-button>
            </template>
          </el-input>
        </div>
        <div class="learn-record" @click="() => {router.push('/studyCenter')}">
          <img
            src="data:image/png;base64,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"
            width="20"
            height="20"
            style="margin: 0px auto"
          />
          <div><router-link to="/studyCenter">我的学习</router-link></div>
        </div>
        <div class="info">
          <RouterLink to="/Profile"
            ><el-avatar :size="40" :src="Avatar"
          /></RouterLink>
          <!-- <a href="javascript:;">登录</a> -->
        </div>
      </nav>
      <nav>
        <div><router-link to="/">首页</router-link></div>
        <div><router-link to="/course">课程</router-link></div>
        <div><router-link to="/exam">考试练习</router-link></div>
        <div><router-link to="/topic">图文</router-link></div>
        <div><router-link to="/QA">问答</router-link></div>
      </nav>
    </div>
  </header>
  <main>
    <div class="wrapper"><RouterView /></div>
  </main>
  <footer>
    <div class="wrapper">
      <!-- <div class="gm-info">
        &copy; 2023 唐天鹏 ·
        <a
          href="https://beian.miit.gov.cn/?spm=a2c4g.11186623.J_9220772140.111.6f155615Hq3hRb"
          target="_blank"
          >桂ICP备2022009985号</a
        >
      </div> -->
    </div>
  </footer>
  <el-backtop :right="100" :bottom="100" />
</template>

<style scoped lang="scss">
header {
  width: 100%;
  background-color: white;
  nav {
    display: flex;
    &:first-child {
      padding: 10px 0;
      .logo {
        flex: 1;
        img {
          width: 180px;
          height: 40px;
          cursor: pointer;
        }
      }
      .learn-record {
        text-align: center;
        width: 100px;
        margin: 0 30px;
        cursor: pointer;
        div:hover {
          color: #3ca7fa;
        }
      }
      .info {
        width: 50px;
        // line-height: 40px;
        display: flex;
        align-items: center;
      }
    }
    &:last-child {
      & > div {
        line-height: 40px;
        font-size: 16px;
        font-weight: 400;
        padding-right: 60px;
      }
    }
  }
}
.wrapper {
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
footer {
  height: 200px;
  background-color: #0f0a1e;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  color: #6b7280;
  line-height: 12px;
  .wrapper div {
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translate(-50%, 0);
    a {
      color: #6b7280;
    }
  }
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
