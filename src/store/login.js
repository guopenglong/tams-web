import * as Api from '@/api/login'

const login = {
  state: {
  },
  mutations: {
  },
  actions: {
    OnLogin ({ commit }, username, password) {
      return new Promise((resolve, reject) => {
        Api.OnLogin(username, password)
          .then(res => {
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default login
