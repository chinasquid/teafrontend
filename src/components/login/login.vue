<template>
	<div id="login" >
		<el-button type="text" @click="dialogFormVisible = true" text-color="blue">登录</el-button>

		<div v-if="logOreg">
			<el-dialog title="登录" :visible.sync="dialogFormVisible"  width="30%" center="true">
				<el-form :model="form">
					<el-form-item label="手机号" :label-width="formLabelWidth">
						<el-input v-model="form.phone" autocomplete="off"/>
					</el-form-item>
					<el-form-item label="密码" :label-width="formLabelWidth">
						<el-input v-model="form.password" autocomplete="off"/>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="changeLogState">切换到：注册</el-button>
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
				</div>
			</el-dialog>
		</div>

		<div v-else>
			<el-dialog title="注册" :visible.sync="dialogFormVisible"  width="30%" center="true">
				<el-form :model="form">
					<el-form-item label="手机号" :label-width="formLabelWidth">
						<el-input v-model="form.phone" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" :label-width="formLabelWidth">
						<el-select v-model="form.password" placeholder="请选择活动区域">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="changeLogState">切换到：登录</el-button>
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				dialogFormVisible: false,
				logOreg: true,//true时，为登录，false为注册
				form: {
					phone: '',
					password: '',
					region: '阿萨德',//默认值
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				formLabelWidth: '80px'
			}

		},
		computed: {
			switchLogMsg() {
				if (this.logOreg) {
					return '注册'
				} else {
					return '登录'
				}
			}
		}
		,
		methods: {
			changeLogState() {
				this.logOreg = !this.logOreg
			}
		}
	}
</script>

<style scoped>

</style>