import { defineStore } from 'pinia'
import axios from 'axios'

if (localStorage.getItem('crmToken')) {
  axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(localStorage.getItem('crmToken') ?? '').token}`
}
const authAxios = axios.create({
  baseURL: 'https://test.gnzs.ru'
})

const itemsAxios = axios.create({
  baseURL: 'https://rmxtfurm45mw01.amocrm.ru'
})
export const useCrmStore = defineStore('useCrmStore', {
  state: () => ({
    contentList: []
  }),
  actions: {
    getToken (payload) {
      return new Promise((resolve, reject) => {
        authAxios.get('http://192.168.1.244:8081/oauth/get-token.php', {
          headers: {
            'Content-Type': 'application/json',
            'X-Client-Id': '31550986'
          }
        }).then(({ data }) => {
          localStorage.setItem('crmToken',
            JSON.stringify({
              token: data.access_token,
              base_url: data.base_domain
            })
          )
          resolve(data)
        }).catch((e) => {
          reject(e)
        })
      })
    },
    getContent: function (payload) {
      return new Promise((resolve, reject) => {
        itemsAxios.get(`http://192.168.1.244:8081/api/v4/${payload.value}`, {
          headers: {
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
          .then(({ data }) => {
            this.contentList = data?._embedded?.[payload.value] ?? []
            resolve(true)
          }).catch((e) => {
            reject(e)
          })
      })
    }
  }
})
