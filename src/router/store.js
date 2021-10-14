import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 变量存储库
  state: {
    // 存储token
    uuids:'admin',
    token: '',
    userInfo: ''
  },
  // 通过同步的方法存储
  mutations: {
    // 设置vuex的token
    setToken (state, token) {
      state.token = token
      localStorage.tokens = token // 同步存储token至localStorage
    },
    // 设置vuex的token
    setUserInfo (state, userInfo) {
      state.userInfo = JSON.stringify(userInfo)
      localStorage.userInfo = JSON.stringify(userInfo) // 同步存储token至localStorage
    }
  },
  getters: {
    // 获取token方法
    // 判断是否有token,如果没有重新赋值，返回给state的token
    getToken (state) {
      if (!state.token) {
        state.token = localStorage.getItem('token')
      }
      return state.token
    },
    getUserInfo (state) {
      if (!state.userInfo) {
        state.userInfo = localStorage.getItem('userInfo')
      }
      return JSON.parse(state.userInfo)
    },
    Roles({ commit }, newrouter){
      return new Promise((resolve, reject) => {
        commit('SET_NEWROUER',newrouter); //存储最新路由
        resolve(newrouter);
      }).catch(error => {
        reject(error);
      });
    },
  },
  // 异步的方法存储，需要警告mutations
  actions: {

  }
})
