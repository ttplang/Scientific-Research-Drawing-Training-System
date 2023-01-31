import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: '首页',
      },
      component: HomeView,
    },
    {
      path: '/pay',
      name: 'pay',
      meta: {
        title: '收银台',
      },
      component: () => import('../views/PaymentView/PaymentView.vue'),
    },
    {
      path: "/search",
      name: "search",
      meta: {
        title: '搜索',
      },
      component: () => import('../views/SearchView.vue'),
    },
    {
      path: "/course",
      name: "course",
      meta: {
        title: '课程',
      },
      component: () => import('../views/CourseView/CourseView.vue'),
    },
    {
      path: "/course/details",
      name: "courseDetails",
      meta: {
        title: '课程',
      },
      component: () => import('../views/CourseView/CourseDetails.vue'),
    },
    {
      path: "/exam",
      name: "exam",
      meta: {
        title: '考试练习',
      },
      component: () => import('../views/ExamView/ExamView.vue'),
    },
    {
      path: "/papers",
      name: "papers",
      meta: {
        title: '考试练习',
      },
      component: () => import('../views/ExamView/PapersView.vue'),
    },
    {
      path: "/topic",
      name: "topic",
      meta: {
        title: '图文',
      },
      component: () => import('../views/TopicView/TopicView.vue'),
    },
    {
      path: "/QA",
      name: "QA",
      meta: {
        title: '问答',
      },
      component: () => import('../views/QAView/QAView.vue'),
    },
    {
      path: "/QA/details",
      name: "QADetails",
      meta: {
        title: '问答',
      },
      component: () => import('../views/QAView/QADetails.vue'),
    },
    {
      path: "/studyCenter",
      name: "studyCenter",
      meta: {
        title: '我的学习',
      },
      component: () => import('../views/StudyCenterView/StudyCenterView.vue'),
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        title: '用户中心',
      },
      component: () => import("../views/ProfileCmpt/Profile.vue"),
      children: [{
        path: "/userCenter",
        name: "userCenter",
        meta: {
          title: '用户中心',
        },
        component: () => import("../views/ProfileCmpt/UserCenter.vue"),
      }, {
        path: "/balance",
        name: "balance",
        meta: {
          title: '我的余额',
        },
        component: () => import("../views/ProfileCmpt/Balance.vue"),
      }, {
        path: "/educationalAdministration",
        name: "educationalAdministration",
        meta: {
          title: '教务管理',
        },
        component: () => import("../views/ProfileCmpt/educationalAdministration.vue"),
      }, {
        path: "/examination",
        name: "examination",
        meta: {
          title: '我的考试',
        },
        component: () => import("../views/ProfileCmpt/Examination.vue"),
      }, {
        path: "/order",
        name: "order",
        meta: {
          title: '订单管理',
        },
        component: () => import("../views/ProfileCmpt/Order.vue"),
      }, {
        path: "/teachingResources",
        name: "teachingResources",
        meta: {
          title: '教学资源',
        },
        component: () => import("../views/ProfileCmpt/TeachingResources.vue"),
      }]
    },
  ],
});

router.beforeEach(async (_to, _from, _next) => {
  document.title = _to.meta.title;
  _next();
});

export default router;
