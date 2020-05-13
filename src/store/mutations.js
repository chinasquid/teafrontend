export default {
	changeSearchType(typeName) {
		this.state.searchtype = typeName
	},
	signOutSystem(state) {
		state.userBody.isLogin = false
		state.userBody.user_name = null;
		state.userBody.phone = null;
		state.userBody.user_id = null;
		state.userBody.user_type = null;
	},
	changeLoginIsTrue(){
		this.state.isLogin = true;
	},
	signInSystem(state,newUserBody){
		state.userBody.user_name = newUserBody.user_name;
		state.userBody.phone = newUserBody.phone;
		state.userBody.user_id = newUserBody.user_id;
		state.userBody.user_type = newUserBody.user_type
	}
}