
export default {
	mutations: {
		changeSearchType(typeName) {
			this.state.searchtype = typeName;
		},
		changeLoginStatus(){
			this.state.isLogin = !this.state.isLogin;
		}
	}
}