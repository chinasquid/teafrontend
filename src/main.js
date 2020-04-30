import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')

// axios({
//     url:'http://localhost:8080'
// }).then(res =>{
//     console.log(res);
// }).catch(err =>{
//     console.log(err);
// })