
import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import store from '../store/index'
Vue.use(Router)
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const routes = [
    {
        path: '/',
        name: 'home',
        icon: 'el-icon-s-home',
        redirect: '/home',
        leaf: true,
        component: () => import('@/components/MainMenu.vue'),
        children: [
            {
                path: '/home',
                name: '首页',
                component: () => import('@/views/main/Main.vue'),
                meta: {
                    isQiankun: true
                }
            }
        ]
    },
    {
        path: '/',
        name: 'mine',
        icon: 'el-icon-s-data',
        leaf: true,
        component: () => import('@/views/Home.vue'),
        children: [
            {
                path: '/mine',
                name: '我的',
                component: () => import('@/views/mine/Mine.vue'),
                meta: {
                    isQiankun: true
                }
            }
        ]
    },
    {
        path: '/',
        name: '微应用',
        icon: 'el-icon-s-data',
        component: () => import('@/views/Home.vue'),
        leaf: true,
        children: [
            {
                path: '/qiankunchild',
                name: '微应用-vue',
                meta: {
                    isQiankun: false
                }
            }
        ]
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
	if (to.matched.some(record => record.meta.isQiankun)) {
        store.dispatch('setXkcsid', false)
	} else {
        store.dispatch('setXkcsid', true)
    }
    next()
})
export default router