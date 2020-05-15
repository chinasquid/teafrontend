import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
import store from '@/store'
import VueVideoPlayer from 'vue-video-player/src'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(VueVideoPlayer)
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$store = store

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.timeout = 3000
axios.defaults.withCredentials = true

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
}).$mount('#app')

