import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
	return VueRouterPush.call(this, to).catch(err => err)
}

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
			path: '/goodsDetails/:id',
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
			name:'search',
			component: () => import('@/view/search/SearchView'),
			// children: [
			// 	{
			// 		path: '/',
			// 		redirect: 'tea'
			// 	},
			// 	{
			// 		path: 'tea',
			// 		name: 'tea',
			// 		component: () => import('@/view/search/SearchClass/SearchTeaClass')
			// 	},
			// 	{
			// 		path: 'business',
			// 		name: 'business',
			// 		component: () => import('@/view/search/SearchClass/SearchStoreClass')
			// 	},
			// 	{
			// 		path: 'teaSet',
			// 		name: 'teaSet',
			// 		component: () => import('@/view/search/SearchClass/SearchTeaSetClass')
			// 	}
			// ]
		}
	]
})

export default router