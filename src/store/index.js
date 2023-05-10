import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    license: {}
  },
  mutations: {
  },
  getters: {
    getLicense () {
      return this.license
    }
  },
  actions: {
    async getLicenseInfo () {
      let r = await fetch('http://localhost:8888/license_status')
      r = await r.json()
      this.license = r
    }
  },
  modules: {
  }
})
