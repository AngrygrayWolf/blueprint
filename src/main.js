import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import './js/test'


Vue.config.productionTip = false
// window.$ = window.jQuery = require('jquery')
window.$ = window.jQuery = jQuery
new Vue({
  render: h => h(App),
}).$mount('#app')

