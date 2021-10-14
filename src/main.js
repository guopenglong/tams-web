import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/global.css'
import consts from '@/util/consts'
import ElementUI from 'element-ui'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VueParticles from 'vue-particles'
require('echarts/lib/echarts')
require('echarts/lib/chart/bar')

Vue.config.productionTip = false
Vue.prototype.$consts = consts
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(VueParticles)
// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")

  if (to.matched.some(record => record.meta.requireAuth || record.meta.homePages)) {
     next()
  } else {
    if (token) { // 判断用户是否登录
      if (Object.keys(from.query).length === 0) { // 判断路由来源是否有query，处理不是目的跳转的情况
        next()
      } else {
        const redirect = from.query.redirect// 如果来源路由有query
        if (to.path === redirect) { // 这行是解决next无限循环的问题
          next()
        } else {
            next({ path: redirect })// 跳转到目的路由
          }
      }
    } else {
      if (to.path === '/login' || to.path === '/register') {
        console.log("444444444")
        next()
      } else {
        next({
          path: '/login',
          query: { redirect: to.fullPath }// 将目的路由地址存入login的query中
        })
      }
    }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
