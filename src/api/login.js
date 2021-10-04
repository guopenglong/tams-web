import { axios } from '@/util/request'

export const OnLogin = (username, password) => {
  return axios({
    url: 'login',
    method: 'post',
    username,
    password
  })
}
