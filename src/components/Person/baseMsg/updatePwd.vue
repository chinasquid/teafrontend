<template>
	<div style="margin-bottom: 20px;">
		<h2 class="PersonalTittle">密码修改</h2>
		<div>
			<h5 style="display: inline;margin-right: 10px;">手机号</h5>
			<el-input style="width: 200px;" :placeholder="phone" :disabled="false"/>
		</div>
		<div style="margin-top: 20px;">
			<h5 style="display: inline;margin-right: 10px;">验证码</h5>
			<el-input style="width: 200px;" v-model="code" placeholder="请输入验证码" />
			<el-button type="primary" style="width: 100px;margin-left: 10px;" size="small">发送验证码</el-button>
		</div>
		<div style="margin-top: 40px;">
			<h5 style="display: inline;margin-right: 10px;">新密码</h5>
			<el-input style="width: 200px;" v-model="newPwd" placeholder="请输入新密码" />
			<el-button type="primary" style="width: 100px;margin-left: 10px;" size="small" >确认修改</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'updatePwd',
		data() {
			return {
				phone: '110',
				showInput: true,
				code:'',
				newPwd:''
			}
		}
	}
</script>

<style scoped>
	.PersonalTittle {
		color: #409EFF
	}
</style>