import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: '/',
			redirect: 'home'
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('@/view/home/Home')
		},
		{
			path: '/goodsDetails',
			name: 'goodsDetails',
			component: () => import('@/view/Goods/GoodsView')
		},
		{
			path: '/personal',
			name: 'personal',
			component: () => import('@/view/person/PersonView')
		},
		{
			path: '/businessManage',
			name:'businessManage',
			component: () => import('@/view/person/businessView'),
		},
		{
			path: '/search',
			component: () => import('@/view/search/SearchView'),
			children: [
				{
					path: '/',
					redirect: 'tea'
				},
				{
					path: 'tea',
					name: 'tea',
					component: () => import('@/view/search/SearchClass/SearchTeaClass')
				},
				{
					path: 'business',
					name: 'business',
					component: () => import('@/view/search/SearchClass/SearchStoreClass')
				},
				{
					path: 'teaSet',
					name: 'teaSet',
					component: () => import('@/view/search/SearchClass/SearchTeaSetClass')
				}
			]
		}
	]
})

export default router