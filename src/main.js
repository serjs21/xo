import Vue from 'vue'
import App from './App.vue'
import '@inkline/inkline/dist/inkline.css';
import Inkline from '@inkline/inkline';

Vue.config.productionTip = false
Vue.use(Inkline);

new Vue({
  render: h => h(App),
}).$mount('#app')
