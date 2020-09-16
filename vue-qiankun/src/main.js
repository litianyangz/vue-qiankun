import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Router from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.scss'
import { registerMicroApps, initGlobalState, start } from "qiankun"

Vue.use(ElementUI);
Vue.use(Router);
let state = {
    href: ''
}
const actions = initGlobalState(state)
Vue.config.productionTip = false
Vue.prototype.$actions = actions

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#container');
/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
    return location => location.pathname.startsWith(routerPrefix);
}

// 注册子应用
registerMicroApps(
    [
        {
            name: "qiankunchild",
            entry: "//localhost:9999",
            container: '#root-view',
            activeRule: "/qiankunchild",
        }
    ], {
        beforeLoad: [
            app => {
                console.log("before load", app);
            }
        ], // 挂载前回调
        beforeMount: [
            app => {
                console.log("before mount", app);
            }
        ], // 挂载后回调
        afterUnmount: [
                app => {
                    console.log("after unload", app);
                }
            ] // 卸载后回调
    }
);

actions.onGlobalStateChange((state, prev) => {
    if (state.href) {
        window.location.href = state.href;
    }
});
// 启动
start();