
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const routes = [
    {
        path: '/',
        redirect: '/home',
        hidden: true
    },
    {
        path: '/home',
        name: '首页',
        icon: 'el-icon-s-home',
        component: () => import('@/views/main/Main.vue'),
        leaf: true
    },
    {
        path: '/mine',
        name: '我的',
        icon: 'el-icon-s-custom',
        component: () => import('@/views/mine/Mine.vue'),
        leaf: false,
        meta: {
            isQiankun: true
        },
        children: [
            {
                path: '/mine/mines',
                name: '子路由',
                icon: 'el-icon-s-check',
                component: () => import('@/views/mine/mines/Mine.vue'),
            }
        ]
    },
    {
        path: '/qiankunchild',
        name: '微应用-vue',
        icon: 'el-icon-s-promotion',
        leaf: true
    }
]
    

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const childRoute = ['/app-vue-hash','/app-vue-history'];
const isChildRoute = path => childRoute.some(item => path.startsWith(item))
const rawAppendChild = HTMLHeadElement.prototype.appendChild;
const rawAddEventListener = window.addEventListener;
router.beforeEach((to, from, next) => {
  // 从子项目跳转到主项目
  if(isChildRoute(from.path) && !isChildRoute(to.path)){
    HTMLHeadElement.prototype.appendChild = rawAppendChild;
    window.addEventListener = rawAddEventListener;
  }
  next();
});
export default router