import Vue from 'vue'
import App from './App.vue'
import {i18n} from './plugins/i18n'
import router from './router'
import store from './vuex/store'
import '@/assets/style/style.scss'
// import 'material-design-icons-iconfont'



Vue.config.productionTip = false



new Vue({
  i18n,
  router,
  render: h => h(App),
  store
}).$mount('#app')
