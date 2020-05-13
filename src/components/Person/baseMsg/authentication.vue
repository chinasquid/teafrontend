<template>
	<div>
		<h2 class="PersonalTittle">实名认证</h2>
		<div style="margin-top: 20px;">
			<p style="font-size: 14px;">
				<span>完成实名信息认证，有助于提高用户信誉，获得更多的店铺优惠，</span>
				<span style="color: #F56C6C;font-weight: bold">实名信息一经认证，不可修改</span>
			</p>
		</div>
		<div>
			<h4 style="color: #F56C6C">未完成实名认证</h4>
			<div style="width: 300px;">
				<div>
					<span>真实姓名：</span>
					<el-input v-model="userName" placeholder="请输入姓名" @keyup.native="inputName" class="inputShow"/>
				</div>
				<div style="margin-top: 10px;">
					<span>身份证号：</span>
					<el-input v-model="IDCard" placeholder="请输入身份证号" @keyup.native="inputID" class="inputShow"/>
				</div>
			</div>
			<el-button type="primary" style="margin-left: 180px;margin-top: 20px;">确认实名</el-button>
		</div>
		<div>
			<h3 style="color: rgb(103,194,58)">已完成实名认证</h3>
			<div>
				<p style="font-size: 14px;">
					<span>真实姓名：</span>
					<span>*洋</span>
				</p>
				<p>
					<span>身份证号：</span>
					<span>5****************7</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'authentication',
		data() {
			return {
				userName: null,
				IDCard: null,

			}
		},
		methods: {
			inputID() {
				this.IDCard = this.IDCard.replace(/[^\d]/g, '')
			},
			inputName() {
				console.log('之前' + this.userName)
				this.userName = this.userName.replace(/[^\u4e00-\u9fa5]/g, '')
				console.log('之后' + this.userName)
			}
		}
	}
</script>

<style scoped>

	.inputShow {
		width: 200px;
	}

	.PersonalTittle {
		color: #409EFF
	}
</style>