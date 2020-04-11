// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketIO from 'vue-socket.io'
// import store from './store'
 // let connectionString = 'http://39.108.130.210:8866';
//let connectionString = 'http://localhost:8866';
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(new VueSocketIO({
  debug: true,
  // 服务器端地址
   connection: 'http://39.108.130.210:8866',
  //connection: connectionString,
  vuex: {
    // store,
    // actionPrefix: 'SOCKET_',
    // mutationPrefix: 'SOCKET_'
  }
}))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')



