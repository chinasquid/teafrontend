import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routerMode = new Router({
	mode:'hisyory',
	base:'/',
	routes:[
		{
			path:'/',
			redirect:'home'
		},
		{
			name:'home',
			path: '/home',
			compoents:()=> import('@/view/home/Home')
		}
	]
})

export default new Router({
	module: hash,
	routes
})