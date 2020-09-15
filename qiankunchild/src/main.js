import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import VueRouter from 'vue-router'
import store from './store'
import './public-path';
Vue.config.productionTip = false
Vue.use(VueRouter)


let router = null;
let instance = null;
function render() {
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/qiankunchild' : '/',
        mode: 'history',
        routes,
    });

    instance = new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount('#app');
}
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {

}

export async function mount(props) {
    render();
}

export async function unmount() {
    instance.$destroy();
    instance = null;
    router = null;
}