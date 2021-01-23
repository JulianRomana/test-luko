import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import "@/styles/index.scss"

import '@/plugins/media-queries'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount("#app")
