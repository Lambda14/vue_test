import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    http_error_handler: function () {
      alert("Hello world")
    },
  },
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
