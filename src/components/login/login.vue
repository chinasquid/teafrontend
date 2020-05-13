<template>
	<div id="login" style="margin-top: 0;padding: 0;">
		<el-button type="success" @click="isLogin">是否登录</el-button>
		<div v-if="this.$cookies.get('user_type') != null">
			<div style="width: 100px;" @mouseover="showActiveTrue" @mouseleave="showActiveFalse">
				<div style="margin-top: 10px;text-align: center;" >
					<el-avatar>
						<span style="font-size: 10px;display: inline-block">{{$cookies.get('user_name')}}</span>
					</el-avatar>
				</div>
				<div :class="{showMoreMsg : moreMsgActive,showMoreMsgFalse: !moreMsgActive}">
					<div v-if="this.$cookies.get('user_type') === '1'">
						<ul class="moreUl" style="height: 120px;">
							<li class="moreLi">
								<router-link to="/personal">
									<a style="font-size: 14px;color: white;">个人中心</a>
								</router-link>
							</li>
							<li class="moreLi" @click="LevelUpToStorePop">
								<a style="font-size: 14px;color: white;">升级为商家</a>
							</li>
							<li class="moreLi" @click="signOut">
								<a style="font-size: 14px;color: white">退出登录</a>
							</li>
						</ul>
					</div>
					<div v-else>
						<ul class="moreUl" style="height: 80px;">
							<li class="moreLi">
								<router-link to="/businessManage">
									<a style="font-size: 14px;color: white;">商家中心</a>
								</router-link>
							</li>
							<li class="moreLi" @click="signOut">
								<a style="font-size: 14px;color: white">退出登录</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<el-button type="text" @click="dialogFormVisible = true" text-color="blue" style="padding: 0">
				<h3 style="padding: 0;">登录</h3>
			</el-button>
			<div v-if="logOreg">
				<el-dialog title="登录" :visible.sync="dialogFormVisible" width="30%">
					<el-form :model="loginData">
						<el-form-item label="手机号" :label-width="formLabelWidth">
							<el-input v-model="loginData.phone" autocomplete="off"/>
						</el-form-item>
						<el-form-item label="密码" :label-width="formLabelWidth">
							<el-input v-model="loginData.password" autocomplete="off"/>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="changeLogState">切换到：注册</el-button>
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="tryLogin">登 录</el-button>
					</div>
				</el-dialog>
			</div>
			<div v-else>
				<el-dialog title="注册" :visible.sync="dialogFormVisible" width="30%" :center="true">
					<el-form :model="registerData">
						<el-form-item label="用户名" :label-width="formLabelWidth">
							<el-input v-model="registerData.user_name" autocomplete="off" maxlength="10" show-word-limit/>
						</el-form-item>
						<el-form-item label="手机号" :label-width="formLabelWidth">
							<el-input v-model="registerData.phone" autocomplete="off" maxlength="11" show-word-limit/>
						</el-form-item>
						<el-form-item label="密码" :label-width="formLabelWidth" maxlength="20" show-word-limit>
							<el-input v-model="registerData.password" autocomplete="off" show-password/>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="changeLogState">切换到：登录</el-button>
						<el-button @click="dialogFormVisible = false">取 消</el-button>
						<el-button type="primary" @click="tryRegister" :disabled="registerParamRule">注 册</el-button>
					</div>
				</el-dialog>
			</div>
		</div>
		<el-dialog title="升级为商家" :visible.sync="levelUp">
			<p>当前为内测版本，升级为商家，将享受商家服务，内测版本结束后将不会保留数据</p>
			<el-button type="info" @click="LevelUpToStore">取消</el-button>
			<el-button type="success" @click="open2">确认</el-button>
		</el-dialog>
	</div>
</template>

<script>
	// import axios from 'axios'

	export default {
		name: 'login',
		data() {
			return {
				loginSuccess: false,
				levelUp: false,
				dialogFormVisible: false,
				logOreg: true,
				loginData: {
					phone: null,
					password: null,
				},
				registerData: {
					phone: null,
					password: null,
					user_name: null,
				},
				formLabelWidth: '80px',
				moreMsgActive: false,
			}
		},
		computed: {
			registerParamRule() {
				return this.registerData.user_name == null || this.registerData.phone == null || this.registerData.password == null
			}
		},
		methods: {
			changeLogState() {
				this.logOreg = !this.logOreg
			},
			tryRegister() {
				this.$axios.post('/register', this.registerData).then(res => {
					console.log(res.data);
					this.$message({
						message: res.data.msg,
						type: 'success'
					});
					this.dialogFormVisible = false;
					this.registerData.phone = null;
					this.registerData.password = null;
					this.registerData.user_name = null;
				}).catch(err => {
					console.log(err)
				})
			},
			isLogin() {
				this.$axios.get('/isLogin').then(res => {
					console.log(res.data)
					if (res.data.status === 1) {
						this.$cookies.set('user_name',res.data.body.user_name)
						this.$cookies.set('user_id',res.data.body.user_id)
						this.$cookies.set('phone',res.data.body.phone)
						this.$cookies.set('user_type',res.data.body.user_type)
						this.$message({
							message: '已登录',
							showClose: true
						})
					} else {
						this.$cookies.remove('user_name')
						this.$cookies.remove('user_id')
						this.$cookies.remove('phone')
						this.$cookies.remove('user_type')
						this.$store.commit('signOutSystem')
						this.$message({
							message: '未登录，请登录！',
							showClose: true
						})
					}
				}).catch(err => {
					console.log(err)
				})
			},
			tryLogin() {
				this.$axios.post('/login', this.loginData).then(res => {
					console.log(res.data);
					if (res.data.status === 1) {
						this.$message({
							message: "登录成功！",
							type: 'success'
						});
						this.$store.commit('signInSystem', res.data.body);//存储用户信息，弃用
						this.$cookies.config('default_unit_second', 'input_value', '0');
						this.$cookies.config(60 * 30)
						this.$cookies.set('user_name', res.data.body.user_name)
						this.$cookies.set('user_id', res.data.body.user_id)
						this.$cookies.set('phone', res.data.body.phone)
						this.$cookies.set('user_type', res.data.body.user_type)
						localStorage.setItem('user_type', res.data.body.user_type)
						this.loginSuccess = true
						this.dialogFormVisible = false;
						// window.location.reload()
					} else {
						this.$message({
							message: "登录失败，请重试！",
							type: 'warning'
						})
					}
				}).catch(err => {
					console.log(err)
				})
			},

			showActiveTrue() {
				this.moreMsgActive = true
			},
			showActiveFalse() {
				this.moreMsgActive = false
			},
			LevelUpToStorePop() {
				this.levelUp = true
			},
			LevelUpToStore() {
				this.levelUp = false
			},
			signOut() {
				this.$axios("/signOut").then(res => {
					this.$cookies.remove('user_name')
					this.$cookies.remove('user_id')
					this.$cookies.remove('phone')
					this.$cookies.remove('user_type')
					// this.$store.commit('signOutSystem')
					this.$message({
						message: res.data.msg,
						type: 'success'
					})
					localStorage.removeItem('user_type')
					this.loginSuccess = false
					window.reload()
				}).catch(err => {
					console.log(err)
				})

			},
			open2() {
				this.$axios.get('/levelUp').then(res=>{
					this.$message({
						message:res.data.msg,
						type:'success'
					})
					this.$cookies.set("user_type",2)
				}).catch(err=>{
					console.log(err)
				})
				this.levelUp = false
			},
		}
	}
</script>

<style scoped>
	.moreLi {
		height: 30px;
		padding-top: 10px;
	}

	.moreLi:hover {
		background-color: #69B170;
	}

	.moreUl {
		list-style: none;
		padding: 0;
		background-color: #87D990;
		width: 100px;
	}

	.showMsgBack {

	}

	.showMoreMsg {
		display: block;
	}

	.showMoreMsgFalse {
		display: none;
	}
</style>