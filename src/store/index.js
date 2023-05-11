import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    license: {}
  },
  mutations: {
    setLicense (state, payload) {
      state.license = payload
    }
  },
  getters: {
    getLicense (state) {
      return state.license
    }
  },
  actions: {
    async fetchLicenseInfo (ctx) {
      let r = await fetch('/license_status')
      r = await r.json()
      ctx.commit('setLicense', r)
    }
  },
  modules: {
  }
})
