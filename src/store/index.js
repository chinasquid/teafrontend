import Vue from 'vue'
import Vuex from 'vuex'

import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'

const state = {
	searchType: 'All',
	userBody: {
		isLogin: false,
		user_name: null,
		user_id: null,
		user_type: null,
		phone: null,
		head_img: null
	},
	goodsDetailsList:[]
}

Vue.use(Vuex)
const store = new Vuex.Store({
		state,
		mutations,
		actions,
		getters,
		modules() {
		}
	}
)

export default store