import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n=new VueI18n({
  locale: 'en-US',
  messages:{
    'zh-CN': require('./i18n/langs/cn.js'),
    'en-US': require('./i18n/langs/en.js') 
  }
})

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
