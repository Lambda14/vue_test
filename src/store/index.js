import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    license: {},
    handledError: {}

  },
  mutations: {
    setLicense (state, payload) {
      state.license = payload
    },
    setError (state, payload) {
      state.handledError = payload
    }
  },
  getters: {
    getLicense (state) {
      return state.license
    },
    getErrors (state) {
      return state.handledError
    }
  },
  actions: {
    async fetchLicenseInfo (ctx) {
      let r = await fetch('/license_status')
      r = await r.json()
      ctx.commit('setLicense', r)
    },
    async fetchError (ctx, payload) {
      let status_code = payload.response.status
      let status_code_class = String(status_code)[0]
      let res = await payload.response.json()
      if (status_code_class == '2') { return res } //ok
      else if (status_code_class == '4') { payload.response = res; payload.text = `Произошла ошибка клиентской части во время операции: ${payload.text}` ; ctx.commit('setError', payload); return false } //ошибка на клиентской стороне
      else if (status_code_class == '5') { payload.response = res; payload.text = `Произошла ошибка серверной части во время операции: ${payload.text}` ; ctx.commit('setError', payload); return false } //ошибка на серверной стороне
      else { return true } //не очень интересные классы (100, 300) 
    },
    clearErrors (ctx) {
      ctx.commit('setError', {})
    }
  },
  modules: {
  }
})
