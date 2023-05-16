import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    license: {},
    handledError: null

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
    license (state) {
      return state.license
    },
    errors (state) {
      return state.handledError
    }
  },
  actions: {
    async fetchLicenseInfo (ctx) {
      let r = await this.dispatch('provideRequest', {endpoint: '/license_status'})
      ctx.commit('setLicense', r)
    },

    async provideRequest (ctx, {endpoint, body}) {
      try {
        let r = await fetch(endpoint, body ? {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body)
        } : {});
        let data = await r.json()
        if (r.ok) return data 
        else {
          ctx.commit('setError', data)
          return false
        }
      }
      catch (e) { 
        ctx.commit('setError', e)
        return false
      }
    },

    clearErrors (ctx) {
      ctx.commit('setError', null)
    }
  },
  modules: {
  }
})
